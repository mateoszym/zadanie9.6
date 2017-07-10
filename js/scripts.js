var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var li = document.createElement('li');
	li.innerHTML = 'item ' + list.childElementCount;
	list.appendChild(li);
});
