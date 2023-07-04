var ConcreteSubject = /** @class */ (function () {
    function ConcreteSubject() {
        //List of observers
        this.observerList = [];
    }
    //Wrapper functions for each of the methods in Subject
    ConcreteSubject.prototype.subscribe = function (observer) {
        this.observerList.push(observer);
    };
    ConcreteSubject.prototype.unsubscribe = function (observer) {
        this.observerList = this.observerList.filter(function (ele) {
            return ele.id !== observer.id;
        });
    };
    ConcreteSubject.prototype.notify = function (text) {
        this.observerList.forEach(function (obs) {
            obs.update(text);
        });
    };
    return ConcreteSubject;
}());
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(id) {
        this.id = id;
        this.allTexts = [];
    }
    ConcreteObserver.prototype.update = function (text) {
        this.allTexts.push(text);
        console.log("Text sent to  ".concat(this.id, " - ").concat(text));
    };
    ConcreteObserver.prototype.showTexts = function () {
        console.log("Text - ".concat(this.allTexts));
    };
    return ConcreteObserver;
}());
var firstObserver = new ConcreteObserver('VP');
var secondObserver = new ConcreteObserver('AP');
var subject = new ConcreteSubject();
subject.subscribe(firstObserver);
subject.subscribe(secondObserver);
subject.notify('Hello TS');
subject.unsubscribe(firstObserver);
subject.notify('You getting better');
firstObserver.showTexts();
secondObserver.showTexts();
