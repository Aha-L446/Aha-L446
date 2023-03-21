const fs = require('fs');

function read1() {
	return new Promise((resolve, reject) => {
		fs.readFile('./12-13-3-被读取的文件.md', (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	})
}
function read2() {
	return new Promise((resolve, reject) => {
		fs.readFile('./12-13-3-被读取的文件.md', (err, data) => {
			if (err) reject(err);
			resolve(data);
		})
	})
}
async function main() {
	const result1 = await read1();
	const result2 = await read2();
	console.log(result1);
	console.log(result2);
}
main();