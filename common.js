

// this is a javascript object. they are created in the JSON format
const myBook = {
	title: 'The Story of Tau',
	author: 'Will Alexander',
	numberOfPages: 250,
	isAvailable: true
};

// create javascript object from class
const myBook2 = new Book('Best title', 'keming', 254);

// to access single object data
console.log(myBook2.pages);
// OR
console.log(myBook['title']);

// to export an object you ca do
module.exports = { myBook };
