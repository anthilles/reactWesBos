SPIS TREŚCI
-------------------------
1. [Lekcja 1 i 2](https://github.com/anthilles/reactWesBos/blob/master/README.md#lekcja-2)
3. [KOMPONENT](https://github.com/anthilles/reactWesBos/blob/master/README.md#lekcja-3---komponent)
4. [JSX](https://github.com/anthilles/reactWesBos/blob/master/README.md#lekcja-4---jsx)
5. [CSS w REACT](https://github.com/anthilles/reactWesBos/blob/master/README.md#lekcja-4---css-w-react)
6. [UKŁAD APLIKACJI - KOMPONENT GŁÓWNY I KOMPONENTY W NIM OSADZONE](https://github.com/anthilles/reactWesBos/blob/master/README.md#lekcja-5---ok%C5%81ad-aplikacji---komponent-g%C5%81%C3%93wny-i-komponenty-w-nim-osadzone)
7. [PROPS oraz $ PRZEKAZYWANIE DYNAMICZNYCH DANYCH W PROPS (ATRYBUTACH)](https://github.com/anthilles/reactWesBos/blob/master/README.md#lekcja-6---props-oraz-przekazywanie-dynamicznych-danych-w-props-atrybutach)
8. [state / stateless function](https://github.com/anthilles/reactWesBos/blob/master/README.md#lekcja-7---state--stateless-function)
9. [Routing / React router](https://github.com/anthilles/reactWesBos/blob/master/README.md#lekcja-8---routing--react-router)
10. [Funkcje w helpers.js i ich import](https://github.com/anthilles/reactWesBos/blob/master/README.md#lekcja-9---funkcje-w-helpersjs-i-ich-import)
11. [Events, Refs, Bindings](https://github.com/anthilles/reactWesBos/blob/master/README.md#lekcja-10---events-refs-bindings)
12. [Obsługa eventów](https://github.com/anthilles/reactWesBos/blob/master/README.md#lekcja-11---obs%C5%82uga-event%C3%B3w)


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


  LEKCJA 5 - CSS w REACT
-------------------------
Można standardowo dodać używając <link rel> w pliku index.html
Można również użyć "komponent style css" lub "inline css"  - polega to na tym, że css importowany jest bezpośrednio do komponentu i tylko używane są te, które dotyczą danego komponentu
```javascript
//w głównym pliku index.js
import './css/style.css';
```

  LEKCJA 6 - UKŁAD APLIKACJI - KOMPONENT GŁÓWNY I KOMPONENTY W NIM OSADZONE
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

  LEKCJA 7 - PROPS oraz $
  PRZEKAZYWANIE DYNAMICZNYCH DANYCH W PROPS (ATRYBUTACH)
-------------------------

**PROPS** - są podobne do att HTML. W tagu przekazujemy dodatkowe informacje jak nazwa pliku lub nazwa alternatywna - bez których plik by się nie wyświetlił prawidłowo
```html
<img src="dog.jpg alt="Dog>
<input type="text">
```
propsy = attr. Propsy to metoda jaką przekazujemy dane do komponentu.

**STATE** - miejsce gdzie dane żyją w danej chwili
**PROPS** - to metoda w jaki sposób dane docierają do domu

PRZYKŁAD: chcemy aby nasz tytuł był przekazywany dynamicznie (komponent Header.js)
```javascript
<Header tagline="Wes is Cool" age={400} cool={true}>
```
Jak spojrzymy w devtools w React to w props wyświetli nam się Props: tagline: "Wes is cool" age=500 cool=true
Możemy props traktować jako obiekt z właściwościami.

Przekazywanie propsów w konkretne miejsce na stronie
  1. musimy wywołać w React informację, że będziemy robić JS (czyli {} )
  2. a następnie wywołujemy propsy wpisując do środka
  ```javascript
  //App.js//
  <Header tagline="Wes is Cool"></header>
  //Header.js//
  <h3 className="tagline">
    {this.props.tagline}
  </h3>
  ```
  **this** <- czyli odwołanie to instancji komponentu, w tym wypadku chodzi o Header

Czyli tam gdzie jest komponent decydujemy jakie info będzie wyświetlane.
a tam gdzie jest on uruchamiany - przekazujemy informacje co będzie.

**$r** - w devtools w chrome, zwraca cały komponent. moment AHA! cały zwrócony komponent to tak na serio - jeden obiekt!

  LEKCJA 8 - state / stateless function
-------------------------

**stateless function component** - jeśli nasz komponent nie robi nic więcej tylko renderuje (i może mieć propsy) to nie ma potrzeby robienia z niego pełnoprawnego komponentu. Wtedy wystarczy nam
zrobienie stateless function component

komponent renderujący przed "poprawką"

```javascript
class Header extends React.Component{
    render(){
        return(
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{this.props.tagline}</span>
                </h3>
            </header>
        )
    }
}
```

ten sam tylko stateless function component

```javascript
  const Header = props => (
                <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">Of</span>
                        <span className="the">The</span>
                    </span>
                    Day
                </h1>
                <h3 className="tagline">
                    <span>{props.tagline}</span>
                </h3>
            </header>
  )
```

1. const Header = props => () // czyli funkcja Header która obiera jedną wartość "props" a następnie render - czyli ()
2. Po co to? Oszczędza to nam kodu oraz "wydajność" naszej aplikacji


  LEKCJA 9 - Routing / React router
-------------------------
**Router** - nie jest to technologia przypisana bezpośrednio do React'a.
            W reacie wszystko jest komponentem, nawet Router jest komponentem.
1. Dlatego w folderze components musimy utworzyć plik Router.js
2. Następnie w nim musimy zaimportować kilka rzeczy:
```javascript
    import React from 'react';
    import {BrowserRouter, Route, Switch } from 'react-router-dom';
```
3. Oraz stworzyć nasz stateless komponent, zwracający trochę bardziej rozbudowany return
```javascript
    const Router = () => (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StorePicker} />;
          <Route exact path="/store/:storeId" component={App} />;
          <Route exact component={NotFound} />;
        </Switch>
      </BrowserRouter>
    );
    export default Router;
```
**Route** - są to nasze przejścia, jeśli nie znajdzie takiego adresu przechodzi do kolejnego route i tak dalej
**Route exact path="/" component={StorePicker}** - wskazujemy dokładna ścieżkę jaka ma zostać wpisana oraz komponent, który zostanie zwrócony. Należy pamiętać, że ten komponent musimy dodać do zaimportowania w Router.js!
```javascript
  import StorePicker from './StorePicker';
  import App from './App';
  import NotFound from './NotFound';
```
**Route exact path="/store/:storeId" component={App}** - wszystkie adresy nazwastrony/store/cokolwiekcotusiewpisze wywołają komponent App

**Route exact component={NotFound}** - jeśli nie podamy path to będzie się to odnosić do wszystkich pozostałych wpisanych adresów

4. Poprawki w index.js - skoro importujemy konkretne komponenty w Router.js to musimy zaimportować router do index.js oraz możemy wyrzucić również z index.js importowane komponenty używane w Router.js

* ~~import StorePicker from './components/StorePicker'~~
* ~~import App from './components/App'~~
* import Router from './components/Router"

* render(<Router />, document.querySelector('#main'));


LEKCJA 10 - Funkcje w helpers.js i ich import
----------------------------------------------

**helpers.js** - czyli plik w którym przechowujemy wszystkie regularne javascriptowe funkcje, dla których nie ma potrzeby budowania specyficznych komponentów.
Jedną z ważniejszych rzeczy jest wyeksportowanie tych funkcji z pliku helpers.js. W tym celu użyjemy:

```javascript
  export function nazwa(){
    return cos;
  }
```

**różnica pomiędzy export default a export**
```javascript
  import React from "react";
```
właśnie słowo React to "default". Importujemy cały pakiet React

```javascript
  import { nazwa } from '../helpers';
```
a tak wygląda importowanie konkretnej funkcji { nazwa } z pakietu helpers.
Gdybyśmy chcieli zaimportować całość to by było default bez { }

**wykorzystanie zaimportowanej funkcji**

Ok to mamy już zaimportowaną, a jak jej użyć?
```javascript
  <input type="text" defaultValue={nazwa()}/>
```
1. defaultValue - musimy użyć takiej składni. Wiąże się to ze stanem aplikacji
2. w {} bo "robimy tu javascript"

LEKCJA 11 - Events, Refs, Bindings
----------------------------------------------

**events**
1. w React jest bardzo podobnie do czytego js. Jedynym "dodatkiem jest SyntheticEvent - co jest instancją cross-browser, czyli że będzie działać wszędzie.
2. W React eventy obsługiwane są w jednej linii - więc nie trzeba bawić się w clasę w html, która uruchamiana jest w oddzielnym pliku js. Wystarczy onClick + oczywiście zadeklarowanie funkcji (w przykładzie - ten sam plik, powyżej render)

```javascript

class StorePicker extends React.Component {
  handleClick() {
    alert("kliknięto")
  }
  render(){
    return (
      <button onClick={this.handleClick}>click me!</button>
    )
  }
}

```
**Refs**
3. Samo pobieranie elementów - jedna z ważniejszych zasad React brzmi - nie dotykaj DOM. Co oznacza mniej więcej, że to co zostało już dodane niech nie będzie ruszane (???)
Można wykorzystać do tego **refs** - które pozwalają nam na sięgnięcie do elementów już zbudowanych na stronie

```javascript
  myInput = React.createRef(); //tworzymy pusty myInput

  render(){
    return (
      <input
        type="text"
        ref="this.myInput" //this.myInput - ref przekazujący input do myInput, zamieniając input w komponent
        defaultValue="test"
      />
    )
  }
```

**binding**
Wszystkie komponenty budowane w React należą z automatu do React.Component (Rodzic)
Rodzi ot problemy jesli chcemy odwołać się do własnego komponentu - i używając "this" mamy problem. Zwraca info z komponentu rodzica albo undefined
Rozwiązaniem jest zbindowanie naszego własnego komponentu.

```javascript
  constructor() {
    super(); //a super musi być aby i tak uruchomić React przed użyciem konstruktora.
  }
```
konstruktor to metoda, która uruchomi się jeszcze przed głównym komponentem, mimo tego, że sam jest wewnątrz.
A że jest wewnątrz to trzeba i tak uruchomić React przed uruchomieniem konstruktora - tutaj przychodzi nam z pomocą super();
I w konstruktorze możemy zbindować this na własną metodę

```javascript
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }
```

**ALE** można to załatwić w łatwiejszy sposób. Zamiast deklarować metodę na komponencie deklarujemy properie, która będzie ustawiona na arrow function
```javascript
  goToStore = (event) => {
    console.log(this);
  }
```

**więc jeśli potrzebujemy dostępu this wewnątrz własnej metody musimy użyć (event) => {} albo bawić się konstruktorem**

LEKCJA 12 - Obsługa eventów
----------------------------------------------