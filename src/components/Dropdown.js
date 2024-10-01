import { useState, useRef, useEffect } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown( { options, selection, onSelect }){
    const [isOpen, setIsOpen] = useState(false);
   const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current?.contains(event.target)){
                setIsOpen(false);
            }
        }
        
        document.addEventListener('click',handler,true);
        return () =>{
            document.removeEventListener('click',handler);
        }
           
    
    },[])
    const handleClick = () => {
        setIsOpen((currentIsOpen)=> !currentIsOpen);
    };
   
    const handleOptionClick = (option) => {
       //Close DropDown
        setIsOpen(false);
        //What Option Did The User Click On??
        onSelect(option);
    }

    const renderedOptions = options.map((option) => {
        return <div 
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)} 
        key={option.value}> 
        {option.label}
         </div>;
    });
    return( <div ref={divEl} className="w-48 relative flex">
        <Panel 
        className="inline-flex justify-between items-center cursor-pointer "
        onClick={handleClick} >
          {selection ? selection.value : 'Select...'}
          <GoChevronDown className="text-lg"/>
        </Panel>
           {isOpen && (
            <Panel className="absolute top-full">
                {renderedOptions}
            </Panel>)}
        
    </div>

    );

}

export default Dropdown;