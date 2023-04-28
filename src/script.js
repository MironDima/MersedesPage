import accordeon from "./modules/accordeon";
import tabs from './modules/tabs';
import scroll from './modules/scroll';
import modal from './modules/modal';
import validation from './modules/validation';
import sendForm from './modules/sendForm';
import menu from './modules/menu';
scroll()
accordeon()
tabs()
modal()
menu()
validation()
sendForm({
	formId : ['form1','form2'],
})
