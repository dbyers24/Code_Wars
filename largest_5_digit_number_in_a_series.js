'use strict';

function solution(digits) {
	let highestCurrentNum = 0;

	// if (digits.length <= 0) {
	// 	return digits;
	// }

	for (let i = 0; i < digits.length; i++) {
		let tempNum = Number(digits.slice(i, i + 5).concat(''));
		console.log('tempNum');
		if (tempNum > highestCurrentNum) {
			let highestCurrentNum = tempNum;
		}
	}
	return highestCurrentNum;
}

console.log(solution(12345678999));
