document.querySelector(".menu-btn").onclick = function () {
	document.querySelector(".menu-overlay").classList.add("menu-overlay-open");
}

document.querySelector(".menu-btn-close").onclick = function () {
	document.querySelector(".menu-overlay").classList.remove("menu-overlay-open");
}