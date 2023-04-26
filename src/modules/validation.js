const validation = () => {
	const inputs = document.querySelectorAll('.input');

	inputs.forEach(input => {
		input.addEventListener('blur', (e) => {
			e.preventDefault();
			if (e.target.name === 'name') {
				const changeName = /[^а-яА-ЯёЁ]/g
				e.target.value = e.target.value.replace(changeName, "");
				e.target.value = e.target.value.replace(/(\s|^)[а-яё]/g, (str) => {
				return	str.toUpperCase()
				});
			}
			if (e.target.name === 'phone') {
				const changeName = /[^0-9\+\(\)\-]/g
				e.target.value = e.target.value.replace(changeName, "")
			}
			if (e.target.name === 'mail') {
				const changeName = /[^a-zA-Z\0-9	\(\)\-\.\!\#\*\@\s]/g
				e.target.value = e.target.value.replace(changeName, "")
			}
		})
	})
}
export default validation