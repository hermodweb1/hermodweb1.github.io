const nav = document.querySelector("nav");

const wasOpened = localStorage.getItem("showMenu") ?? "false"
if (wasOpened == "true") {
	nav.classList.toggle("open");
}

function showMenu() {
	const open = nav.classList.toggle("open");
	localStorage.setItem("showMenu", String(open));
}
