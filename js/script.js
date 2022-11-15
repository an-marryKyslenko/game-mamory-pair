"use strict"

let game = document.querySelector('.game__items');
let gameItems = game.querySelectorAll('.game__item');

function randomItems() {
	let arr = Array.from(gameItems);
	arr.sort(() => Math.random() - 0.5);
	arr.forEach(item=> game.appendChild(item))
	
		
}

randomItems()

function removeAll() {
	for (let item of gameItems) {
			item.removeAttribute('style')
		}
}

function reset() {
	return  Array.from(gameItems).every(el=> el.hasAttribute('style'))
	}
let count = 0;
let first, second;

game.addEventListener('click', function (event) {
	let item = event.target.closest('.game__item');
	if (count == 0 && !item) {
		alert('You win');
		window.location.reload();
	} else {
		if (count == 0) {
		item.classList.add('active');
		first = item;
		count++;
	}else if (count == 1) {
		item.classList.add('active');
		second = item;
		count++;
	}else if ( first.lastElementChild.id == second.lastElementChild.id) {
		first.style.visibility = "hidden";
		second.style.visibility = "hidden";
		first.classList.remove('active');
		second.classList.remove('active')
		count -= 2;
	} else {
		first.classList.remove('active');
		second.classList.remove('active')
		count -= 2;
		}
	}
})







