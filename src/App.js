
import Accordionpage from './pages/Accordionpage';
import Dropdownpage from './pages/Dropdownpage';
import Buttonpage from './pages/Buttonpage';
import Route from './components/Route';
import Sidebar from './components/Sidebar';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';

function App(){
	return( 
  <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
    
      <Sidebar/>
    <div className="col-span-5">
        <Route path="/accordion">
            <Accordionpage />
        </Route> 
        <Route path="/">
            <Dropdownpage/>
        </Route> 
        <Route path="/buttons">
            <Buttonpage/>
        </Route>
        <Route path="/modal">
             <ModalPage/>
        </Route>
        <Route path="/table">
            <TablePage/>
        </Route>
    </div>  
   
  </div>
);
}
export default App;