import {default as Contract} from "../Contracts/Subscriber.js";
abstract class Subscriber implements Contract {
    abstract handle(): void;
}
export default Subscriber;