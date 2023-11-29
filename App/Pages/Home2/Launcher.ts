import {default as ProgramContract} from "../../Contracts/Pages/Home2/Program.js";
import Program from "./Program.js";
import { default as DomUtilityContract } from "../../Contracts/Service/DomUtility.js";
import DomUtility from "../../Service/DomUtility.js";
import { default as ScrollContract } from "../../Contracts/Service/Scroll.js";
import Scroll from "../../Service/Scroll.js";

const domService : DomUtilityContract = new DomUtility();
const scrollService : ScrollContract = new Scroll(<HTMLElement>window.document.scrollingElement);

const program : ProgramContract = new Program(
    domService , scrollService 
);
program.main();
