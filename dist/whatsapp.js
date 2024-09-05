document.addEventListener("DOMContentLoaded", function () {
    const AlpineNotInstalled = window.Alpine === undefined;

    let _scriptAlpineFocusPlugin = document.createElement("script");
    _scriptAlpineFocusPlugin.src = "https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js";
    document.head.appendChild(_scriptAlpineFocusPlugin);

    if (AlpineNotInstalled) {
        let _scriptAlpine = document.createElement("script");
        _scriptAlpine.src = "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js";
        document.head.appendChild(_scriptAlpine);

        Alpine.plugin(focus)
    }

    const _cdnUrl = 'https://cdn.jsdelivr.net/gh/getheybot/whatsapp-button-js';
    const _cdnUrlVersion = '0.0.10';
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