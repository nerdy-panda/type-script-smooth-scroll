import Scrollable from "./Scrollable.js";
import ScrollInformation from "../ScrollInformation";
import {Subscribers} from "../../../Types/Utilities";

interface ScrollTo extends Scrollable {
    destinationInformation : ScrollInformation
}
export default ScrollTo;