class Telephone {
  constructor() {
    this.phoneStore = new Set();
    this.observerStore = new Set();
  }

  addPhoneNumber(phoneNumber) {
    this.phoneStore.add(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    this.phoneStore.delete(phoneNumber);
  }

  dialPhoneNumber(number) {
    if (this.phoneStore.has(number)) {
      // console.log(`${number}`);
      this.notifyObserver(`${number}\n
      Now dialing ${number}\n`);
    } else {
      this.notifyObserver(`${number} does not exist on store.`);
    }
  }

  addObserver(observer) {
    this.observerStore.add(observer);
  }

  removeObserver(observer) {
    this.observerStore.delete(observer);
  }

  notifyObserver(info) {
    for (const notice of this.observerStore) {
      notice.update(info);
    }
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(info) {
    console.log(`${this.name} : ${info}`);
  }
}

const telephone = new Telephone();
const cj = new Observer("cj");
const kings = new Observer("kings");

let numberOne = 2347022232679;
let numberTwo = 2347023232;

telephone.addPhoneNumber(numberOne);

telephone.addObserver(cj);
telephone.addObserver(kings);

telephone.dialPhoneNumber(numberOne);
telephone.dialPhoneNumber(numberTwo);
