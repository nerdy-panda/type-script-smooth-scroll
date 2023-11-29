import {default as Contract} from "../Contracts/Service/DomUtility.js";
import {NullOrButtonElement} from "../Types/Dom";

class DomUtility implements Contract {
    getTeleportToMiddleButton(): NullOrButtonElement {
        const buttonId:string = "teleport-to-middle";
        return <NullOrButtonElement> window.document.getElementById(buttonId);
    }
    getTeleportToHomeButton(): NullOrButtonElement {
        const buttonID : string = "teleport-to-home";
        return <NullOrButtonElement> window.document.getElementById(buttonID);
    }
    
}
export default DomUtility;