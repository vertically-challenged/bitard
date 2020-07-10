var rotateY = -45, rotateX = 0;
var rotate = true; 

function autoRotate () {
	if (rotate) {rotateY += 1};

	document.querySelector('.Bitard').style.transform = 
	'rotateY(' + rotateY + 'deg)'+
	'rotateX(' + rotateX + 'deg)';
}

(function () {
	setInterval( autoRotate, 25);
})();

(function () {
	document.onkeydown = function (e) {
		rotate = false;
		if (e.keyCode === 37|| e.keyCode === 65) rotateY -= 4
		else if (e.keyCode === 38 || e.keyCode === 87) rotateX += 4
		else if (e.keyCode === 39 || e.keyCode === 68) rotateY += 4
		else if (e.keyCode === 40 || e.keyCode === 83) rotateX -= 4

        document.querySelector('.Bitard').style.transform = 
      'rotateY(' + rotateY + 'deg)'+
      'rotateX(' + rotateX + 'deg)';
    }
})();