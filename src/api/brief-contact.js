require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const sgMail = require('@sendgrid/mail')

export default async function handler(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  sgMail
    .send({
      to: 'kryptonumstudio@gmail.com',
      from: 'kryptonumstudio@gmail.com',
      subject: 'Kryptonum Studio - Brief kontaktowy',
      text: 'Wiadomość z briefu kontaktowego.',
      html: `
      <div>
        <div>
          <h1>Wiadomość z briefu kontaktowego</h1>
          <h2>Dane kontaktowe:</h2>
          <div>
            <p><b>Imię:</b> ${req.body.Client['name']}</p>
            <p><b>Email:</b> ${req.body.Client['e-mail']}</p>
          </div>
          <h2>Dane o marce:</h2>
          <div>
            <p><b>Marka teraz:</b> ${req.body.Brand.experience}</p>
            ${Object.keys(req.body.Brand).map((key) => {
              if (key === 'experience' || key === 'additional info') {
                return null
              }
              return req.body.Brand[key] ? `<p><b>${key}:</b> ${req.body.Brand[key]}</p>` : null
            }).join('')}
            <p><b>Dodatkowe informacje:</b> ${req.body.Brand['additional info'] || 'Brak'}</p>
          </div>
          <h2>Dane o projekcie:</h2>
          <div>
          ${req.body.Needed?.['Need website'] ? `
            <p><b>Chce bloga:</b> ${req.body.Needed['Need website']['blog'] ? 'Tak' : 'Nie'}</p>
            <p><b>Chce sklep internetowy:</b> ${req.body.Needed['Need website']['e-commerce'] ? 'Tak' : 'Nie'}</p>
            <p><b>Chce aplikację webową:</b> ${req.body.Needed['Need website']['website'] ? 'Tak' : 'Nie'}</p>
          ` : ``}
            ${req.body.Needed?.['Need design'] ? `
              <p><b>Chcę Księge znaku:</b> ${req.body.Needed['Need design']['Brand book'] ? 'Tak' : 'Nie'}</p>
              <p><b>Chcę Grafiki do social mediów:</b> ${req.body.Needed['Need design']['Social media graphics'] ? 'Tak' : 'Nie'}</p>
              <p><b>Chcę Grafiki do druku:</b> ${req.body.Needed['Need design']['Print graphics'] ? 'Tak' : 'Nie'}</p>
              ${req.body.Needed['Need design'].Logo ? `
                <p><b>Chcę logo:</b>Tak</p>
                <h3>Jakie chce logo:</h3>
                <p>Po skale od 1 do 7 która opcja jest mi bliżej.</p>
                <div>
                  <p>Klasyczne ${req.body.Needed['Need design'].Logo['old/new']} Nowoczesne</p>
                  <p>Proste ${req.body.Needed['Need design'].Logo['simple/complicated']} Skomplikowane</p>
                  <p>Delikatne ${req.body.Needed['Need design'].Logo['subtle/expressive']} Wyraziste</p>
                  <p>Kobiece ${req.body.Needed['Need design'].Logo['feminine/masculine']} Męskie</p>
                  <p>Organiczne ${req.body.Needed['Need design'].Logo['organic/geometric']} Geometryczne</p>
                  <p>Radosne ${req.body.Needed['Need design'].Logo['happy/serious']} Poważne</p>
                  <p>Ekonomiczne ${req.body.Needed['Need design'].Logo['economic/luxurious']} Luksusowe</p>
                  <p>Oczywiste ${req.body.Needed['Need design'].Logo['obvious/symbolic']} Symboliczne</p>
                </div>
                <p>Dodatkowe informacje: ${req.body.Needed['Logo additional inform'] || 'Brak'}</p>
              ` : `
              <p><b>Chcę logo:</b> Nie</p>
              `}
            ` : ``}  
          </div>
          <h2>Dodatkowe informacje:</h2>
          <div>
            <p>Deadline: ${req.body['Deadline & Budget'].deadline || 'Nieokreślony'}</p>
            <p>Budżet: ${req.body['Deadline & Budget'].budget || 'Nieokreślony'}</p>
            <p>Dodatkowe informacje: ${req.body['Additional']['Additional information'] || 'Brak'}</p>
            <p>Data spotkania: ${req.body['Date']['date'] || 'Nieokreślona'}</p>
            <p>Zgoda na politykę prywatności: ${req.body['Date']['privacy-policy'] ? 'Tak' : 'Nie'}</p>
            <p>Zgona na newsletter: ${req.body['Date']['newsletter'] ? 'Tak' : 'Nie'}</p>
          </div>
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
      //       <p><b>Telefon:</b> ${req.body.phone}</p>
      //       <p><b>Email:</b> ${req.body.mail}</p>
      //       <p><b>Wiadomość:</b> ${req.body.message}</p>
      //     </div
      //   </div>
      //   `,
      // })
      // .then(() => {
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
};