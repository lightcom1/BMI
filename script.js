const weight    = document.getElementById('weight');
const weightVal = document.getElementById('weight-val');
const height    = document.getElementById('height');
const heightVal = document.getElementById('height-val');
const result    = document.getElementById('result');
const category  = document.getElementById('category');
let bmi = 0;

function calculate() {
	weightVal.textContent = parseInt(weight.value) + ' kg';
	heightVal.textContent = parseInt(height.value) + ' cm';

	bmi = (parseInt(weight.value) / Math.pow((parseInt(height.value) / 100), 2)).toFixed(1);
	result.textContent = bmi;
	
	if(bmi < 18.5) {
		category.textContent = 'Underweight';
		result.style.color = '#ffc44d';
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		category.textContent = 'Normal weight';
		result.style.color = '#0be881';
	} else if (bmi >= 25 && bmi <= 29.9) {
		category.textContent = 'Overweight';
		result.style.color = '#ff884d';
	} else {
		category.textContent = 'Fat';
		result.style.color = '#ff5e57';
	}
}