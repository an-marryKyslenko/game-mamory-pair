"use strict"

let game = document.querySelector('.game__items');
let gameItems = game.querySelectorAll('.game__item');

function randomItems() {
	let arr = Array.from(gameItems);
	arr.sort(() => Math.random() - 0.5);
	arr.forEach(item=> game.appendChild(item))
	
		
}
randomItems()


let count = 0;
let first, second;

game.addEventListener('click', function (event) {
	
	let item = event.target.closest('.game__item');
	let opacElem = game.getElementsByClassName('opacity');
	if (opacElem.length === gameItems.length) {
		alert('You win!');
		window.location.reload();
	} else if (count == 1) {
			count++;
			item.classList.add('active');
			second = item;
		if(first.lastElementChild.id == second.lastElementChild.id) {
			setTimeout(function(){first.classList.remove('active');
			second.classList.remove('active')
			first.classList.toggle('opacity');
			second.classList.toggle('opacity');
			count = 0;
			}, 400)
		} else {
			setTimeout(function(){first.classList.remove('active');
			second.classList.remove('active')
			count = 0;
			}, 400)
			}
		}else if (count == 0) {
			item.classList.add('active');
			first = item;
			count++;
		}  
})






