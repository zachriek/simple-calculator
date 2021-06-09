//  Calculator
function val(result) {
	form.disp.value += result;
}

function cal() {
	if (form.disp.value == "") {
		alert('Please Enter Number!');
	} else {
		form.disp.value = eval(form.disp.value);
	}
}

let btn = form.equal;
btn.addEventListener('dblclick', function() {
	form.disp.value = "";
});


// Navigasi
const menuUL = document.querySelector('nav.menu-container ul');
const menuToggle = document.querySelector('nav.menu-container .menu-toggle .toggler');

menuToggle.addEventListener('click', function() {
	menuUL.classList.toggle('slide');
});
