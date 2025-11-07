const nodemailer=require('nodemailer');

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

     let  transport= nodemailer.createTransport({
            host:"",
            port:1,
            secure:false,
            auth:{user:"",pass:""},
            tls:{rejectUnauthorized:false}
        })


    let mailOption={
         from:'',
         to:EmailTo,
         subject:EmailSubject,
         text:EmailText
    }

    return await transport.sendMail(mailOption)
}

module.exports=EmailSend;