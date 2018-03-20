import React from 'react'; // zaimportowanie modułu react

class StorePicker extends React.Component { // określenie klasy naszego komponentu oraz określenie jej jako komponentu

    goToStore = event => {
        //1. zapobiegnięcie przeładowaniu strony
        event.preventDefault(); //wywołanie eventu a następnie metody, która zapobiega przeładowaniu się strony - bo bez tego cały czas będzie odżwieżana (return)
        //2. pobranie tekstu z inputa
        //3. zmiana strony na /store/cokolwiekwpisanego
    }
    render(){ // każdy komponent musi mieć przynajmniej jeden moduł - render()
        return (
            <React.Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter A Store</h2>
                    <input
                        type="text"
                        required
                        placeholder="Store Name"
                        defaultValue="Podstawowa nazwa"
                    />
                    <button type="submit">Visit store &#8658;</button>
                </form>
            </React.Fragment>
        )
    }
}

export default StorePicker; // musimy nasz moduł wyeksportować (aby mógł być odczytany przez index.js)