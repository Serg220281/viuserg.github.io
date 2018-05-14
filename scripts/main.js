var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/House.jpg') {
		myImage.setAttribute ('src','images/Architecture.png');
		} else {
			myImage.setAttribute ('src','images/House.jpg');
		}
}
	var myButton = document.querySelector('button');
	var myHeading = document.querySelector('h1');
		function setUserName() {
			var myName = prompt('Пожалуйста введите ваше имя.');
			localStorage.setItem('name', myName);
			myHeading.innerHTML = 'Строительство это просто, ' + myName;
		}
		if (!localStorage.getItem('name')) {
			setUserName();
		} else {
			var storedName = localStorage.getItem('name');
			myHeading.innerHTML = 'Строительство это просто, ' + storedName;
		}

		myButton.onclick = function() {
			setUserName();
		}