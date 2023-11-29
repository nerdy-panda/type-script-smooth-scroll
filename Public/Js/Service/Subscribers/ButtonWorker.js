import Subscriber from "../Subscriber.js";
class ButtonWorker extends Subscriber {
    constructor() {
        super(...arguments);
        this._button = null;
    }
    buttonProxy() {
        if (this._button == null)
            throw "you should first set button and then use it !!!";
        return this._button;
    }
    get button() {
        return this.buttonProxy();
    }
    set button(button) {
        this._button = button;
    }
}
export default ButtonWorker;
//# sourceMappingURL=ButtonWorker.js.map