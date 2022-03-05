import React from "react";
import ReactDOM from 'react-dom';
import './style.css'
import Navbar from "./components/Navbar";
import TravelContent from "./components/TravelContent";
import Data from './data'


function Page() {
    const travelContent = Data.map(item => {
        return <TravelContent 
                key = {item.id}
                {...item}
        />
    })
    return (
      <React.StrictMode>
        <Navbar />
        {travelContent}
      </React.StrictMode>
    )
  }  
  ReactDOM.render(<Page />, document.getElementById("root"))