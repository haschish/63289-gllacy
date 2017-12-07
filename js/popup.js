var feedbackBtn = document.querySelector("#feedback-btn");

var popup = document.querySelector(".feedback");
var closeBtn = popup.querySelector(".btn-close");

var form = popup.querySelector("form");
var name = popup.querySelector("#feedback-name");
var email = popup.querySelector("#feedback-email");
var text = popup.querySelector("#feedback-text");

feedbackBtn.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal_show");
	// name.focus();
});

closeBtn.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal_show");
	popup.classList.remove("modal_error");
});

form.addEventListener("submit", function (evt) {
	if (!name.value || !email.value || !text.value) {
		evt.preventDefault();
		popup.classList.remove("modal_error");
		popup.classList.add("modal_error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if ( popup.classList.contains("modal_show") ) {
			popup.classList.remove("modal_show");
			popup.classList.remove("modal_error");
		}
	}
});