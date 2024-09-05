document.addEventListener("DOMContentLoaded", function () {
    const _cdnUrl = 'https://cdn.jsdelivr.net/gh/getheybot/whatsapp-button-js';
    const _cdnUrlVersion = '0.0.5';
    const _cdnBase = `${_cdnUrl}@${_cdnUrlVersion}`;
    // Append CSS
    let cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.href = `${_cdnBase}/dist/app.css`;
    document.head.appendChild(cssLink);

    // Append JS
    let scriptTag = document.createElement("script");
    scriptTag.src = `${_cdnBase}/dist/app.js`;;
    document.head.appendChild(scriptTag);
});