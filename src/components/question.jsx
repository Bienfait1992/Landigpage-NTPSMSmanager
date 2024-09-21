import React from "react";
import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";




export const Question = ()=>{

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen);
    };
   

    const [isOpene, setIsOpene] = useState(false);
    const toggleDropdowne = ()=>{
        setIsOpene(!isOpene);
    };

    const [isOpene1, setIsOpene1] = useState(false);
    const toggleDropdowne1 = ()=>{
        setIsOpene1(!isOpene1);
    };

    const [isOpene2, setIsOpene2] = useState(false);
    const toggleDropdowne2 = ()=>{
        setIsOpene2(!isOpene2);
    };


    return(
        




<div className="w-full flex flex-wrap bg-gray-100 py-40">
        

     <div className=" w-[90%] m-auto flex gap-10   ">
        
       
        
       <div className=" text-justify  w-full ">
                <div onClick={toggleDropdown} className="   shadow-xl  flex  items-center bg-gray-200     px-2  cursor-pointer space-x-48 mb-4 sm:w-1/1 md:w-1/1 w-full">
                    <div className="py-2  font-bold"><h3>C'est quoi NTP SMS Manager ?</h3></div>
                    <div className=""><FaPlusSquare /></div>
                </div> 

                   
                        {isOpen &&(
                                        <p className="sm:w-1/1 md:w-1/2">NTP SMS Manager, ou bien tout court SMS Manager,  est une application Web développée p
                                            ar NTOPROG dans le but de vous permettre d'envoyer des SMS personnalisés depuis votre compte
                                            ou bien via API dans vos applications tierces. En utilisant cette application, vous avez la
                                            possibilité d'atteindre rapidement vos objectifs de marketing ou de partage d'information,
                                            car l'avantage est que 90% des gens qui
                                            utilisent leurs portables lisent encore leurs SMS quand ils les reçoivent. </p> 
                                        )}
                    
        
        

        <div>
                    <div onClick={toggleDropdowne} className="shadow-xl mb-4 flex   bg-gray-200 w-full   px-2  items-center  cursor-pointer space-x-20  w-full">
                                <div className="py-2  font-bold"><h3>Pourquoi dois-je utiliser NTP SMS Manager ? </h3></div>
                                <div  className=""><FaPlusSquare /></div>
                    </div> 
                    
                        {isOpene &&(
                                <p className=" sm:w-1/1 md:w-1/2">Parce que c'est le meilleur. </p>
                                )}
                    
        </div>

        <div>
                    <div onClick={toggleDropdowne1} className="shadow-xl mb-4 flex  items-center bg-white w-full   px-2 bg-gray-200 cursor-pointer space-x-44 w-full">
                                <div className="py-2  font-bold"><h3>Comment puis-je utiliser NTP SMS Manager ? </h3></div>
                                <div  className=""><FaPlusSquare /></div>
                    </div> 
                    
                        {isOpene1 &&(
                                <p className="sm:w-1/1 md:w-1/2">Créez votre compte dès maintenant en vous enregistrant. Aussitôt votre compte est créé et confirmé, 
                                    vous aurez un forfait vous permettant d'envoyer jusqu'à 10 SMS gratuitement. </p>
                                )}

        </div>



            <div>
                <div onClick={toggleDropdowne2} className="shadow-xl mb-4 flex  items-center bg-white w-full   px-2 bg-gray-200 cursor-pointer w-full">
                            <div className="py-2  font-bold"><h3>Qui verra mes messages envoyés ? </h3></div>
                            <div  className=""><FaPlusSquare /></div>
                </div>   


                    {isOpene2 &&(
                            <p className="sm:w-1/1 md:w-1/2">Vous êtes la seule personne à avoir accès à vos messages envoyés. S'il vous arrive de désigner quelqu'un d'autre à accéder à votre compte, cette dernière pourra aussi voir vos messages.
                                        Nous collectons seulement les éléments pour les statistiques, sans aller dans les détails de vos SMS. </p>
                            )}      
            </div>
            
        </div>
        

        <div><img src="src/images/Untitled-design-81.jpg" alt="" className=" "/></div>
        </div>
        
        </div>

        


        
    )
}