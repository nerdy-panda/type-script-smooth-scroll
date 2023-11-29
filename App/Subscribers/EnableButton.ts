import {default as Contract} from "../Contracts/Subscribers/EnableButton.js";
import ButtonWorker from "../Service/Subscribers/ButtonWorker.js";

class EnableButton extends ButtonWorker implements Contract {
    override handle() {
        this.button.disabled = false;
    }
}

export default EnableButton;