import Subscriber from "../Subscriber.js";
import {default as Contract } from "../../Contracts/Service/Subscribers/ButtonWorker.js";
import { NeverOrButtonElement, NullOrButtonElement } from "../../Types/Dom.js";

abstract class ButtonWorker extends Subscriber implements Contract {
    protected _button : NullOrButtonElement = null ;
    protected buttonProxy():NeverOrButtonElement {
        if(this._button==null)
            throw "you should first set button and then use it !!!";
        return this._button;
    }
    get button():HTMLButtonElement {
        return this.buttonProxy();
    }
    set button(button : HTMLButtonElement){
        this._button = button;
    }
    
}
export default ButtonWorker;