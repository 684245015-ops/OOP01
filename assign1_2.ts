// ข้อมูลหนังสือ
let bookTitle: string = "TypeScript Programming";
let isbn: string = "978-1234567890";
let price: number = 700;

// Tuple
let bookData: [string, number] = [bookTitle, price];

// สถานะสินค้า
let isAvailable: boolean = true;

// คำนวณราคาหลังลด 15%
let discountPrice: number = price - (price * 15 / 100);

// ตรวจสอบว่าเป็นหนังสือ Premium หรือไม่
let isPremium: boolean = discountPrice > 500;

// ตรวจสอบว่าสามารถจัดส่งได้หรือไม่
let canShip: boolean = isPremium && isAvailable;

// แสดงผล
console.log(`ชื่อหนังสือ: ${bookData[0]}`);
console.log(`ISBN: ${isbn}`);
console.log(`ราคาเดิม: ${price} บาท`);
console.log(`ราคาหลังลด: ${discountPrice} บาท`);
console.log(`Premium: ${isPremium}`);
console.log(`พร้อมจำหน่าย: ${isAvailable}`);
console.log(`สามารถจัดส่งได้: ${canShip}`);