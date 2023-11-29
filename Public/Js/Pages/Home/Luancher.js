import Program from "./Program.js";
import DomUtility from "../../Service/DomUtility.js";
import Scroll from "../../Service/Scroll.js";
import ScrollToMiddle from "../../Listeners/ScrollToMiddle.js";
import ScrollToHome from "../../Listeners/ScrollToHome.js";
import DisableButton from "../../Subscribers/DisableButton.js";
import EnableButton from "../../Subscribers/EnableButton.js";
const domUtility = new DomUtility();
const scrollService = new Scroll(window.document.scrollingElement);
const scrollToMiddleListener = new ScrollToMiddle(scrollService);
const scrollToHomeListener = new ScrollToHome(scrollService);
const disableButtonSubscribers = [new DisableButton, new DisableButton];
const enableButtonSubscribers = [new EnableButton, new EnableButton];
const program = new Program(domUtility, scrollToMiddleListener, scrollToHomeListener, disableButtonSubscribers, enableButtonSubscribers);
program.main();
//# sourceMappingURL=Luancher.js.map