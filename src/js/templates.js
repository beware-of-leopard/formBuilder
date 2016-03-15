export function inputTemplate (inputElement){
	

	return `<div>
				<label for="${inputElement.id}"><i class="fa ${inputElement.icon}"></i>${inputElement.label}<input type="${inputElement.type}" id="${inputElement.id}"></label>
			</div>`;
}


export function textAreaTemplate (inputElement){
	

	return `<div class="text-area">
				<label for="${inputElement.id}"><i class="fa ${inputElement.icon}"></i>${inputElement.label}<textarea type="${inputElement.type}" id="${inputElement.id}"></textarea></label>
			</div>`;
}



export function selectTemplate (inputElement){

	var arrOfOptions = inputElement.options;

	var optionsCreator = arrOfOptions.map(function(anOption){
			return `<option label="${anOption.label}" value="${anOption.value}"></option>`;
		});
	
		
	optionsCreator = optionsCreator.join('');

	return `<div>
					<select type="${inputElement.type}" id="${inputElement.id}">
		  				<option label="${inputElement.label}" selected="true"></option>
		  				${optionsCreator}
					</select>
			</div>`
};