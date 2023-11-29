import ButtonWorker from "../Service/Subscribers/ButtonWorker.js";
class EnableButton extends ButtonWorker {
    handle() {
        this.button.disabled = false;
    }
}
export default EnableButton;
//# sourceMappingURL=EnableButton.js.map