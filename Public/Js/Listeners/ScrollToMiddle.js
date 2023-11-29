import ScrollTo from "../Service/Listeners/ScrollTo.js";
class ScrollToMiddle extends ScrollTo {
    constructor() {
        super(...arguments);
        this.destinationInformation = {
            destination: this.scroll.middle(), step: 5, timeout: 8,
        };
        this.handle = (event) => {
            this.scroll.smoothTo(this.destinationInformation);
        };
    }
}
export default ScrollToMiddle;
//# sourceMappingURL=ScrollToMiddle.js.map