import React from 'react';
import cover from "./data/Constitution cover cropped.png";
import top_cropped from "./data/top_cropped.png";
import bottom_text from "./data/bottom_text.png";
import './App.css';

class Home extends React.Component {

    render() {
        const { clickAction, homeScreen } = this.props;
        return (
            <div className={homeScreen ? 'home' : 'full'}>
                <div className="home-outer">
                    <div className={"home-inner"}>
                        <img onClick={clickAction} className={"home-image"} src={cover}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
