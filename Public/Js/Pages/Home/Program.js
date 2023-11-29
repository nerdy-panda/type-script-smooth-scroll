import { default as ProgramBase } from "../../Service/Pages/Program.js";
class Program extends ProgramBase {
    constructor(domUtility, teleportToMiddleListener, teleportToHomeListener, disableButtonSubscribers, enableButtonSubscribers) {
        super();
        this.domUtility = domUtility;
        this.teleportToMiddleListener = teleportToMiddleListener;
        this.teleportToHomeListener = teleportToHomeListener;
        this.disableButtonSubscribers = disableButtonSubscribers;
        this.enableButtonSubscribers = enableButtonSubscribers;
    }
    main() {
        const teleportToMiddleButton = this.domUtility.getTeleportToMiddleButton();
        const teleportToHomeButton = this.domUtility.getTeleportToHomeButton();
        this.disableButtonSubscribers[0].button = teleportToMiddleButton;
        this.enableButtonSubscribers[0].button = teleportToMiddleButton;
        this.disableButtonSubscribers[1].button = teleportToHomeButton;
        this.enableButtonSubscribers[1].button = teleportToHomeButton;
        this.teleportToMiddleListener.destinationInformation.before = this.disableButtonSubscribers;
        this.teleportToMiddleListener.destinationInformation.done = this.enableButtonSubscribers;
        this.teleportToHomeListener.destinationInformation.before = this.disableButtonSubscribers;
        this.teleportToHomeListener.destinationInformation.done = this.enableButtonSubscribers;
        teleportToMiddleButton.addEventListener('click', this.teleportToMiddleListener.handle);
        teleportToHomeButton.addEventListener('click', this.teleportToHomeListener.handle);
    }
}
export default Program;
//# sourceMappingURL=Program.js.map