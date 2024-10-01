
import Dropdown from '../components/Dropdown';
import { useState } from 'react';

function Dropdownpage(){
  
  const options= [ 
    { label: "list", value: 'red'},
     { label: "list2", value: 'green'},
      {label: "list 3", value: 'blue'},
    
  ];

  const [selection, setSelection ] = useState(null);
  /*console.log("testing")*/
  const handleOnSelect = (option) => {
    console.log("Clicked Me");
    
    setSelection(option)
  }
	return( 
  <div className='inline-flex'>
     <Dropdown 
      options={options} 
      selection={selection} 
      onSelect={handleOnSelect}/>
      <Dropdown 
      options={options} 
      selection={selection} 
      onSelect={handleOnSelect}/>
  </div>
);
}
export default Dropdownpage;