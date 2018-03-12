Stack soft
-------------------------
* Node
* CMDER
* VCode
* VCODE - addon prettier, bardzo dobrze współpracuje z react
* React dev tool for chrome

LEKCJA 1
-------------------------

Package.json -> w folderze gdzie jest zainstalowany npm install
* devDependies -> to co lokalnie jest potrzebne
* dependies -> ustawienia potrzebne aby uruchomić apkę
* scripts

LEKCJA 2
-------------------------
* Komponenty -> plik komponentu, jakby oddzielny tag. Cała aplikacja powinna się składać z oddzielnych komponentów, przechowywanych w folderze
components i importowanych do pliku index.js.

LEKCJA 3 - KOMPONENT
-------------------------

Budowanie pierwszego komponentu:
1. zaimportowanie modułu z dependies <-- czyli z npm moduls
```javascript
import React from 'react';
```

2. Stworzenie własnej klasy - każdy komponent będzie miał swoją własną klasę
```javascript
class StorePicker extends React.Component {
}
```

3. Każdy komponent powinien mieć przynajmniej jedną metodę - renderer()

```javascript
class StorePicker extends React.Component {
  renderer(){
    return <p>Hello!</p>
  }
}
```

4. Aby umieścić nasz komponent w aplikacji musimy go dodać do DOM
```javascript
import { renderer } from 'react-dom';

renderer <StorePicker/>, document.querySelector('#main'));
```

5. Nasz komponent znajduje się w StorePicker.js w folderze components
  * musimy pamiętać aby tu też był 
  ```javascript
  import React from 'react';
  ````
  * znajduje się tutaj class StorePicker
  * musimy na końcu go wyeksportować 
  ```javascript
    export default StorePicker
```
6. w index.js musimy zaimportować komponent
```javascript
  import StorePicker from './Components/StorePicker';
  ```

  LEKCJA 4 - JSX
-------------------------
1. Dodając elementy do istniejącego komponentu React musimy pamiętać, że class jest błędne. Trzeba użyć className
```javascript
<p class="bla"> //źle
```

```javascript
<p className="bla"> //dobrze
```

2. Kolejnym ważnym problemem jest zwracanie więcej niż jednej linijki w return
```javascript
render(){
  return
    <form className="bla">
      <p>1</p>
    </form>
}
```
W takiej sytuacji return może się posypać - np wykonać tylko pierwszą linijkę. Aby temu zapobiec należy zapakować return w ()
```javascript
render(){
  return (
    <form className="bla">
      <p>1</p>
    </form>
  )
}
```
DODATKOWO należy pamiętać aby return () miał spację pomiędzy nawiasami -  w przeciwnym razie zostanie zinterpretowany jako funkcja a nie metoda

3. Kolejnym ważnym problemem jest zwracanie więcej niż jednego elementu className w return

Błędny zapis poniżej - przyczepi się do pierwszego <p>
```javascript
render(){
  return (
    <p>2</p>
    <form className="bla">
      <p>1</p>
    </form>
  )
}
```

Prawidłowym zapisem jest wykorzystanie <React.Fragment>
```javascript
render(){
  return (
    <React.Fragment>
      <p>2</p>
      <form className="bla">
        <p>1</p>
      </form>
    </React.Fragment>
  )
}
```

4. Wąsy w React - oznaczają, że w React wykonany zostanie czysty kod JS. Najlepszym przykładem jest komentowanie. W React nie zadziałają // czy htmlowe < ! - trzeba użyć wąsów
```javascript
    { /*komentarz*/}
```


  LEKCJA 4 - CSS w REACT
-------------------------
Można standardowo dodać używając <link rel> w pliku index.html
Można również użyć "komponent style css" lub "inline css"  - polega to na tym, że css importowany jest bezpośrednio do komponentu i tylko używane są te, które dotyczą danego komponentu
```javascript
//w głównym pliku index.js
import './css/style.css';

  LEKCJA 5 - OKŁAD APLIKACJI - KOMPONENT GŁÓWNY I KOMPONENTY W NIM OSADZONE
-------------------------
[App.js w folderze components] APP COMPONENT - komponent trzymający wszystkie pozostałe komponenty w sobie, w oparciu o relację parent - child.
Dzięki temu przekazywanie danych pomiędzy komponentami jest ułatwione - odbywa się właśnie przez appkomponent

w index.js dodajemy główny komponent
```javascript
import App from './components/App';
render(<App/>, document.querySelector('#main'));
````

Dodatkowo, pozostałe komponenty, które mają się znaleźć w komponencie App.js tworzymy w App.js
```javascript
<Header />
```
Tworzymy nowy komponent Header.js w folderze components, exportujemy Header i musimy go zaimportować do App.js
```javascript
import Header from "./Header";
```

  LEKCJA 6 - PRZEKAZYWANIE DYNAMICZNYCH DANYCH W PROPS (ATRYBUTACH)
-------------------------