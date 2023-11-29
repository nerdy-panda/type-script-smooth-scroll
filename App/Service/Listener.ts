import {default as Contract } from "../Contracts/Listener.js";
abstract class Listener implements Contract {
    abstract handle(event: Event): void;
}
export default Listener;