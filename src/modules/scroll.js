const scroll = () => {
	const menuItem = document.querySelectorAll('.menu-list__link');
	const btnTest = document.querySelector('.main__button');
	const btnScroll = document.querySelector('.main__scroll');
	const newArray = [...menuItem,btnTest,btnScroll]

	newArray.forEach(menu => {
		menu.addEventListener('click', (e) => {
			e.preventDefault();
			const linkId = menu.getAttribute('href').substring(1);
			document.getElementById(linkId).scrollIntoView({
				behavior: 'smooth',
				block: "start"
			})
		})
	});
}
export default scroll