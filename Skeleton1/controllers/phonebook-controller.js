const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    // TODO: load index page
    res.render('index', {
      contacts:phonebook.getPhonebook()
    });
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
    let name  = req.body.name;
    let number = req.body.number;
    const Contact = require('../models/Contact')
    let contact = new Contact(name, number);
    phonebook.addContact(contact);
    res.redirect('/');
  }
}
