require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const sgMail = require('@sendgrid/mail')

export default async function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  sgMail
    .send({
      to: 'michal@kryptonum.eu',
      from: 'michal@kryptonum.eu',
      subject: 'Szybki formularz - kryptonum.eu',
      text: 'Wiadomość z szybkiego formularza kontaktowego.',
      html: `
      <div>
        <div>
          <p><b>Imię:</b> ${req.body.name}</p>
          <p><b>Telefon:</b> ${req.body.phone}</p>
          <p><b>Email:</b> ${req.body.mail}</p>
        </div
      </div>
      `,
    })
    .then(() => {
      // sgMail.send({
      //   to: req.body.mail,
      //   from: 'kryptonumstudio@gmail.com',
      //   subject: 'Kryptonum Studio - Formularz kontaktowy',
      //   text: 'Dziękujemy za kontakt, odpowiemy najszybciej jak to możliwe.',
      //   html: `
      //   <div>
      //     <div>
      //       <p>Dziękujemy za kontakt, odpowiemy najszybciej jak to możliwe.</p>
      //       <p>Tutaj jest kopia twojej wiadomości:</p>
      //       <p><b>Imię:</b> ${req.body.name}</p>
      //       <p><b>Telefon:</b> ${req.body.phone}</p>
      //       <p><b>Email:</b> ${req.body.mail}</p>
      //     </div
      //   </div>
      //   `,
      // })
      //   .then(() => {
          res.status(200).send({
            statusMSG: 'Email wysłany pomyślnie'
          });
        // })
        // .catch(() => {
        //   res.status(400).send({
        //     statusMSG: 'Błąd wysyłania wiadomości do ciebie'
        //   });
        // })
    })
    .catch(() => {
      res.status(400).send({
        statusMSG: 'Błąd wysyłania wiadomości do nas'
      });
    })
}