import { STEP, TIMEOUT, STEP_ATTRIBUTE_NAME, TIMEOUT_ATTRIBUTE_NAME } from "../../Config/App.js";
class Program {
    constructor(domUtility, scrollService) {
        this.domUtility = domUtility;
        this.scrollService = scrollService;
        this.navLinkListener = (event) => {
            console.log(Program.canDispatch);
            if (!Program.canDispatch)
                return;
            let step = STEP;
            let timeout = TIMEOUT;
            const navLink = event.currentTarget;
            const destinationSelector = navLink.getAttribute("data-scroll-to");
            const destinationElement = window.document.body.querySelector(destinationSelector);
            const destination = destinationElement.offsetTop - 75;
            if (navLink.hasAttribute(STEP_ATTRIBUTE_NAME))
                step = parseInt(navLink.getAttribute(STEP_ATTRIBUTE_NAME));
            if (navLink.hasAttribute(TIMEOUT_ATTRIBUTE_NAME))
                timeout = parseInt(navLink.getAttribute(TIMEOUT_ATTRIBUTE_NAME));
            const destinationInformation = {
                destination: destination, step: step, timeout: timeout,
                before: [
                    { handle() {
                            Program.canDispatch = false;
                        }, }
                ],
                done: [
                    { handle() {
                            Program.canDispatch = true;
                        }, }
                ]
            };
            this.scrollService.smoothTo(destinationInformation);
        };
    }
    main() {
        const navLinks = window.document.body.querySelectorAll("nav a");
        for (const navLink of navLinks)
            navLink.addEventListener('click', this.navLinkListener);
    }
}
Program.canDispatch = true;
export default Program;
//# sourceMappingURL=Program.js.map