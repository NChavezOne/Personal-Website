//moving text for title
titleString = " Nicholas Chavez ";
document.title = titleString;
setInterval(changeTitle, 200);
function changeTitle() {
	titleString = titleString.split("");
	titleString.push(titleString[0]);
	titleString.shift();
	titleString = titleString.join("");
	document.querySelector('title').textContent = titleString;
}