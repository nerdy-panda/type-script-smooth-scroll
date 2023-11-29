import {default as ProgramBase} from "../../Service/Pages/Program.js";
import {default as Contract } from "../../Contracts/Pages/Home/Program.js";
import DomUtility from "../../Contracts/Service/DomUtility.js";
import { NullOrButtonElement } from "../../Types/Dom.js";
import ScrollToMiddle from "../../Contracts/Listeners/ScrollToMiddle.js";
import {DisableButtonSubscribers, EnableButtonSubscribers} from "../../Types/Utilities.js";
import ScrollToHome from "../../Contracts/Listeners/ScrollToHome";

class Program extends ProgramBase implements Contract {
    constructor(
        protected domUtility : DomUtility ,
        protected teleportToMiddleListener : ScrollToMiddle ,
        protected teleportToHomeListener : ScrollToHome ,
        protected disableButtonSubscribers : DisableButtonSubscribers  ,
        protected enableButtonSubscribers : EnableButtonSubscribers ,
    ){
        super();
    }
    main():void {
        const teleportToMiddleButton : NullOrButtonElement = <HTMLButtonElement> this.domUtility.getTeleportToMiddleButton();
        const teleportToHomeButton : NullOrButtonElement = <HTMLButtonElement>  this.domUtility.getTeleportToHomeButton();

        this.disableButtonSubscribers[0].button = teleportToMiddleButton ;
        this.enableButtonSubscribers[0].button = teleportToMiddleButton ;

        this.disableButtonSubscribers[1].button = teleportToHomeButton ;
        this.enableButtonSubscribers[1].button = teleportToHomeButton ;

        this.teleportToMiddleListener.destinationInformation.before = this.disableButtonSubscribers;
        this.teleportToMiddleListener.destinationInformation.done = this.enableButtonSubscribers;

        this.teleportToHomeListener.destinationInformation.before = this.disableButtonSubscribers ;
        this.teleportToHomeListener.destinationInformation.done = this.enableButtonSubscribers ;

        teleportToMiddleButton.addEventListener('click',this.teleportToMiddleListener.handle);
        teleportToHomeButton.addEventListener('click',this.teleportToHomeListener.handle);
    }
}
export default Program;