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
