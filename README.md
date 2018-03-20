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
```

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

  LEKCJA 6 - PROPS oraz $
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

  LEKCJA 7 - state / stateless function
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


  LEKCJA 8 - Routing / React router
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


LEKCJA 7 - state / stateless function
-------------------------

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
