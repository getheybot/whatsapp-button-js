
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    
</head>
<body>

<script>
    window.Heybot = {
        BotAvatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        BotName: 'Your Bot Name',
        BotPhoneNumber: '521XXXXXXXXXX', // Country Code + 1 + Phone number
        BotUiMessage: `<p>Hi there 👋</p><p>How can I help you?</p>`,
        BotChatMessage: `Hi there 👋`,
        Open: true
    }
</script>

<script src="https://cdn.jsdelivr.net/gh/getheybot/whatsapp-button-js@0.0.2/dist/whatsapp.min.js" async></script>
</body>
</html>
```