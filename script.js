const benjamin = document.getElementById("benjamin");
const big_circle = document.getElementById("big_circle");
const small_circle = document.getElementById("small_circle");

window.onmousemove = function (ev) {
	let x = ev.clientX;

	console.log("mouse moved")

	big_circle.style.left = (x / 20).toString() + "px";
	benjamin.style.left = (x / 10).toString() + "px";
	small_circle.style.left = (x / 5).toString() + "px";
}