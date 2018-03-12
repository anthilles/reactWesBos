import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="hej hej hej" /> {/* komponent do napisania */}
                </div>
                <Order /> {/* komponent do napisania */}
                <Inventory /> {/* komponent do napisania */}
            </div>
        )
    }
}

export default App;