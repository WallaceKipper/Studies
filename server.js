const EmailServer = require('./email')

const listUsers = [
    {name: "Wallace", age: 28, email: "wallace@server.com"},
    {name: "Grazi", age: 22, email: "grazi@server.com"},
    {name: "Yasmin", age: 20, email: "yasmin@server.com"},
]

listUsers.forEach(user => {
    const emailServer = new EmailServer()
    emailServer.sendEmail(user.name, user.email, user.age)
})

