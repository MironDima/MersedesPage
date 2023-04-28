const tabs = () => {
	const tabsBlock = document.querySelector('.design-text');
	const tabs = document.querySelectorAll('.design-list__item');
	const tabContent = document.querySelectorAll('.design__descr');
	const tabImages = document.querySelectorAll('.design-images');
	const tabTitle = document.querySelectorAll('.design__title');

	tabsBlock.addEventListener('click', (e) => {
		if(e.target.closest('.design-list__item')) {
			tabs.forEach((tab,index) => {
				if(e.target === tab) {
					tab.classList.add('design-list__item_active');
					tabContent[index].classList.remove('hidden');
					tabImages[index].classList.remove('hidden');
					tabTitle[index].classList.remove('hidden');
				}else{
					tab.classList.remove('design-list__item_active');
					tabContent[index].classList.add('hidden');
					tabImages[index].classList.add('hidden');
					tabTitle[index].classList.add('hidden');
				}
			})
		}
	})
}
export default tabs 