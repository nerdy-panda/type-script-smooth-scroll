import Program from "./Program.js";
import { default as DomUtilityContract } from "../../Contracts/Service/DomUtility.js";
import DomUtility from "../../Service/DomUtility.js";
import {default as ScrollServiceContract} from "../../Contracts/Service/Scroll.js";
import Scroll from "../../Service/Scroll.js";
import {default as ScrollToMiddleContract} from "../../Contracts/Listeners/ScrollToMiddle.js";
import ScrollToMiddle from "../../Listeners/ScrollToMiddle.js";
import {default as ScrollToHomeContract} from "../../Contracts/Listeners/ScrollToHome.js";
import ScrollToHome from "../../Listeners/ScrollToHome.js";
import {DisableButtonSubscribers, EnableButtonSubscribers} from "../../Types/Utilities.js";
import DisableButton from "../../Subscribers/DisableButton.js";
import EnableButton from "../../Subscribers/EnableButton.js";




const domUtility : DomUtilityContract = new DomUtility();
const scrollService : ScrollServiceContract = new Scroll( <Element> window.document.scrollingElement );

const scrollToMiddleListener : ScrollToMiddleContract = new ScrollToMiddle(scrollService);
const scrollToHomeListener : ScrollToHomeContract = new ScrollToHome(scrollService);

const disableButtonSubscribers : DisableButtonSubscribers = [new DisableButton,new DisableButton];
const enableButtonSubscribers : EnableButtonSubscribers = [new EnableButton , new EnableButton ];

const program : Program = new Program(
    domUtility , scrollToMiddleListener , scrollToHomeListener ,  disableButtonSubscribers , enableButtonSubscribers
);
program.main();
