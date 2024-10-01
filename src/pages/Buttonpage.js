
import Button from '../components/Button';
import { GoDatabase,GoDesktopDownload } from "react-icons/go";


function Buttonpage(){
	return( 
  <div>
	  <div>    
	    <Button className='mb-6' success outline rounded>
             <GoDatabase  /> Click Me!!
	    </Button>
	  </div>
    <div> 
      <Button  outline danger >
      <GoDesktopDownload/>
          Buy Now
      </Button>
	  </div>
    <div>
      <Button warning>
        Seed Deal!
      </Button>
    </div>
    <div>
      <Button outline secondary >
          Hide Ads!
      </Button>
    </div>
    <div>
      <Button primary outline rounded>
         Something!
      </Button>
    </div>
  </div>
);
}
export default Buttonpage;