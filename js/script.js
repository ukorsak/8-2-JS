// plik scripts.js
/* Zadanie 8.2 */
/*var name = prompt('Wpisz swoje imię');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);*/

/* Zadanie 8.4 */
function countTriangleArea() {
	console.log('ZADANIE 8.4');
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
	console.log('ZADANIE 8.5');
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
console.log('ZADANIE 8.6');
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

/* Zadanie 8.7 */
console.log('ZADANIE 8.7');
var womensNames = ['Ola', 'Kasia', 'Zofia', 'Beata', 'Iza'];
var mensNames = ['Jan', 'Mikołaj', 'Adam', 'Arek', 'Robert'];
var allNames = womensNames.concat(mensNames);
var newNames = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Ania', 'Tadeusz', 'Arek', 'Ola', 'Jan', 'Andrzej'];
newNames.filter(function(name) {
	if (allNames.indexOf(name) == -1) {
		allNames.push(name);	
	}
});
var newName = "Marian";
if (allNames.indexOf(newName) == -1) {
	allNames.push(newName);	
}
console.log(allNames);

/* Zadanie 8.8 */
console.log('ZADANIE 8.8');
var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = text.replace('Papugi', 'Zielone słonie').toUpperCase();
text = text.replace('Papugi', animal.substr(0, 14));
console.log(text.substr(0, text.length/2));

/* Zadanie 8.9 */
console.log('ZADANIE 8.9');
function rysujChoinke(a) {
	var star='';
	var b,c;
	for(i=0;i<a;i++){
		b=a-i;
		c=(i+1)*2-1;
		for(j=0;j<c;j++){
			star+='*';
		}
		while(b!=0){
			star=" "+star+" ";
			b--;
		}
		console.log(star);
		star='';
	}
	star="| |"
	while(a!=1){
		star=" "+star+" ";
		a--;
	}
	console.log(star);
}
rysujChoinke(5);

/* Zadanie 8.11 */
function checkOnclickEvent(param) {
  	console.log(param);
}

var addElem = document.getElementById('js-addElem');
var navigation = document.getElementById('Lista');

addElem.addEventListener('click', function(e) {
  	navigation.innerHTML += '<li>item '+navigation.getElementsByTagName('li').length+'</li>';
});
