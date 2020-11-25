class KeyValuePair<T, U> {
  private key: T;
  private value: U;

  public setKeyValuePairs(key: T, value: U) {
    this.key = key;
    this.value = value;
  }

  public display() {
    console.log(`key = ${this.key}, value = ${this.value}`);
  }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValuePairs(1,"Steve");
kvp.display();