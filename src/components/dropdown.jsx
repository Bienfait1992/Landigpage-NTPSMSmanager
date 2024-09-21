import React from "react";
import { useState } from "react";





export const Dropdown = ()=>{

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen);
    };
   

    const [isOpene, setIsOpene] = useState(false);
    const toggleDropdowne = ()=>{
        setIsOpene(!isOpene);
    };
   

    return(
        <>
        <nav>
            <ul>
                <li className="dropdown">
                    <button onClick={toggleDropdown} className="dropbtn">services</button>
                    {isOpen &&(
                        <ul className="dropdown-content">
                            <li><a href="">service1</a></li>
                            <li><a href="">service2</a></li>
                            <li><a href="">service3</a></li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
            
            
           <div><ul>
            
           <li className="dropdown">
                    <button onClick={toggleDropdowne} className="dropbtn">services</button>
                    {isOpene &&(
                        <ul className="dropdown-content">
                            <li><a href="">service4</a></li>
                            <li><a href="">service5</a></li>
                            <li><a href="">service6</a></li>
                        </ul>
                    )}
                </li>


            
            
            </ul></div> 
            </>
     
    )
}