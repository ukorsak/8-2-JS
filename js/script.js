// plik scripts.js
/* Zadanie 8.2 */
var name = prompt('Wpisz swoje imię');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

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