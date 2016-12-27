// plik scripts.js
/* Zadanie 8.2 */
/*var name = prompt('Wpisz swoje imię');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);*/

/* Zadanie 8.4 */
function countTriangleArea() {
	var a,h,triangleArea;
	var choice = prompt(name + ' czy chcesz sam podać wysokość i podstawę trójkota?? (tak/nie)');
	if (choice == 'tak') {
		do {
			alert('Pamiętaj, że wartości muszą być większe od zera');
	    	a = prompt('Podaj podstawę:');
	    	h = prompt('Podaj wysokośc:');
		}
		while (a <= 0 || h <=0);
	    
	} else {
		alert('Liczby są losowane');
		a = (Math.floor(Math.random()*100)+1);
		h = (Math.floor(Math.random()*100)+1);
	}
	triangleArea = (a*h)/2;
	alert('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
	console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
}

/* Zadanie 8.5 */
function checkResult() {
	var a,b;
	a = (Math.floor(Math.random()*200)-100);
	b = (Math.floor(Math.random()*200)-100);
	var value = (a*a) + (2 * a * b) - (b*b);
	console.log('a: ' + a + ' i b: ' + b  + ', wynik: ' + value);
	if (value > 0) {
		console.log('Wynik jest dodatni'); 
	} else if (value < 0) {
		console.log('Wynik jest ujemny'); 
	} else {
		console.log('Wynik jest równy zero'); 
	}
}

/* Zadanie 8.6 */
function getTriangleArea(a, h) {
	return (a > 0 && h > 0) ? ((a*h)/2) : 'Nieprawidłowe dane';
}

var a,h,triangleArea;
console.log(getTriangleArea(10,6));
for (i = 0; i < 3; i++) { 
    a = (Math.floor(Math.random()*100)+1);
	h = (Math.floor(Math.random()*100)+1);
	triangleArea = getTriangleArea(a, h);
	console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
}
