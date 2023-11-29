import {default as Contract} from "../Contracts/Subscribers/DisableButton.js";
import ButtonWorker from "../Service/Subscribers/ButtonWorker.js";

class DisableButton extends ButtonWorker implements Contract {
    override handle(): void {
        this.button.disabled = true;
    }

}
export default DisableButton;