# Frontend Auth

## Outline

- [ ] Handle register/login actions in frontend
  - Request: send form data
  - Response: save token (`localStorage`), save user (state)
- [ ] Log out
  - Clear token from `localStorage`
  - Clear user from state
- [ ] Auto-login
  - Check token in `localStorage`
  - Request: send token
  - Response: save user (state)
- [ ] Authenticate user for other requests using token
- [ ] **Bonus**: Response error handling

## Register/Login

Our first authentication actions on the frontend are to allow a user to register
for a new account, or login to an existing account. For both of these actions,
we'll need a form where a user can enter their username + password (and in the
case of register, any other details we want to save to their user account).
Here's an example of the setup we'd need for a login form:

```js
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: make a fetch request to login the current user
    // save the user's token
    // then set that user in state in our App component
    // and redirect to the home page
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
```

When the user submits the form, we'll need to send a request to our `login`
action in the backend with their username and password. Then, just like usual,
we'll want to store the response from the server in state somewhere in our
application (depending where we need access to a `currentUser` object):

```js
function handleSubmit(e) {
  e.preventDefault();
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((r) => r.json())
    .then((data) => {
      // data is an object with a user and token: { user, token }
      // setCurrentUser is a callback function from the App component
      setCurrentUser(data.user);
    });
}
```

We **also** want to save the user's _token_ from the response, so that we can
authenticate the user for their subsequent requests.

Remember, the token is a signed, encoded string that contains the user's ID.
When we send that token to the server, we can access the user id from it. We can
also check if the token was tampered with by verifying the signature.

Since we want users to remain 'logged in' even if they open our app in a new
tab, or leave the page and come back, we can't just save the token in state. We
need to persist it somewhere the browser can access any time the user visits our
website. To do that, we'll use [`localStorage`][localstorage].

```js
  .then((data) => {
    // data is an object with a user and token: { user, token }
    // setCurrentUser is a callback function from the App component
    setCurrentUser(data.user);
    // use localStorage to save the token
    localStorage.setItem("token", data.token)
  });
```

We can also redirect the user to a new page after logging in by using the
`history` object from React Router:

```js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => r.json())
      .then((data) => {
        // data is an object with a user and token: { user, token }
        // setCurrentUser is a callback function from the App component
        setCurrentUser(data.user);
        // use localStorage to save the token
        localStorage.setItem("token", data.token);
        // redirect
        history.push("/");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
```

Now, our user is successfully authenticated on the frontend, which means that we:

- have a token saved in `localStorage`
- have a user saved in state

## Logout

To logout a user, we need to do the following:

- Remove their token from `localStorage`
- Remove the current user from state

To achieve this, you might set up a component with a logout button, like so:

```js
function LogoutButton({ setCurrentUser }) {
  function logout() {
    // remove the token
    localStorage.removeItem("token");
    // remove the current user from state
    setCurrentUser(null);
  }

  return <button onClick={logout}>Logout</button>;
}
```

## Authenticating Requests

Since we have access to a token saved in `localStorage`, let's see how we can
use that token to authenticate our user for some other requests. Recall in our
backend we set up a method to check the `Authorization` header for a token, like
this:

```rb
def show
  # headers['Authorization'] = "Bearer aaaaaaa.bbbbbbb.ccccccc"
  auth_token = headers['Authorization'].split.last if headers['Authorization'].present?
  begin
    decoded_token = JWT.decode(auth_token, Rails.application.secrets.secret_key_base, true, { algorthim: 'HS256' })[0]
    user = User.find(decoded_token['user_id'])
    user.update(avatar: params[:avatar], bio: params[:bio])
    render json: user
  rescue
    render json: { error: "Unauthorized" }, status: :unauthorized
  end
end
```

In order to send that token to the backend with our request, we'll need to make
sure to use that token in the headers. For example, if we wanted to make a
request to get the current user's profile, we'd do so like this:

```js
const token = localStorage.getItem("token");
fetch("http://localhost:3000/profile", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((r) => r.json())
  .then((user) => console.log(user));
```

This same approach will work any time you need to make a request that needs to
be authenticated in your backend.

