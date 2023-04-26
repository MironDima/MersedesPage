const modal = () => {
	const modalBlock = document.querySelector('.modal');
	const btnMore = document.querySelectorAll('.more');

	btnMore.forEach(btn => {
		btn.addEventListener('click', () => {
			modalBlock.classList.remove('hidden');
		})
	});

	modalBlock.addEventListener('click', (e) => {
		if (!e.target.closest('.modal-wrapper') || e.target.closest('.modal__close')) {
			modalBlock.classList.add('hidden');
		}
	});
}
export default modal