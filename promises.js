const fetch = require('node-fetch');
// run something and make program continue

const posts = [
	{ title: 'post one', body: 'This is post one' },
	{ title: 'post two', body: 'This is post two' }
];

function getPost() {
	// make the request delay to mimic a request to a server
	setTimeout(() => {
		let output = '';
		posts.forEach(post => {
			output += `${post.title}\n`;
		});
		console.log(output);
	}, 1000);
}

// call resolve when its successful and reject when error
function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);

			// this is to simulate a run code that may create errors
			const error = true;
			if (!error) {
				resolve();
			} else {
				reject('Error in code');
			}
		}, 2000);
	});
}

// getPost will be ran as soon as the post insertion will be done
/*createPost({ title: 'post three', body: 'this is post three' })
	.then(getPost)
	.catch(err => console.log(err));*/


// use Promise.all
/*const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, 'GoodBy');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
	res.json();
});

Promise.all([promise1, promise2, promise3, promise4]).then(values => {
	console.log(values);
});*/


