class AuthenticationApi {
    static userUrl = 'https://646e07219c677e23218ae1e2.mockapi.io/users/user'

    static setUser(login, password, token) {
        return new Promise((resolve, reject) => {
            fetch(this.userUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    login: login,
                    password: password,
                    token: token,
                    orders: []
                })
            })
                .then(response => {
                    if (response.ok) {
                        resolve()
                    } else {
                        reject(new Error('Failed to set user'))
                    }
                })
                .catch(error => reject(error))
        })
    }

    static getUserByLogin(userData) {
        return fetch(this.userUrl)
            .then(response => response.json())
            .then(data => {
                return data.find(element => userData === element.login)
            })
            .catch(error => { throw error })
    }

    static getUserByToken(userToken) {
        return fetch(this.userUrl)
            .then(response => response.json())
            .then(data => {
                return data.find(element => userToken === element.token.toString())

            })
            .catch(error => { throw error })
    }

    static async changeUserOrders(userToken, orders) {
        const userData = await this.getUserByToken(userToken)       
        const userId = userData.id

        userData.orders = orders

        return fetch(`${this.userUrl}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Failed to change user data')
            }
        })
        .catch(error => { throw error })
    }
}

export { AuthenticationApi }