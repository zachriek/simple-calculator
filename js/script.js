$(window).scroll(function() {
	let wScroll = $(this).scrollTop();

	$('nav').css({
		'transform' : 'translate(0px, '+ wScroll * 2 +'%)'
	});
});

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

const ulNav = document.querySelector('nav.nav ul');
const menuToggle = document.querySelector('nav.nav .menu-toggle input');

menuToggle.addEventListener('click', function() {
	ulNav.classList.toggle('slide');
});