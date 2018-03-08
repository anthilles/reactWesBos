import React from 'react'; // zaimportowanie modułu react

class StorePicker extends React.Component { // określenie klasy naszego komponentu oraz określenie jej jako komponentu
    render(){ // każdy komponent musi mieć przynajmniej jeden moduł - render()
        return <p>hello x2</p>
    }
}

export default StorePicker; // musimy nasz moduł wyeksportować (aby mógł być odczytany przez index.js)