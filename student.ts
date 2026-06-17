let fname : string = "Pattaraporn";
let lname: string = "Sangjan";
let course: string[] = ["Database","OOP" , "web"];
let mark: number[] = [80, 75 , 65];
let pass: boolean = true;

console.log("Hello %s %s",fname,lname, );
console.log("ลงทะเบียนเรียนวิชา",course);
console.log ("ได้คะแนน",mark);
console.log("คุณสอบผ่าน",pass);

console.log("คุณสอบได้ %d คะแนน วิชา %s",mark[0],course[0]);

let mark1: number=75;
let mark2: number=80;
let mark3: number=65;

let total: number= mark[0]+mark[1]+mark[2];
let avg: number=total/3;
console.log ("คะแนนรวม",total);
console.log ("คะแนนเฉลี่ย",avg);