const Contact = require('./models/Contact'); 
/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

let phonebook = [];

function addContact(name, number) {
	let contact = new Contact(name, number)
	phonebook.push(contact);
}

function getContacts() {
	return phonebook.slice();
}

module.exports = {
	addContact:addContact,
	getContacts:getContacts
}