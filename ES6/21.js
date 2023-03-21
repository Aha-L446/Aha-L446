// 1-浏览器下的全局对象：
// console.log(window);
// console.log(this);

// 2-node下的全局对象：
// console.log(global);
console.log(globalThis);


// 以下测试动态加载：
export const name = 'Aha';
export function fn() {
	console.log('动态加载-Aha')
}
