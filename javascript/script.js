


let width = document.body.clientWidth;
// let heght = window.innerHeight;

// MENU TOP
window.onload = function() {
	let menuStyle1 = getComputedStyle(topNav);
	let menuStyle2 = getComputedStyle(topMenu);
	let openMenu = document.getElementById('openMenu');

	openMenu.onclick = function() {
		if(menuStyle2.display == 'none') {
			topMenu.classList.add('active');
			topNav.classList.add('active');
		}	else {
			topMenu.classList.remove('active');
			topNav.classList.remove('active');
		}
	}
};

openMenu.onmouseup = function() {
	openMenu.style.backgroundPosition = '0px -56px';
	};

openMenu.onmousedown = function() {
	openMenu.style.backgroundPosition = '0px 0px';
	};




	// SLIDER TOP



	function Slider2WidthIF(){
		let slideWidth = document.getElementsByClassName('slide');
		let sliderAmout = slideWidth.length;
		let slider2Width = sliderAmout * 300 + 'px';
		
		if (width < 460) {
			slider2Width = sliderAmout * 200 + 'px';
		}

		function Slider2Width() {
			let slider2 = document.getElementById('slider2');
			slider2.style.width = slider2Width;
		}

		Slider2Width();

		document.getElementById('buttonTopMenuLeft').onclick = buttonTopMenuLeft;
		
		function buttonTopMenuLeft() {
			let slider2 = document.getElementById('slider2');
			
			let j = 0;
			
			

			for(let i = 1; i <= sliderAmout; i++) {
				j = j - 300;
				let k = j + 'px';
				slider2.style.transform = `translateX(${k})`;
				// slider2.style.left = k;
				// return slider2.style.transform; break;
			}
		}

	}

Slider2WidthIF();

// // let buttonTopMenuRight = document.getElementById('buttonTopMenuRight').onclick;


