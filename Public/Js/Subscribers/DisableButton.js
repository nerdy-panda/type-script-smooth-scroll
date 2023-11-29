import ButtonWorker from "../Service/Subscribers/ButtonWorker.js";
class DisableButton extends ButtonWorker {
    handle() {
        this.button.disabled = true;
    }
}
export default DisableButton;
//# sourceMappingURL=DisableButton.js.map