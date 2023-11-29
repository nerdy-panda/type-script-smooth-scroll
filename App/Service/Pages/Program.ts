import { default as Contract } from "../../Contracts/Service/Pages/Program.js";
abstract class Program implements Contract {
    abstract main():void;
}
export default Program;