document.addEventListener("DOMContentLoaded", function () {
    // Append CSS
    let cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = "path/to/your-stylesheet.css";
    document.head.appendChild(cssLink);

    // Append JS
    let scriptTag = document.createElement("script");
    scriptTag.src = "path/to/your-script.js";
    document.head.appendChild(scriptTag);
});