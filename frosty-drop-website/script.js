// Run everything AFTER page loads
document.addEventListener("DOMContentLoaded", function () {

    // -------------------------
    // PRODUCTS PAGE LOGIC ONLY
    // -------------------------
    if (window.location.pathname.includes("products.html")) {

        const params = new URLSearchParams(window.location.search);
        const category = params.get("category");

        const products = document.querySelectorAll(".card[data-category]");

        // If NO category selected → hide everything
        if (!category) {
            products.forEach(product => {
                product.style.display = "none";
            });

            const message = document.createElement("h2");
            message.innerText = "Please select a category from Categories page";
            message.style.textAlign = "center";
            document.body.appendChild(message);
        }

        // If category selected → filter
        if (category) {
            products.forEach(product => {
                if (product.getAttribute("data-category") !== category) {
                    product.style.display = "none";
                }
            });
        }
    }

    // -------------------------
    // SERVICES PAGE FUNCTIONS
    // -------------------------

    window.toggleDelivery = function () {
        const delivery = document.getElementById("deliverySheet");
        const custom = document.getElementById("customSheet");

        if (delivery) delivery.style.display = "block";
        if (custom) custom.style.display = "none";
    };

    window.toggleCustom = function () {
        const delivery = document.getElementById("deliverySheet");
        const custom = document.getElementById("customSheet");

        if (custom) custom.style.display = "block";
        if (delivery) delivery.style.display = "none";
    };

    window.changeQty = function (btn, change) {
        let span = btn.parentElement.querySelector("span");
        let value = parseInt(span.innerText) || 0;

        value += change;
        if (value < 0) value = 0;

        span.innerText = value;
    };

    window.saveDelivery = function () {
    alert("Your order has been received. We will be with you shortly.");

    // Clear inputs
    const inputs = document.querySelectorAll("#deliverySheet input");
    inputs.forEach(input => input.value = "");

    // Reset quantities
    const quantities = document.querySelectorAll("#deliverySheet .menu-item span");
    quantities.forEach(span => span.innerText = "0");
};
    window.saveCustom = function () {
    alert("Your custom drink order has been confirmed.");

    // Clear text inputs
    const inputs = document.querySelectorAll("#customSheet input[type='text']");
    inputs.forEach(input => input.value = "");

    // Uncheck fruits
    const checkboxes = document.querySelectorAll("#customSheet input[type='checkbox']");
    checkboxes.forEach(box => box.checked = false);
};
window.openFullscreen = function () {
    const video = document.getElementById("promoVideo");

    if (!video) {
        alert("Video not found");
        return;
    }

    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE
        video.msRequestFullscreen();
    } else {
        alert("Fullscreen not supported on this browser");
    }
};

});