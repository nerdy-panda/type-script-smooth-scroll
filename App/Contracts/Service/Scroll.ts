import ScrollInformation from "../../Contracts/Service/ScrollInformation.js";

interface Scroll {
    readonly scrollElement : Element ;
    current():number;
    length():number;
    middle():number;
    smoothTo(scrollInformation:ScrollInformation):void;
    smoothTopToDown(scrollInformation:ScrollInformation):void;
    smoothDownToTop(scrollInformation:ScrollInformation):void;

}
export default Scroll;