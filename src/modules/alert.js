function alertPopup() {
    const form = document.querySelector("#weather-form");
    const popup = document.querySelector("#popup");

    if (!popup) {
        const alert = document.createElement("div");

        alert.innerHTML = "Place not found";
        alert.setAttribute("id", "popup");

        form.appendChild(alert);
    } else return;
}

export default alertPopup;