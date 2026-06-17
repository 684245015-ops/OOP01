let Groseincome: number = 50000;
let Taxpay: number = Groseincome*0.07;
let aftertax: number = Groseincome-Taxpay;

console.log ("----- Tax Calculation Report-----");
console.log ("Groseincome income %d",Groseincome);
console.log ("Taxrate : 7%");
console.log ("Taxpain : %d", Taxpay);
console.log ("Net Income after Tax : $%d",aftertax);
console.log ("---------------------------------");