import Subscriber from "../Contracts/Subscriber.js";
import DisableButton from "../Contracts/Subscribers/DisableButton.js";
import EnableButton from "../Contracts/Subscribers/EnableButton.js";

type Subscribers = Subscriber[];

type DisableButtonSubscribers  = [ DisableButton , DisableButton ];
type EnableButtonSubscribers  = [ EnableButton , EnableButton ];
type NullOrString = null|string;

export {Subscribers , DisableButtonSubscribers , EnableButtonSubscribers , NullOrString };