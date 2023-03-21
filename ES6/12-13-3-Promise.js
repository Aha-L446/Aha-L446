const fs = require('fs'); //这里使用的是node的fs
				
// fs.readFile('./12-13-3-被读取的文件.md', (err, data) => {
// 	if(err) throw err;
// 	console.log(data); //buffer bytes
// 	console.log(data.toString());
// })

new Promise((resolve, reject) => {
	fs.readFile('./12-13-3-被读取的文件.md', (err, data) => {
		if(err) reject(err);
		resolve(data);
	})
}).then(res => {
	console.log(res); //buffer bytes
	console.log(res.toString());
}).catch(err => {
	console.log(err);
})