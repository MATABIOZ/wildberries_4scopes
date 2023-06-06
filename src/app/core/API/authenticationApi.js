class AuthenticationApi {
    static userUrl = 'https://646e07219c677e23218ae1e2.mockapi.io/users/user'

    static setUser(login, password) {
        fetch(this.userUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password,           
            })
        })
            .catch(error => { throw error })
    }

    static getUser(userData) {
          return  fetch(this.userUrl)
            .then(response => response.json())
            .then(data => {
                return data.find(element => userData === element.login)
            })
            .catch(error => {throw error})
        } 
    }

export { AuthenticationApi }