//angka
let satu = document.getElementById("1");
let dua = document.getElementById("2");
let tiga = document.getElementById("3");
let empat = document.getElementById("4");
let lima = document.getElementById("5");
let enam = document.getElementById("6");
let tujuh = document.getElementById("7");
let delapan = document.getElementById("8");
let sembilan = document.getElementById("9");
let kosong = document.getElementById("0");
//operator
let tambah = document.getElementById("tambah");
let kurang = document.getElementById("kurang");
let bagi = document.getElementById("bagi");
let kali = document.getElementById("kali");
let layarr = document.getElementById("layarr");
let samadengan = document.getElementById("samadengan");
let clear = document.getElementById("clear");
let hapus = document.getElementById("hapus");


let currentValue = 0;
let simpanDulu = 0;
let operator ='';


console.log('satu', satu)

satu.addEventListener('click', function(){
    if(currentValue ===0){
        currentValue = 1;
        layarr.value = 1;
    }else{
        currentValue = currentValue + "1";
        layarr.value = currentValue;

    }
});
dua.addEventListener('click', function(){
    if(currentValue ===0){
        currentValue = 2;
        layarr.value = 2;
    }else{
        currentValue = currentValue + "2";
        layarr.value = currentValue;

    }
});
tiga.addEventListener('click', function(){
    if(currentValue ===0){
        currentValue = 3;
        layarr.value = 3;
    }else{
        currentValue = currentValue + "3";
        layarr.value = currentValue;

    }
});
empat.addEventListener('click', function(){
    if(currentValue ===0){
        currentValue = 4;
        layarr.value = 4;
    }else{
        currentValue = currentValue + "4";
        layarr.value = currentValue;

    }
});
lima.addEventListener('click', function(){
    if(currentValue ===0){
        currentValue = 5;
        layarr.value = 5;
    }else{
        currentValue = currentValue + "5";
        layarr.value = currentValue;

    }
});
enam.addEventListener('click', function(){
    if(currentValue ===0){
        currentValue = 6;
        layarr.value = 6;
    }else{
        currentValue = currentValue + "6";
        layarr.value = currentValue;

    }
});
tujuh.addEventListener('click', function(){
    if(currentValue ===0){
        currentValue = 7;
        layarr.value = 7;
    }else{
        currentValue = currentValue + "7";
        layarr.value = currentValue;

    }
});
delapan.addEventListener('click', function(){
    if(currentValue ===0){
        currentValue = 8;
        layarr.value = 8;
    }else{
        currentValue = currentValue + "8";
        layarr.value = currentValue;

    }
});
sembilan.addEventListener('click', function(){
    if(currentValue ===0){
        currentValue = 9;
        layarr.value = 9;
    }else{
        currentValue = currentValue + "9";
        layarr.value = currentValue;

    }
});
kosong.addEventListener('click', function(){
    if(currentValue ===0){
        currentValue = 0;
        layarr.value = 0;
    }else{
        currentValue = currentValue + "0";
        layarr.value = currentValue;

    }
});


tambah.addEventListener('click', function(){
    simpanDulu=currentValue;
    currentValue=0;
    layarr.value=0;
    operator="tambah";
});
kurang.addEventListener('click', function(){
    simpanDulu=currentValue;
    currentValue=0;
    layarr.value=0;
    operator="kurang";
});
bagi.addEventListener('click', function(){
    simpanDulu=currentValue;
    currentValue=0;
    layarr.value=0;
    operator="bagi";
});
kali.addEventListener('click', function(){
    simpanDulu=currentValue;
    currentValue=0;
    layarr.value=0;
    operator="kali";
});


samadengan.addEventListener('click', function(){
    if(operator == "tambah"){
        let total = parseInt(simpanDulu) + parseInt(currentValue);
        layarr.value = total
    }
    if(operator == "kali"){
        let total = parseInt(simpanDulu) * parseInt(currentValue);
        layarr.value = total
    }
    if(operator == "bagi"){
        let total = parseInt(simpanDulu) / parseInt(currentValue);
        layarr.value = total
    }
    if(operator == "kurang"){
        let total = parseInt(simpanDulu) - parseInt(currentValue);
        layarr.value = total
    }

    
})

clear.addEventListener('click', function(){
    currentValue='';
    layarr.value='';
})

hapus.addEventListener('click', function(){
    currentValue=currentValue.substring(0,currentValue.length-1);
    layarr.value=currentValue
})
