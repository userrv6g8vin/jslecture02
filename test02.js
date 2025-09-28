//identifier คือ ชื่อที่ dev ตั้งขึ้นมาเอง (ตัวแปร, ฟังชั่น , ค่าคงที่, คลาส, ออปเจ็กส์) ต้องเป็นไปตามกฎการตั้งชื่อ
//ไม่เว้นวรรค ไม่ขึ้นต้นด้วยตัวเลข ไม่ใช้คำสงวน/คำสัญ(reserved word/keyword)
//- ไม่ใช้สัญญลักษณ์พิเศษ ยกเว้น _ , $
//-ควรตั้งเป็น pascal Case, Camel Case, Snake Case
//-   StudenScore, StudentScore, student_score/student_score

//code bloack คือขอบเชตของโปรแกรม เขียนอยู่ภายใต้ { }

//variable ตัวแปรคือ ชื่อที่ dev ตั้งขึ้นมาเอง เอาไว้เก็บข้อมูลที่เกิดขึ้นในโปรแกรม
var dti01 = 'aaa'  //แก้ไขได้
let dti02 = 'bbb'   //แก้ไขได้
const dti03 = 'ccc' //ไม่แก้ไขได้

dti01 = '111'
dti02 = '222'
//dti02 = '333'
{
    var dti04 = 'ddd' 
    let dti05 = 'eee'
    const dti06 = 'fff' 
    console.log(dti01, dti02, dti03, dti04, dti05, dti06)
}

console.log(dti01, dti02, dti03, dti04)