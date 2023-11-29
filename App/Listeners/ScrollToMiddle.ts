import {default as Contract} from "../Contracts/Listeners/ScrollToMiddle.js";
import ScrollTo from "../Service/Listeners/ScrollTo.js";
import ScrollInformation from "../Contracts/Service/ScrollInformation.js";

class ScrollToMiddle extends ScrollTo implements Contract {
    destinationInformation : ScrollInformation = {
        destination : this.scroll.middle() , step : 5 , timeout : 8 ,
    }
    override handle = (event: Event) :void => {
        this.scroll.smoothTo(this.destinationInformation);
    }
}
export default ScrollToMiddle;