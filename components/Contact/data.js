export const data = {
  id: 'contact',
  title: ['Fale com a gente!', 'Talk to us!'],
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
    error: [
      'Houve um erro ao enviar o email, por gentileza entre em contato atráves do número 11 93274-4219',
      'There was an error sending the email, please contact us at +55 11 93274-4219'
    ],
    progress: [
      'Enviando o email...',
      'Sending the email...'
    ]
  },
  submit: ['Enviar', 'Subimit']
}