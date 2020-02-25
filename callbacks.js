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

function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000);
}

// get post will be ran as soon as the post insertion will be done
createPost({ title: 'post three', body: 'this is post three' }, getPost);
