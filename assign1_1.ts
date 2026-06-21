let productName: string = "Notebook";
let pricePerUnit: number = 500;
let quantity: number = 3;
let isMember: boolean = true;

// คำนวณราคารวม
let totalPrice: number = pricePerUnit * quantity;

// ตรวจสอบส่วนลด
let hasDiscount: boolean = totalPrice > 1000 || isMember;

// คำนวณราคาสุทธิ
let finalPrice: number;

if (hasDiscount) {
    finalPrice = totalPrice * 0.9; // ลด 10%
} else {
    finalPrice = totalPrice;
}
console.log(`สินค้า: ${productName}`);
console.log(`จำนวน: ${quantity}`);
console.log(`ราคารวม: ${totalPrice} บาท`);
console.log(`ได้รับส่วนลด: ${hasDiscount}`);
console.log(`ราคาที่ต้องจ่ายจริง: ${finalPrice} บาท`);