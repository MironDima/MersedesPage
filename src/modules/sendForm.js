const sendForm = ({ formId }) => {
	formId.forEach(forms => {
		const form = document.getElementById(forms);
		const errorText = 'Ошибка';
		const succesText = 'Успешно,с вами свяжется специалист!'
		let prelouder = document.createElement('div');
		prelouder.classList.add('prelouder');
		prelouder.innerHTML = `<img src = "img/prelouder.gif"  alt = "prelouder">`
		let div = document.createElement('div');
		div.classList.add('style');

		const emailValid = (email) => {
			const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
			return regEmail.test(email)
		}

		const validate = (list) => {
			let success = true;
			list.forEach(input => {
				if (input.name === 'name') {
					if (input.value.length < 3) {
						alert('Ошибка в имени!')
						success = false;
					}
				} else if (input.name === 'mail') {
					if (!emailValid(input.value)) {
						alert('Ошибка в почте!')
						success = false;
					}
				} else if (input.name === 'phone') {
					if (input.value.length < 9) {
						alert('Ошибка в номере телефоне!')
						success = false;
					}
				}
			})
			return success
		}

		const sendData = (data) => {
			return fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					"Content-type": "application/json"
				}
			}).then(res => res.json());
		}

		const submitForm = () => {
			const formElemInput = form.querySelectorAll('input');
			const formData = new FormData(form);
			const formBody = {}
			form.append(prelouder)
			setTimeout(() => {
				prelouder.classList.add('hide-prelouder')
			}, 1000)
			form.append(div)

			formData.forEach((value, key) => {
				formBody[key] = value;
			})

			if (validate(formElemInput)) {
				sendData(formBody)
					.then(data => {
						div.textContent = succesText;
						formElemInput.forEach(input => {
							input.value = '';
							setTimeout(() => {
								div.textContent = '';
							}, 3500)
						})
					})
					.catch(error => div.textContent = errorText);
			} else {
				div.textContent = errorText;
				alert('Данные не валидны!');
			}}

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			submitForm()
		})
	})
}
export default sendForm