export const data = {
  id: 'contact',
  title: ['Fale Conosco!', 'Contact Us!'],
  fields: [
    {
      name: 'name',
      label: ['Nome', 'Name'],
      placeholder: ['Digite seu nome', 'Type your name'],
      type: 'input'
    },
    {
      name: 'company',
      label: ['Empresa', 'Company'],
      placeholder: ['Qual é sua Empresa', 'What is your company'],
      type: 'input'
    },
    {
      name: 'email',
      label: ['E-mail', 'E-mail'],
      placeholder: ['Digite seu e-mail', 'Type your e-mail'],
      type: 'input'
    },
    {
      name: 'phone',
      label: ['Contato', 'Contact'],
      placeholder: ['Digite seu telefone', 'Type your phone'],
      type: 'input'
    },
    {
      name: 'message',
      label: ['Como podemos lhe ajudar?', 'How can we help you?'],
      placeholder: ['Digite a mensagem', 'Type the message'],
      type: 'textarea'
    }
  ],
  status: {
    success: [
      'Email enviado com sucesso!',
      'Email successfully sent!'
    ],
    required: [
      'Favor preencher todos os campos.',
      'Please fill in all fields.'
    ],
    error: [
      'Houve um erro ao enviar o e-mail, por gentileza entre em contato atráves do e-mail commercial@setfin.com.br.',
      'There was an error sending the email, please contact us at commercial@setfin.com.br.'
    ],
    progress: [
      'Enviando o email...',
      'Sending the email...'
    ]
  },
  submit: ['Enviar', 'Subimit']
}