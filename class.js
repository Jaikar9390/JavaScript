class mobiles {
  constructor(n, p, r) {
    this.name = n;
    this.price = p;
    this.ram = r;
  }
  updateRam(uram) {
    this.ram = uram;
  }
}
let m1 = new mobiles("samsung F14", 12000, "6gb");
let m2 = new mobiles("samsung A20", 20000, "6gb");
m2.updateRam("8gb");
console.log(m1);
console.log(m2);
