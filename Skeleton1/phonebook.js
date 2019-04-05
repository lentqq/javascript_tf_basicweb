/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
let phoneBook = [];

 function addContact(contact) {
	phoneBook.push(contact);
}

function getPhonebook() {
	return phoneBook;
}

module.exports = {
	addContact,
	getPhonebook
};