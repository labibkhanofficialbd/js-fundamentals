

var gotJob = false;
var moneySaved = 150000;
var hasFlat = false;
var hasHouse = true

if(gotJob == true && moneySaved > 200000 && hasFlat == true){
    console.log('Cholo biya kori!!');
}
else{
    console.log('Tor kopale biya nai!!!')
}

if(gotJob == true || moneySaved > 200000){
    console.log('Cholo biya kori!!');
}
else{
    console.log('Tor kopale biya nai!!!')
}

if((gotJob == true || moneySaved > 200000) || hasHouse == true){
    console.log('Cholo biya kori!!');
}
else{
    console.log('Tor kopale biya nai!!!')
}