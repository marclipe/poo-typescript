//Composition is a principle that allows complex objects to be built from simpler objects or components.
class Processor {
  constructor(private model: string) {}

  getDetails() {
    return `Processor: ${this.model}`;
  }
}

class Memory {
  constructor(private capacity: number) {}

  getDetails() {
    return `Memory ${this.capacity} GB`;
  }
}

class StorageComputer {
  constructor(private type: string, private capacity: number) {}

  getDetails() {
    return `Storage ${this.capacity} GB ${this.type} drive`;
  }
}

class Computer {
  private processor: Processor;
  private memory: Memory;
  private storage: StorageComputer;

  constructor(
    processorModel: string,
    memoryCapacity: number,
    storageType: string,
    storageCapacity: number
  ) {
    this.processor = new Processor(processorModel);
    this.memory = new Memory(memoryCapacity);
    this.storage = new StorageComputer(storageType, storageCapacity);
  }

  getComputerDetails() {
    return `${this.processor.getDetails()}, ${this.memory.getDetails()}, ${this.storage.getDetails()}`;
  }
}

const myComputer = new Computer("AMD Ryzen 5", 16, "HDD", 1);
console.log(myComputer.getComputerDetails());
console.log(
  "=============//=============//=============//=============//=============//=============//"
);
const myPc = new Computer("Intel i9", 32, "SSD", 1);
console.log(myPc.getComputerDetails());
console.log(
  "=============//=============//=============//=============//=============//=============//"
);
const laptop = new Computer("Intel i3 core", 6, "HDD", 500);
console.log(laptop.getComputerDetails());
console.log(
  "=============//=============//=============//=============//=============//=============//"
);
const pcGamer = new Computer("AMD Rizen 6", 32, "SSD", 500);
console.log(pcGamer.getComputerDetails());