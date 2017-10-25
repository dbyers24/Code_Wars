'use strict';

function solution(digits) {
	let highestCurrentNum = 0;

	if (digits.length <= 5) {
		return parseInt(digits);
	}

	for (let i = 0; i < digits.length; i++) {
		let tempNum = parseInt(digits.slice(i, i + 5));
		console.log('tempNum', tempNum);
		if (tempNum > highestCurrentNum) {
			highestCurrentNum = tempNum;
			console.log('highestCurrentNum', highestCurrentNum);
		}
	}
	return highestCurrentNum;
}
console.log('ANSWER', solution('29530267458234'));
