function preloader() {
	function progressbarChange() {
		let percent = 0
		const changePercent = setInterval(function() {
			if (percent < 100) {
				document.querySelector('.percent .value').innerHTML = ++percent
				document.querySelector('.progressbar .line').style.width = percent + '%'
			} else {
			  clearInterval(changePercent);
			}
		}, 40);
	}
	
	document.querySelector('body').style.overflowY = 'hidden'
	setTimeout(() => {
		document.querySelector('.preloader__logo').classList.add('visible')
	}, 500)
	setTimeout(() => {
		document.querySelector('.preloader__progressbar').classList.add('visible')
	}, 1000)
	setTimeout(() => {
		progressbarChange()
	}, 1500)
	setTimeout(() => {
		document.querySelector('.preloader__wrapper').classList.add('translate')
	}, 7000)
	setTimeout(() => {
		document.querySelector('.preloader').classList.add('disable')
	}, 7100)
	setTimeout(() => {
		document.querySelector('body').style.overflowY = 'visible'
	}, 8000)
}

// preloader()

document.addEventListener('DOMContentLoaded', () => {

	document.querySelectorAll('.modal__btn').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			document.querySelector('.modal').classList.add('active')
			setTimeout(() => {
				document.querySelector('.modal').classList.add('visible')
			}, 0)
			setTimeout(() => {
				document.querySelector('.modal__wrapper').classList.add('visible')
			}, 500)
		})
	})

	document.querySelector('.modal__close').addEventListener('click', e => {
		e.preventDefault()
		document.querySelector('.modal__wrapper').classList.remove('visible')
		setTimeout(() => {
			document.querySelector('.modal').classList.remove('visible')
		}, 500)
		setTimeout(() => {
			document.querySelector('.modal').classList.remove('active')
		}, 1000)
	})

	document.querySelector('.modal__overlay').addEventListener('click', e => {
		e.preventDefault()
		document.querySelector('.modal__wrapper').classList.remove('visible')
		setTimeout(() => {
			document.querySelector('.modal').classList.remove('visible')
		}, 500)
		setTimeout(() => {
			document.querySelector('.modal').classList.remove('active')
		}, 1000)
	})

	// MODAL NAV SHOW/HIDE
	document.querySelector('.burger').addEventListener('click', e => {
		e.preventDefault()
		if (e.target.closest('.burger').classList.contains('active')) {
			e.target.closest('.burger').classList.remove('active')
			document.querySelector('.modal__nav').classList.remove('active')
			document.querySelector('body').classList.remove('hidden')
		} else {
			e.target.closest('.burger').classList.add('active')
			document.querySelector('.modal__nav').classList.add('active')
			document.querySelector('body').classList.add('hidden')
		}
	})

	document.querySelectorAll('.modal__nav__list a.nav__link').forEach(link => {
		link.addEventListener('click', e => {
			document.querySelector('.burger').classList.remove('active')
			document.querySelector('.modal__nav').classList.remove('active')
			document.querySelector('body').classList.remove('hidden')
		})
	})

	// Products gif rotate
	if (document.querySelector('.product__item__wrapper') !== null) {
		document.querySelector('.product__item__wrapper:nth-child(1) img.product__img').addEventListener('mouseover', e => {
			e.target.src = 'img/2.gif'
		})
		
		document.querySelector('.product__item__wrapper:nth-child(1) img.product__img').addEventListener('mouseout', e => {
			e.target.src = 'img/muon.png'
		})
		
		document.querySelector('.product__item__wrapper:nth-child(2) img.product__img').addEventListener('mouseover', e => {
			e.target.src = 'img/1.gif'
		})
		
		document.querySelector('.product__item__wrapper:nth-child(2) img.product__img').addEventListener('mouseout', e => {
			e.target.src = 'img/reon.png'
		})
	}

	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
		return false;
	});

	// Phone mask
	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);
	
		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			console.log(template);
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type === "blur" && this.value.length < 5) {
				this.value = "";
			}
	
		}
	
		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}
		
	}
		
	maskPhone('input[type="tel"]')

	if (document.documentElement.clientWidth > 600) {
		document.querySelectorAll('section.products .product__item').forEach(btn => {
			btn.addEventListener('click', e => {
				location.href = e.target.closest('.product__item__wrapper').dataset.href
			})
		})
	}
	
	// Mobile functions
	if (document.documentElement.clientWidth <= 600) {
		document.querySelector('.preloader__logo').innerHTML = `<svg width="179" height="53" viewBox="0 0 179 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M178.811 1.00767L169.176 8.81774C166.4 11.1351 162.867 12.3889 159.226 12.3487H116.417C114.885 12.3285 113.383 12.7669 112.111 13.6055L101.67 20.3084H164.987C165.108 20.308 165.227 20.3447 165.326 20.4134C165.425 20.4821 165.499 20.5795 165.54 20.6919C165.58 20.8043 165.583 20.9263 165.55 21.0408C165.516 21.1552 165.447 21.2566 165.352 21.3308L155.717 29.1409C152.944 31.462 149.41 32.7179 145.768 32.6769H88.3837L92.8361 38.3624C93.3778 39.0793 94.0854 39.659 94.9002 40.0536C95.715 40.4482 96.6136 40.6463 97.5217 40.6316H151.503C151.625 40.6313 151.745 40.6681 151.845 40.737C151.945 40.8058 152.021 40.9034 152.062 41.0163C152.104 41.1292 152.109 41.252 152.077 41.3679C152.045 41.4838 151.978 41.5872 151.884 41.6639L142.249 49.474C139.46 51.7905 135.913 53.0343 132.264 52.9751H78.9008C78.2974 52.9832 77.7005 52.8521 77.158 52.5923C76.6155 52.3324 76.1425 51.9511 75.777 51.4789L58.1094 28.8766L57.9877 28.6322L58.0333 28.298L58.1905 28.0786L58.5151 27.9439H58.6317C67.6988 26.9465 77.8156 24.6424 85.4577 19.5254C88.7234 17.341 90.0622 14.613 89.7275 12.4335C88.8806 6.87769 77.3237 7.32156 73.0285 7.66569C63.7586 8.39881 54.8791 12.4984 49.595 20.3084L31.2632 47.3943C29.1434 50.5263 26.968 53 19.9851 53H0L25.8219 15.3112C35.0816 1.79566 49.7066 0.000247685 63.079 0.000247685H178.41C178.532 -0.00334246 178.652 0.0321785 178.752 0.101445C178.852 0.170712 178.926 0.269965 178.963 0.384262C179.004 0.491261 179.011 0.60776 178.984 0.718827C178.957 0.829894 178.897 0.93047 178.811 1.00767Z" fill="#9AC31C"/></svg>`

		// products accordion
		document.querySelectorAll('section.products .product__item').forEach(btn => {
			btn.addEventListener('click', e => {
				if (!e.target.closest('.product__item').classList.contains('active')) {
					document.querySelectorAll('.product__item').forEach(btn => {
						btn.classList.remove('active')
					})
					e.target.closest('.product__item').classList.add('active')
		
					document.querySelector('.mobile__product__wrapper .product__description').innerHTML = e.target.closest('.product__item').querySelector('.product__description').innerHTML
					document.querySelector('.mobile__product__wrapper .product__param.power').innerHTML = e.target.closest('.product__item').querySelector('.product__param.power').innerHTML
					document.querySelector('.mobile__product__wrapper .product__param.connect').innerHTML = e.target.closest('.product__item').querySelector('.product__param.connect').innerHTML
					document.querySelector('.mobile__product__wrapper .product__btn').href = e.target.closest('.product__item__wrapper').dataset.href
				}
			})
		})
	}
	
	


})


