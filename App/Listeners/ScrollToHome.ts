import {default as Contract} from "../Contracts/Listeners/ScrollToHome.js";
import ScrollTo from "../Service/Listeners/ScrollTo.js";
import ScrollInformation from "../Contracts/Service/ScrollInformation";

class ScrollToHome extends ScrollTo implements Contract {
    destinationInformation : ScrollInformation = {
        destination : 0 , step : 6 , timeout : 4 ,
    }
    override handle = (event: Event):void => {
        this.scroll.smoothTo(this.destinationInformation);
    }
}

export default ScrollToHome;