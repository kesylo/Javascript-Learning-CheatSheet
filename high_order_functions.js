const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//region foreach (with index)
/*companies.forEach(function(company, index) {
	console.log(company);
	console.log(index);
	console.log(company.name);
});*/
//endregion

//region filter

// get all RETAIL companies
/*const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);*/

// companies that started in the 1900
//const companies18 = companies.filter(company => company.start >= 1980 && company.start < 1900);

// (get all ages above 21). you can also get the index here
/*const above = ages.filter(function(age) {
	if (age > 21) {
		return true;
	}
});

const aboveES6 = ages.filter((age, index) => {
	if (age > 21) {
		console.log(index);
		return true;
	}
});
console.log(aboveES6);*/

//endregion

//region Map

// used when you want to create a new array from data

// create array of company names
/*const companyNames = companies.map(company => {
	return company.name;
});*/

// multiply each value times 2
/*const agesTimeTwo = ages.map(age => {
	return age * 2;
});
console.log(agesTimeTwo);*/
//endregion

//region Sort

// sort by start year
/*const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);*/

// sort numbers (1, 2, ... , 10)
/*const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);*/
//endregion

// reduce (sum all values in ages)
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);
