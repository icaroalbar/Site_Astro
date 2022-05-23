"use strict";
const nodemailer = require("nodemailer");

export default function sendMail(req, res) {

  let transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    auth: {
      user: 'contato@astrocrypto.com.br',
      pass: '123@Capital'
    }
  })

  transporter.sendMail({
    from: "Contato Astro <contato@astrocrypto.com.br>",
    to: "icaro.albar@hpcap.com.br,manoel.carvalho@astrocrypto.com.br,roberto.rodrigues@astrocrypto.com.br,thais.oliveira@hpcap.com.br",
    subject: "Mensagem do site",
    text: `${req.body.nome}
           ${req.body.email}
           ${req.body.telefone}
           ${req.body.assunto}
           ${req.body.mensagem}`,
    html: `<b>Nome:</b>${req.body.nome}<br>
           <b>Email:</b>${req.body.email}<br>
           <b>Telefone:</b>${req.body.telefone}<br>
           <b>Assunto:</b>${req.body.assunto}<br>
           <b>Mensagem:</b>${req.body.mensagem}`
  }).then(response => { res.send(response) })
    .catch(erro => { res.send(erro) })
}