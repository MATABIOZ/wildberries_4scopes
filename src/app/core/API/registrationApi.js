const userUrl = 'https://646e07219c677e23218ae1e2.mockapi.io/users/user'

function setApi(login, password, id) {
    fetch(userUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: login,
            password: password,
            id: id
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Пользователь создан:', data);
        })
        .catch(error => {
            console.error('Ошибка при создании пользователя:', error);
        });
}

async function getApi(usdata) {
    try {
        const response = await fetch(userUrl);
        const data = await response.json();
        return data.find(element => usdata === element.login);
    } catch (error) {
        throw error;
    }
}

export { setApi, getApi }