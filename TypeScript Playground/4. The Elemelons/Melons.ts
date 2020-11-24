export abstract class Melon {
  public weight: number;
  public melonSort: string;
  constructor(weight: number, melonSort: string) {
    this.weight = weight;
    this.melonSort = melonSort;
  }
  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }
}

export class Watermelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
  toString(): string {
    return (
      `Element: Water` +
      `\r\n` +
      `Sort: ${this.melonSort}` +
      `\r\n` +
      `Element Index: ${this.elementIndex}`
    );
  }
}

export class Firemelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
  toString(): string {
    return (
      `Element: Fire` +
      `\r\n` +
      `Sort: ${this.melonSort}` +
      `\r\n` +
      `Element Index: ${this.elementIndex}`
    );
  }
}
export class Earthmelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
  toString(): string {
    return (
      `Element: Earth` +
      `\r\n` +
      `Sort: ${this.melonSort}` +
      `\r\n` +
      `Element Index: ${this.elementIndex}`
    );
  }
}
export class Airmelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
  toString(): string {
    return (
      `Element: Air` +
      `\r\n` +
      `Sort: ${this.melonSort}` +
      `\r\n` +
      `Element Index: ${this.elementIndex}`
    );
  }
}

export class Melolemonmelon extends Watermelon {
  private element = [`Fire`, `Earth`, `Air`, `Water`];
  constructor(weight: number) {
    super(weight, `Water`);
  }

  morph(): string {
    let el = this.element.shift();
    this.element.push(el);
    return el;
  }
}

// const w: Watermelon = new Watermelon(100, "Test");
// console.log( w.elementIndex);

// const f: Firemelon = new Firemelon(100, "test");
// console.log(f.elementIndex);

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

const m: Melolemonmelon = new Melolemonmelon(10);
console.log(m.morph());
console.log(m.morph());
console.log(m.morph());
console.log(m.morph());
console.log(m.morph());
