window.onload = function doOnLoad() {
	displayAge();
}
function calculateAge(birthDateString) {
    var today = new Date();
    var birthDate = new Date(birthDateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
function displayAge() {
	var age = calculateAge('1991-10-17');
	document.getElementById('age').textContent=age+" years old";
}

window.onscroll=function() {
	var scrollBarPosition = window.pageYOffset | document.body.scrollTop;
	stickContact(scrollBarPosition);
}
function stickContact(scrollBarPosition) {
	if(scrollBarPosition > 150){
		var newContactsPosition = scrollBarPosition-110;
		document.getElementById('contacts').style.paddingTop = newContactsPosition +'px';
	}
	else {
		document.getElementById('contacts').style.paddingTop = '10px';
	}
}
function parallaxBg(scrollBarPosition) {
	document.getElementById('bg').style.top = scrollBarPosition/10 +'px';
}
