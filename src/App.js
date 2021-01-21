import React from "react";
import './App.css';
import {Navbar} from "./componets/Navbar";
import {Slider} from "./componets/Slider";
import {Services} from "./componets/Services";
import {OurCompany} from "./componets/OurCompany";
import {Footer} from "./componets/Footer";

function App() {
    return (
        <>
            <Navbar/>
            <Slider/>
            <Services/>
            <OurCompany/>
            <Footer/>
        </>
    );
}

export default App;
