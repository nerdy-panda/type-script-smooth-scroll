import Subscriber from "../../Subscriber.js";
interface ButtonWorker extends  Subscriber {
    get button():HTMLButtonElement;
    set button(button : HTMLButtonElement);
}
export default ButtonWorker;


