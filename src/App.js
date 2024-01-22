import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import sectionData from "./Data/sectionData";

// let sectionData = [
//     {
//         title: "About Me",
//         des: "I am a softqare engineer"
//     },
//     {
//         title: "Skills",
//         des: "HTML, CSS, Javascript, React, SQL"
//     },
//     {
//         title: "Qalifications",
//         des: "I am a B. E. Mechanical Enginnering"
//     },
//     {
//         title: "Project",
//         des: "Youtuve clone, Blinkit Clone"
//     }
// ]

const App = () => {

    let a = 100;
    let b = 200;
    return(
        <div>
            <Navbar/>
            <About/>
            {/* <Section title="Skills" description="HTML, CSS, Javascript, React"/>
            <Section title="Qualification" description="BE Mechanical"/>
            <Section title="Project" description="BlinkIt"/> */}
            {
                sectionData.map((item, index)=>(
                    <Section key={index} 
                        title={item.title} 
                        description={item.des}/>
                ))
            }
            {a<b? 
            (<h1>Greater Number is {a}</h1>): 
            (<h1>Greater Number is {b}</h1>)}

        </div>
    )
}

export default App;

// loop => Higher Order Function => map, reduce, filter
// if else => Ternary Operator
