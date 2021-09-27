class EmailServer { 

    sendEmail(name, email, age){

        if (age < 25){
            console.log(`${name}, não pode enviar email pois não tem idade suficiente`)
        } else {
            setTimeout(() => {
                console.log(`Enviando email para: ${name} - ${email}`)
                return {
                    success: true
                }
            }, 2000)
        }
    }
}

module.exports = EmailServer