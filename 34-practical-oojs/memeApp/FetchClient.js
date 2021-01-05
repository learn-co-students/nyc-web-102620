class FetchClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint)
      .then(response => response.json())
  }

  delete(endpoint) {
    return fetch(this.baseUrl + endpoint, {
      method: "DELETE"
    })
      .then(response => response.json())
  }

  patch(endpoint, dataObj) {
    return fetch(this.baseUrl + endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataObj)
    })
      .then(response => response.json())
  }

  post(endpoint, dataObj) {
    return fetch(this.baseUrl + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataObj)
    })
      .then(response => response.json())
  }

}

const baseUrl = "http://localhost:3000"
const client = new FetchClient(baseUrl)
