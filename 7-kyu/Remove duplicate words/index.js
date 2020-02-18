/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

 */

function removeDuplicateWords(s) {
	const arr = s.split(" ");
	return arr.filter((value, index, self) => self.indexOf(value) === index).join(" ");
}
