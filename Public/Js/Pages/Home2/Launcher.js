import Program from "./Program.js";
import DomUtility from "../../Service/DomUtility.js";
import Scroll from "../../Service/Scroll.js";
const domService = new DomUtility();
const scrollService = new Scroll(window.document.scrollingElement);
const program = new Program(domService, scrollService);
program.main();
//# sourceMappingURL=Launcher.js.map