// CREATE CONSTRUCTOR FUNCTION FOR AN OBJECT CALLED ADDRESSBOOK
// This will create an object called AddressBook
function AddressBook() {
  this.contacts =[];
  this.currentId = 0
};

// CREATE A PROTOTYPE FUNCTION FOR THE ADDRESSBOOK OBJECT
// This will create a method for the object AddressBook that any new instance of AddressBook will inherit
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId(); // This line adds a new property of "id" to a contact (a Contact object - an object created using the Contact constructor) when it is added to the addressBook. This id is created by incrementing the currentId and assigning it to the contact being added
  this.contacts.push(contact);
};

AddressBook.prototype.updateContact = function(id, propertyToUpdate, newPropertyValue) {
  var contactToUpdate = this.findContact(id);
  if (contactToUpdate === false) {
    return false;
  }
  contactToUpdate[propertyToUpdate] = newPropertyValue;
  return contactToUpdate;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  for (var i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        return this.contacts[i];
      }
    }
  };
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  for (var i = 0; i , this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id === id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
};

// CREATE A CONSTRUCTOR FUNCTION FOR AN OBJECT CALLED CONTACT
// This will create an object called AddressBook
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
};

// CREATE A PROTOTYPE FUNCTION TO GIVE AN OBJECT A METHOD
// This will create a method for the object AddressBook that any new instance of AddressBook will inherit
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

// User Interface Logic ---------
var addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    console.log("The id of this <li> is " + this.id + ".");
  });
};

$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  })
})


// CREATE A NEW INSTANCE OF A CONTACT OBJECT
// This object will inherit the properties and methods given to Contact
var testContact = new Contact("Ada", "Lovelace", "503.275.7609");

// FROM ADDRESSBOOK LESSON:

var contact = new Contact("Ada", "Lovelace", "503-555-0100");
// We create another new Contact object using the same Contact constructor
var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
// We add the first Contact object to our AddressBook, using addContact() method.
addressBook.addContact(contact);
// We add the second Contact object to the AddressBook using the same new method
addressBook.addContact(contact2);
