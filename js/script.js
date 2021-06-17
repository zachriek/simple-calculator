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
