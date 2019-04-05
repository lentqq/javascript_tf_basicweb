const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    // TODO: load index page
    res.render('index', {
      contacts:phonebook.getContacts()
    });
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
    let {name, number} = req.body;
    phonebook.addContact(name, number);
    res.redirect('/')
  }
}