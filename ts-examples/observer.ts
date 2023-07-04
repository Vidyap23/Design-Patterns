interface News{
  subscribe(observer: Observer):void
  unsubscribe(observer: Observer):void
  notify(text: string):void
}

interface Observer{
  id: string
  update(text: string):void
}

class ConcreteSubject implements News{
	//List of observers
	private observerList: Observer[] = []

	//Wrapper functions for each of the methods in Subject
	subscribe(observer: Observer): void {
		this.observerList.push(observer)
	}

	unsubscribe(observer: Observer): void {
		this.observerList = this.observerList.filter((ele)=>{
           return ele.id !== observer.id
		})
	}

	notify(text: string):void {
		this.observerList.forEach((obs)=>{
            obs.update(text)
		})
	}  
}

class ConcreteObserver implements Observer{
	private allTexts :string[] = []; 
	constructor(public readonly id: string){}
    update(text: string): void {
		this.allTexts.push(text)
		console.log(`Text sent to  ${this.id} - ${text}`)
	}
	showTexts (){
          console.log(`Text - ${this.allTexts}`)
		
	}
}

const firstObserver = new ConcreteObserver('VP');
const secondObserver = new ConcreteObserver('AP');

const subject = new ConcreteSubject();

subject.subscribe(firstObserver);
subject.subscribe(secondObserver);
subject.notify('Hello TS');
subject.unsubscribe(firstObserver)
subject.notify('You getting better');
firstObserver.showTexts();
secondObserver.showTexts();
