document.addEventListener("DOMContentLoaded", function () {
    // Append CSS
    let cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "https://cdn.jsdelivr.net/gh/getheybot/whatsapp-button-js@main/dist/app.css";
    document.head.appendChild(cssLink);

    // Append JS
    let scriptTag = document.createElement("script");
    scriptTag.src = "https://cdn.jsdelivr.net/gh/getheybot/whatsapp-button-js@main/dist/app.js";
    document.head.appendChild(scriptTag);
});