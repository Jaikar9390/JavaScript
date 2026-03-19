class mobiles {
  constructor(n, p, r) {
    this.name = n;
    this.price = p;
    this.ram = r;
  }
  set priceSet(p) {
    if (p <= 0) {
      alert("price cannot be less than 0");
    } else {
      this.price = p;
    }
  }
}
let m1 = new mobiles("samsung F14", "6gb");
let m2 = new mobiles("samsung A20", "6gb");

console.log(m1);
console.log(m2);
