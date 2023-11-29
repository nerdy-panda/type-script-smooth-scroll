import {default as Contract} from "../Contracts/Service/Scroll.js";
import ScrollInformation from "../Contracts/Service/ScrollInformation.js";
import Subscriber from "../Contracts/Subscriber.js";

class Scroll implements Contract {
    constructor(public readonly scrollElement : Element){}
    current(): number {
        return window.scrollY;
    }
    length(): number {
        const scrollElementWithInnerHeight :number = this.scrollElement.scrollHeight;
        const innerHeight : number = window.innerHeight;
        return scrollElementWithInnerHeight - innerHeight ;
    }
    middle(): number {
        return this.length() / 2 ;
    }
    smoothTo(scrollInformation : ScrollInformation ):void {
        const current:number = Math.round(this.current());
        const destination:number = scrollInformation.destination;

        if(current<destination)
            this.smoothTopToDown(scrollInformation);
        else if (current>destination)
            this.smoothDownToTop(scrollInformation);
    }
    smoothTopToDown(scrollInformation:ScrollInformation) {
        const timeout = scrollInformation.timeout ;
        window.setTimeout(this.smoothTopToDownHandler, timeout , scrollInformation);
    }
    protected smoothTopToDownHandler = (scrollInformation:ScrollInformation) :void =>{
        const current:number = this.current();
        const destination:number = scrollInformation.destination;
        if (current==destination)
            return;

        scrollInformation.before?.forEach(
            (subscriber : Subscriber):void => subscriber.handle()
        );
        const step : number = scrollInformation.step ;
        const nextPosition = current + step ;

        if (nextPosition >= destination ){
            window.scrollTo(0,destination);
            scrollInformation.done?.forEach(
                (subscriber : Subscriber):void => subscriber.handle()
            );
            return ;
        }
        window.scrollBy(0,step);
        if (scrollInformation.before!== undefined ){
            const newInformation :ScrollInformation = Object.assign<{},ScrollInformation>({},scrollInformation);
            delete newInformation.before;
            this.smoothTopToDown(newInformation);
            return ;
        }

        this.smoothTopToDown(scrollInformation);
    }
    smoothDownToTop(scrollInformation : ScrollInformation):void {
        const timeout = scrollInformation.timeout ;
        window.setTimeout(this.smoothDownToTopHandler,timeout,scrollInformation)
    }
    protected smoothDownToTopHandler = (scrollInformation:ScrollInformation) :void => {
        const current : number = this.current();
        const destination : number = scrollInformation.destination ;

        if(current===destination)
            return;

        scrollInformation.before?.forEach(
            (subscriber:Subscriber):void => subscriber.handle()
        );
        const step : number = scrollInformation.step ;
        const nextPosition :number = current - step ;

        if(nextPosition<=destination){
            window.scrollTo(0,destination);
            scrollInformation.done?.forEach(
                (subscriber : Subscriber):void => subscriber.handle()
            );
            return ;
        }
        
        window.scrollTo(0,nextPosition);
        if (scrollInformation.before!== undefined ){
            const newInformation :ScrollInformation = Object.assign<{},ScrollInformation>({},scrollInformation);
            delete newInformation.before;
            this.smoothDownToTop(newInformation);
            return ;
        }
        this.smoothDownToTop(scrollInformation);
    } 
}
export default Scroll;