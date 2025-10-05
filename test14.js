//3. no parameter has return
function showHelle() {
    return 'Hello...';
}

function showSmile() {
    console.log("SMILE");
    return "^_^";
}

function showSad() {
    console.log("SAD");
    return "T_T";
}   

console.log( showHelle() );
console.log( showSmile() );
let data = showSad();