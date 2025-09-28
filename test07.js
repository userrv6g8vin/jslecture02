//swithch พิสูจน์หลายครั้ง
// พิสูจน์ได้เฉพาะ เท่ากันหรือไม่เท่ากัน

let bus_no = 91

switch (bus_no){
    case 84 : console.log('ไปวัดไร่ขิง')
    break
    case 57 : console.log('พาต้า')
    break
    case 123 : console.log('สนามหลวง')
    break
    case 515 : console.log('ไปอนุสาวรีย์')
    break
    default : console.log('ไม่รู้จัก') //default ไม่จําเป็นต้องมี
}