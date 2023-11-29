import Subscriber from "../Subscriber.js";

interface ScrollInformation {
    destination : number , step : number , timeout : number ,
    before ?: Subscriber[] , done ?: Subscriber[]
}
export default ScrollInformation ;