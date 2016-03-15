// Javascript Entry Point

import $ from 'jquery';

import formInfo from './formInfo';

import { inputTemplate, selectTemplate, textAreaTemplate } from './templates';

var $form = $('form');


var htmlForm = formInfo.map(function(anInput){

	if (anInput.type === "text" || anInput.type === "email" || anInput.type === "tel"){
		anInput = inputTemplate(anInput);
			return anInput;
	}else if (anInput.type === "select"){
		anInput = selectTemplate(anInput);
			return anInput;
	}else if(anInput.type = "textarea"){
		anInput = textAreaTemplate(anInput);
			return anInput;
	}
	
});

$form.prepend(htmlForm.join(''));