## Auto-login

Picture this scenario: a user visits our webpage, and logs in. After some time, they
exit out of their browser, then later, return to our site. The expectation most users
would have is that they wouldn't need to log back in every time they visit our site.

To achieve this functionality, we need to add a side effect to our component to
automatically log the user in, assuming they've logged in before. Remember,
we've been saving the user's token in `localStorage`, so we're set up nicely to
build out this feature.

In the same component we're saving the user in state, we can use the `useEffect`
hook to try to log the user in. Here's how that would look:

```js
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => setCurrentUser(user));
    }
  }, []);

  // rest of component
}
```

## Bonus: Error Handling

In our backend, we set up our controller actions to return one of two things:

- **Success**: JSON data, and a good status code (2xx)
- **Error**: JSON data, and a bad status code (4xx)

For example, take a look at the `login` action:

```rb
  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = encode_token({ user_id: user.id })
      # success response
      render json: { user: UserSerializer.new(user), token: token }
    else
      # success response
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end
```

In order to handle those errors in the frontend, we need to check the status of
the response and decide what we want to do for a successful response vs an error
response. Luckily for us, the `response` object returned from the `fetch` request
gives us access to the status code. We have to do a bit of extra work to parse the
response, however. Here's one way we can do it:

```js
fetch("http://localhost:3000/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username, password }),
})
  .then((r) => {
    return r.json().then((data) => {
      // .ok is true for good status codes, and false for bad status codes
      if (r.ok) {
        // return data to the next .then method
        return data;
      } else {
        // throw data to the .catch method
        throw data;
      }
    });
  })
  .then((data) => {
    // success:
    console.log(data);
  })
  .catch((data) => {
    // error:
    console.error(data);
  });
```

Now that we have access to the error messages from the server, we can decide how
we'd like to present them to our users. One option is to create a new state
variable to save the error response and show it to our users:

```js
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // error state
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) =>
        r.json().then((data) => {
          if (r.ok) return data;
          throw data;
        })
      )
      .then((data) => {
        // success:
        console.log(data);
      })
      .catch((data) => {
        // error:
        setError(data);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        {/* Show error message to user */}
        {error ? <p style={{ color: "red" }}>Error: {error}</p> : null}

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
```

## Bonus: Auth Client

```js
class FetchClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(endpoint, { withAuth = false } = {}) {
    const options = { method: "GET" };
    if (withAuth) {
      options.headers = { Authorization: `Bearer ${this._getToken()}` };
    }
    return this._fetch(this.baseUrl + endpoint, options);
  }

  delete(endpoint, { withAuth = false } = {}) {
    const options = { method: "DELETE" };
    if (withAuth) {
      options.headers = { Authorization: `Bearer ${this._getToken()}` };
    }
    return this._fetch(this.baseUrl + endpoint, options);
  }

  patch(endpoint, data, { withAuth = false } = {}) {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    if (withAuth) {
      options.headers["Authorization"] = `Bearer ${this._getToken()}`;
    }
    return this._fetch(this.baseUrl + endpoint, options);
  }

  post(endpoint, data, { withAuth = false } = {}) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    if (withAuth) {
      options.headers["Authorization"] = `Bearer ${this._getToken()}`;
    }
    return this._fetch(this.baseUrl + endpoint, options);
  }

  _getToken() {
    return localStorage.getItem("token");
  }

  _fetch(endpoint, options) {
    return fetch(endpoint, options).then((response) =>
      response.json().then((data) => {
        if (response.ok) return data;
        throw data;
      })
    );
  }
}

const baseUrl = "http://localhost:3000";
const client = new FetchClient(baseUrl);

export default client;
```

Usage:

```js
// unauthenticated action
client
  .post("/login", { username: "Ian", password: "123" })
  .then((data) => console.log("Success: ", data))
  .catch((data) => console.log("Error: ", data));

// authenticated action
client
  .get("/profile", { withAuth: true })
  .then((data) => console.log("Success: ", data))
  .catch((data) => console.log("Error: ", data));
```

## Resources

- [MDN localStorage][localstorage]

[localstorage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
