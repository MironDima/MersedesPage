const accordeon = () => {
	const btn = document.querySelector('.feature__link');
	const btns = document.querySelectorAll('.feature__link');
	const list = document.querySelectorAll('.feature-sub');

	btns.forEach((btn, index) => {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('feature__link_active')) {
				btn.classList.remove('feature__link_active');
				list[index].classList.add('hidden');
			} else {
				btns.forEach((btn, index) => {
					if (btn.classList.contains('feature__link_active')) {
						btn.classList.remove('feature__link_active');
						list[index].classList.add('hidden');
					}
				})
				btn.classList.add('feature__link_active');
				list[index].classList.remove('hidden');
			}
		})
	})
}

export default accordeon