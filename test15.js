//3. have parameters, has return
function sumNumber(n1, n2) {
    return n1 + n2
}


function showHelleAndbye(fname, lname) {
    console.log(`สวัสดีคุณ ${fname} ${lname}`)
    return (`ลาก่อน ${fname} ${lname}`)
}

console.log(`10 + 20 = ${sumNumber(10, 20)}`)

console.log(showHelleAndbye('Somjai', 'Sombat'))