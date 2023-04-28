const menu = () => {
	const humburgermenu = document.querySelector('.humburger-menu');
	const menuList = document.querySelector('.menu');

	humburgermenu.addEventListener('click', (e) => {
		menuList.classList.toggle('menu-active');
		humburgermenu.classList.toggle('humburger-menu-active');
		
	})
	menuList.addEventListener('click', (e) => {
		if(e.target.closest('.menu-list__item')){
			menuList.classList.remove('menu-active');
			humburgermenu.classList.remove('humburger-menu-active');		}
	})
}

export default menu