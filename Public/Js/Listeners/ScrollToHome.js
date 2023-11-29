import ScrollTo from "../Service/Listeners/ScrollTo.js";
class ScrollToHome extends ScrollTo {
    constructor() {
        super(...arguments);
        this.destinationInformation = {
            destination: 0, step: 6, timeout: 4,
        };
        this.handle = (event) => {
            this.scroll.smoothTo(this.destinationInformation);
        };
    }
}
export default ScrollToHome;
//# sourceMappingURL=ScrollToHome.js.map