import React, { Component } from "react";
import FontIcon from "material-ui/FontIcon";
import { BottomNavigation, BottomNavigationItem } from "material-ui/BottomNavigation";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";

import Footer from "./children/Footer.js";

const HomeIcon = <FontIcon class="material-icons"></FontIcon>
const NewIcon = <FontIcon className="material-icons"></FontIcon>
const ViewIcon = <FontIcon className="material-icons"></FontIcon>
const SearchIcon = <FontIcon className="material-icons"></FontIcon>
const UpdateIcon = <FontIcon className="material-icons"></FontIcon>

class Main extends Component {
    constructor() {
        super();

        this.state = {
            selectedIndex: 0
        }
    }

    select(index){
        
    this.setState({selectedIndex: index});
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Who Wants to Hire Me?</h1>
                </header>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Home"
                        icon = {HomeIcon}
                        onClick = {() => this.select(0)}
                    />
                </BottomNavigation>
                <Footer />
            </div>
        )
    }
};

export default Main;