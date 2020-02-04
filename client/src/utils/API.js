import 'whatwg-fetch'

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  grabUser: function(username, password) {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
  }
};