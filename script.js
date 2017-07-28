
function openNewWindow() {
	var newWin = window.open("about:blank", "hello", "width=200,height=200");

	addElements();

	function addElements() {

	  var newWinBody = newWin.document.body;
	  var newWinPargraph = newWin.document.createElement('p');
	  var newWinImage = newWin.document.createElement('img');


	  newWinImage.src = 'https://pbs.twimg.com/profile_images/752912459388841984/aKLwROi_.jpg';
		newWinImage.alt = 'Hello world image';
		newWinImage.width = 100;

	  newWinPargraph.innerHTML = 'Hello world!'
	  newWinPargraph.style.color = 'red';

	  newWinBody.appendChild(newWinPargraph);
	  newWinBody.appendChild(newWinImage);
	}
} 
