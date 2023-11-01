const nodemailer = require('nodemailer');

const sendmail = (options)=> {
    let transporter = nodemailer.createTransport({
        host: '',
        port: 587,
        secure: false,
        auth: {
            user: "",
            pass: ""
        }
    })

    let mailOptions = {
        from: '"Favour Akomolafe" <akomolafefavour@gmail.com>',
        to: "",
        subject: "User Registration Details",
        text: "Successful Registration",
        html: '<b>Hello world </b><br/> <br/> <img src="cid:image"/>',
    
        attachments: [
            {
                filename: '',
                path: "",
                cid: "image"
            }
        ]
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error) {
            return console.log(error)
        }

        console.log("Message sent: %s", info.messageId)
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl())
    })
}

module.exports = sendmail












