document.addEventListener("DOMContentLoaded", function() {
    const heroElement = document.querySelector(".hero-container");

    if (heroElement) {
        fetch("/")
            .then(response => response.text())
            .then(data => {
                heroElement.innerHTML = data;
            })
            .catch(error => console.log("Error cargando el hero", error));
    }   
});
