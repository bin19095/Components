import { useState } from 'react';
import {  GoChevronLeft } from 'react-icons/go';
import { GoChevronDown } from "react-icons/go";

function Accordion ({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    
    const handleClick = (nextIndex) =>{
/*      console.log('Stale version of expansion',expandedIndex);
       console.log(nextIndex)
        if(expandedIndex === nextIndex){
            setExpandedIndex(-1);
        } else{
        setExpandedIndex(nextIndex);
        }
*/
setExpandedIndex((currentExpandedIndex)=>{
   // console.log('Up To Date Version',currentExpandedIndex);
    if(currentExpandedIndex === nextIndex){
        return -1;
    }else {
        return nextIndex;
    }
});


    };

    const renderedItems = items.map((item,index) =>{
    const isExpanded = index === expandedIndex;
    const icon = <span className="text-3xl">{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>;
        return(
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=> handleClick(index)}>
                {item.label}
                 {icon}    
                </div>
              {isExpanded &&  <div className="border-b p-5">{item.content}</div>}
            </div>
        );

    });
    return(
        <div className="border-b p-5">
            {renderedItems}
        </div>
    );
}
export default Accordion;