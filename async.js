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
			const error = false;
			if (!error) {
				resolve();
			} else {
				reject('Error in code');
			}
		}, 2000);
	});
}

// waits for async process to finish
async function init() {
    // this mean, we wait till createPost is done before getting them
	await createPost({ title: 'post three', body: 'this is post three' });
	getPost()
}

init().catch(err => console.log(err));
