import React from 'react'; // zaimportowanie modułu react

class StorePicker extends React.Component { // określenie klasy naszego komponentu oraz określenie jej jako komponentu
    render(){ // każdy komponent musi mieć przynajmniej jeden moduł - render()
        return (
            <React.Fragment>
                <form className="store-selector">
                    <h2>Please Enter A Store</h2>
                    <input type="text" require placeholder="Store Name"/>
                    <button type="submit">Visit store &#8658;</button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker; // musimy nasz moduł wyeksportować (aby mógł być odczytany przez index.js)