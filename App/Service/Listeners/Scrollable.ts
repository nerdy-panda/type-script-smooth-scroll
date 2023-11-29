import {default as Contract } from "../../Contracts/Service/Listeners/Scrollable.js";
import Scroll from "../../Contracts/Service/Scroll.js";
import Listener from "../Listener.js";

abstract class Scrollable extends Listener implements Contract {
    constructor(protected scroll:Scroll){
        super();
    }
}

export default Scrollable;