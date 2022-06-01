export const dataContact = {
  title: 'Contact',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.',
  mapUrl : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0897918171613!2d105.83212205093241!3d20.989037485951254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac6128d0d9c3%3A0xe834440656e44f04!2zNSwgMzE2IEzDqiBUcuG7jW5nIFThuqVuLCDEkOG7i25oIEPDtG5nLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1653893145051!5m2!1svi!2s',
  contact : [
    {
      id : 1,
      method : 'phone',
      imgMethod : '/assets/images/phone.png',
      listMethods : ['+84 961 743 857','+84 961743857'],
      className : 'contact__item-phone'
    },
    {
      id : 2,
      method : 'email',
      imgMethod : '/assets/images/email.png',
      listMethods : ['tienxmin0123@gmail.com','tienvuit2000@gmail.com'],
      className : 'contact__item-email'
    },
    {
      id : 3,
      method : 'address',
      imgMethod : '/assets/images/location.png',
      listMethods : ['5/316 Le Trong Tan']
    }
  ],
  contactForm : {
    titleForm : ["I'm always open to discussing product","design work or partnerships."],
    inputs : [
      {
        id : 1,
        type : 'text',
        placeholder : 'Name',
      },
      {
        id : 2,
        type : 'text',
        placeholder : 'Email',
      },
      {
        id : 3,
        type : 'text',
        placeholder : 'Massage',
      },
      {
        id : 4,
        type : 'submit',
        value : 'submit',
      },
    ]
  }
}