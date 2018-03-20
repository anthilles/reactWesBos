LISTA
-------------------------
1. Funkcje strzałkowe http://www.algosmart.pl/powtorka-przed-reactjs-1-funkcje-strzalkowe/
2. Łańcuchy szablonowe http://www.algosmart.pl/lancuchy-szablonowe-powtorka-przed-reactjs-2/
3. Destrukturyzacja
4. Operator spread, parametr rest i default
5. Obietnice
6. Importowanie oraz eksportowanie modułów
7. Zakresy
8. Domknięcia
9. Słowo kluczowe this
10. Metody bind, call, apply
11. Funkcje wyższego rzędu
12. Rozwijanie funkcji
13. Programowanie funkcyjne: filter, map, reduce
14. Prototypy i dziedziczenie

Funkcje strzałkowe
-------------------------

lista parametrów + marker => + ciało funkcji

```javascript
() => { ... } // brak parametrów
x => { ... } // jeden parametr, identyfikator
(x,y) => { ... } // kilka parametrów
```

Różnice pomiędzy funkcją klasyczną a funkcją strzałkową

**Przykład 1**
```javascript
//stara wersja//
const array = [1,2,3,4,5,6];
function isEven(num){
    return num % 2 === 0;
}

function square(num) {
    return num * num;
}
const squareOfEvens = array.filter(isEven2).map(square2);
```

```javascript
//nowa wersja//
const isEven = num => num % 2 === 0;
const square = num => num * num;

const squareOfEvens = array.filter(isEven2).map(square2);
```

**Przykład 2**
```javascript
//klasycznie//
    function makeAdder(x){
        return function(y){
            return x+y;
        }
    }
```

```javascript
//strzałkowo//
    const makeAdder = x => y => x+y;
```

**Ważne**
1. => musi znajdować się w tej samej linijce co lista parametrów - inaczej będzie syntaxError
2. Jeśli ciało naszej funkcji zawiera instrukcję, niezależnie od ilości kodu musimy ją otoczyć klamrą
```javascript
    asyncFunction.catch(x => { throw x })
```
3. Gdy funkcja zwraca literał obiektowy musimy otoczyć go nawiasami:
```javascript
    const baz = () => ({foo: 'bar'});
```

**PROBLEM Z THIS**
Funkcje strzałowe rozwiązują jeszcze jeden bardzo ważny problem
dzięki nim nie ma potrzeby już kombinować z .bind(this) i var self = this;

Klasyczne funkcje posiadają dynamiczne wiązanie this.
Oznacza to, że wartość this jest zależna od kontekstu wywołania funkcji.
```javascript
//problem z this, które nie wychodzi//
function Adder(value) {
    this.value = value;
}
Adder.prototype.addToArray = function (arr) {
    'use strict';
    return arr.map(function (x) {
        return x + this.value;  // TypeError.
    });
}
```

```javascript
    //stare ale działające obejście powyższego problemu//
    // Wiążemy this z zakresu addToArray do funkcji mapującej za pomocą bind().//
Adder.prototype.addToArray = function (arr) {
    return arr.map(function (x) {
        return x + this.value;
    }.bind(this));
}
// Korzystamy ze zmiennej pomocniczej self, w której zapisujemy wartość wskaźnika this.//
Adder.prototype.addToArray = function (arr) {
    let self = this;
        return arr.map(function (x) {
            return x + self.value;
        });
}
```
```javascript
    // Do celu =>! (if you know what I mean)
Adder.prototype.addToArray = function (arr) {
    return arr.map(x =>  {
        return x + this.value;
    });
}
```
Jak to działa? Wskaźnik this przyjmuje wartość zgodną z oczekiwaniami, ponieważ funkcje strzałkowe posiadają zakres leksykalny.
Jak działa zakres leksykalny? Jeżeli identyfikator nie zostanie odnaleziony w aktywnym zakresie, jest on wyszukiwany w zakresie otaczającym.

**Kiedy nie używać funkcji strzałkowych**
Nie zawsze => jest najlepszym rozwiązaniem, czasami nawet bardzo kiepskim...
1. Konstruktory
Funkcje strzałkowe nie posiadają wewnętrznych metod construct ani prototype
2. Mapowanie
słynne .bind(this)

```javascript
const algoSmart = {
    likes: 52,
    getLikes: () => console.log(this.likes);
    setLikes: function(value) {
        this.likes = value;
    }
};
algoSmart.getLikes(); // undefined
algoSmart.setLikes(100000);
```
Wskaźnik this w metodzie getLikes wskazuje na obiekt globalny window.

3. Obsługa zdarzeń
podobnie jest w nasłuchiwaniu zdarzeń na elementach DOM
```javascript
    <button id="example">Click me</button>

    button = document.querySelector('#example');
    button.addEventListener('click', () => {
        console.log(this); // Window!
        this.classList.toggle('on');
    });

```

Łańcuchy szablonowe - template literal
-------------------------

