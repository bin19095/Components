
import Accordion from '../components/Accordion';



function Accordionpage(){
  const items = [
    {
      id:'1',
      label: 'Can I use React on a Project?',
      content: 'You can use React on any Project You want. You can use React',
    },
    {
      id:'2',
      label: 'Can I use Javascript On a project',
      content: 'You can use React on any Project You want. You can use React',
    },
    {
      id:'3',
      label: 'Can I use Css On a Project',
      content: 'You can use React on any Project You want. You can use React',
    }
  ];

	return( 
  <div>
         <Accordion items={items} />
  </div>
);
}
export default Accordionpage;