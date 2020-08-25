import React from 'react';
import cover from "./data/Constitution cover cropped.png";
import top_cropped from "./data/top_cropped.png";
import bottom_text from "./data/bottom_text.png";
import './App.css';

class Home extends React.Component {

    render() {
        const { clickAction } = this.props;
        return (
            <div className="home-outer">
                <div className={"home-inner"}>
                    <img onClick={clickAction} className={"home-image"} src={cover}/>
                </div>
            </div>
        );
    }
}

export default Home;
