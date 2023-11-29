class Scroll {
    constructor(scrollElement) {
        this.scrollElement = scrollElement;
        this.smoothTopToDownHandler = (scrollInformation) => {
            var _a, _b;
            const current = this.current();
            const destination = scrollInformation.destination;
            if (current == destination)
                return;
            (_a = scrollInformation.before) === null || _a === void 0 ? void 0 : _a.forEach((subscriber) => subscriber.handle());
            const step = scrollInformation.step;
            const nextPosition = current + step;
            if (nextPosition >= destination) {
                window.scrollTo(0, destination);
                (_b = scrollInformation.done) === null || _b === void 0 ? void 0 : _b.forEach((subscriber) => subscriber.handle());
                return;
            }
            window.scrollBy(0, step);
            if (scrollInformation.before !== undefined) {
                const newInformation = Object.assign({}, scrollInformation);
                delete newInformation.before;
                this.smoothTopToDown(newInformation);
                return;
            }
            this.smoothTopToDown(scrollInformation);
        };
        this.smoothDownToTopHandler = (scrollInformation) => {
            var _a, _b;
            const current = this.current();
            const destination = scrollInformation.destination;
            if (current === destination)
                return;
            (_a = scrollInformation.before) === null || _a === void 0 ? void 0 : _a.forEach((subscriber) => subscriber.handle());
            const step = scrollInformation.step;
            const nextPosition = current - step;
            if (nextPosition <= destination) {
                window.scrollTo(0, destination);
                (_b = scrollInformation.done) === null || _b === void 0 ? void 0 : _b.forEach((subscriber) => subscriber.handle());
                return;
            }
            window.scrollTo(0, nextPosition);
            if (scrollInformation.before !== undefined) {
                const newInformation = Object.assign({}, scrollInformation);
                delete newInformation.before;
                this.smoothDownToTop(newInformation);
                return;
            }
            this.smoothDownToTop(scrollInformation);
        };
    }
    current() {
        return window.scrollY;
    }
    length() {
        const scrollElementWithInnerHeight = this.scrollElement.scrollHeight;
        const innerHeight = window.innerHeight;
        return scrollElementWithInnerHeight - innerHeight;
    }
    middle() {
        return this.length() / 2;
    }
    smoothTo(scrollInformation) {
        const current = Math.round(this.current());
        const destination = scrollInformation.destination;
        if (current < destination)
            this.smoothTopToDown(scrollInformation);
        else if (current > destination)
            this.smoothDownToTop(scrollInformation);
    }
    smoothTopToDown(scrollInformation) {
        const timeout = scrollInformation.timeout;
        window.setTimeout(this.smoothTopToDownHandler, timeout, scrollInformation);
    }
    smoothDownToTop(scrollInformation) {
        const timeout = scrollInformation.timeout;
        window.setTimeout(this.smoothDownToTopHandler, timeout, scrollInformation);
    }
}
export default Scroll;
//# sourceMappingURL=Scroll.js.map