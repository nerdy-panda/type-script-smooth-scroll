import { default as Contract } from "../../Contracts/Pages/Home2/Program.js";
import DomUtility from "../../Contracts/Service/DomUtility.js";
import Scroll from "../../Contracts/Service/Scroll.js";
import ScrollInformation from "../../Contracts/Service/ScrollInformation.js";
import { NullOrString } from "../../Types/Utilities.js";
import { STEP, TIMEOUT , STEP_ATTRIBUTE_NAME, TIMEOUT_ATTRIBUTE_NAME } from "../../Config/App.js";
import Subscriber from "../../Service/Subscriber.js";

class Program implements Contract {
    public static canDispatch:boolean = true;
    constructor(protected domUtility:DomUtility , protected scrollService : Scroll ){}
    main() {
        const navLinks : NodeListOf<HTMLElement>  = window.document.body.querySelectorAll<HTMLElement>("nav a");
        for (const navLink of navLinks)
            navLink.addEventListener('click',this.navLinkListener);
    }
    protected navLinkListener = (event : Event ) => {
        console.log(Program.canDispatch);
        
        if(!Program.canDispatch)
            return;

        let step:number  = STEP ;
        let timeout : number = TIMEOUT ; 
        
        const navLink : HTMLElement = <HTMLElement> event.currentTarget ;
        const destinationSelector : string = <string>navLink.getAttribute("data-scroll-to");
        const destinationElement : HTMLElement = <HTMLElement> window.document.body.querySelector(destinationSelector);
        const destination : number = destinationElement.offsetTop - 75;

        if(navLink.hasAttribute(STEP_ATTRIBUTE_NAME))
            step = parseInt(<string>navLink.getAttribute(STEP_ATTRIBUTE_NAME));
        if(navLink.hasAttribute(TIMEOUT_ATTRIBUTE_NAME))
            timeout = parseInt(<string>navLink.getAttribute(TIMEOUT_ATTRIBUTE_NAME));
        const destinationInformation : ScrollInformation = {
            destination : destination , step : step , timeout : timeout ,
            before : [
                {handle() {
                   Program.canDispatch = false ;
                },}
            ],
            done : [
                {handle() {
                    Program.canDispatch = true  ;
                },}
            ]
        }

        this.scrollService.smoothTo(destinationInformation)
    }
}
export default Program;
