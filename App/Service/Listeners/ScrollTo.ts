import {default as Contract } from "../../Contracts/Service/Listeners/ScrollTo.js";
import Scrollable from "./Scrollable.js";
import ScrollInformation from "../../Contracts/Service/ScrollInformation";
import {Subscribers} from "../../Types/Utilities.js";
abstract class ScrollTo extends  Scrollable implements Contract {
    abstract destinationInformation : ScrollInformation;
}
export default ScrollTo;