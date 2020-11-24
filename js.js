let tog = document.getElementById('toggle');
	// conta = document.getElementsByClassName('container')

tog.addEventListener('change', (e) => {
	document.body.classList.toggle('dark', e.target.checked);
});
