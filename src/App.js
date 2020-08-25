import React from 'react';
import cover from "./data/Constitution cover cropped.png";
import top_cropped from "./data/top_cropped.png";
import bottom_text from "./data/bottom_text.png";
import './App.css';
import FullPage from "./FullPage";
import Home from "./Home";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeScreen: true,
        }
    }

    setHomeScreenFalse = () => {
        console.log("Testing");
        this.setState({
            homeScreen: false,
        })
    };

    render() {
        const { homeScreen } = this.state;
        return (
            <div>
                <Home clickAction={this.setHomeScreenFalse}/>
                <FullPage/>
                {/*{homeScreen ? <Home clickAction={this.setHomeScreenFalse}/> : <FullPage/>}*/}
            </div>
        )
    }
}

export default App;
