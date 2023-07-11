require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://kryptonum.eu');
  if(req.method === `POST`){
    sgMail.send({
      to: 'michal@kryptonum.eu',
      from: 'michal@kryptonum.eu',
      subject: 'Formularz pod FAQ - kryptonum.eu',
      replyTo: `${req.body.mail}`,
      html: `
      <div>
        <div>
          <p><b>Email:</b> ${req.body.mail}</p>
          <p><b>Wiadomość:</b> ${req.body.message}</p>
        </div
      </div>
      `,
    })
    .then(() => {
      res.status(200).json({ success: true })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
  } else {
    res.redirect(404, '/404')
  }
}