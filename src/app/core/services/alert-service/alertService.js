const addAlert = (type, value) => {
    const alertContainer = document.getElementById("alert-container");

    const alert = document.createElement("div");
    const text = document.createElement("span");

    text.innerText = value;

    alert.classList.add("alert");
    alert.classList.add(`${type}`);
    alert.appendChild(text);

    alertContainer.appendChild(alert);

    setTimeout(() => {
        alert.classList.add("remove");
        setTimeout(() => {
            alert.remove();
        }, 300);
    }, 3000);
};

export class AlertService {
    static error(text) {
        addAlert("error", text);
    }
    static warning(text) {
        addAlert("warning", text);
    }
    static access(text) {
        addAlert("access", text);
    }
}
