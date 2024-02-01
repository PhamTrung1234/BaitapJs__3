


const numarr = [];

function getID(id){
    return document.getElementById(id);
}
function main(){
    let number = getID('inputnum').value;
    
    numarr.push(number)
    getID('txtinso').innerHTML = numarr
}

function tongduong(){
    let total = 0;
    for(let i =0;i<numarr.length;i++){
          if(numarr[i]>=0){
            total += Number(numarr[i]); 
          }
    }
    getID('txtinhtong').innerHTML = "tổng số dương trong mảng là : "+total
}
function demso(){
    let counts = 0;
    for(let i=0;i<numarr.length;i++){
        if(numarr[i]>=0){
            counts++;
        }
    }
    getID('txtdemso').innerHTML = "số các số dương trong mảng là : "+ counts;
}
function sonhonhat(){
    let min1 = numarr[0];
    for(let i=0;i<numarr.length;i++){
        if(min1>Number(numarr[i])){
            min1 = numarr[i];
        }
    }
    getID('txtmin').innerHTML = "số nhỏ nhất trong mảng là : " + min1;
}
function minduong(){
    let duongarr = [];
    
    for(let i=0;i<numarr.length;i++){
        if(numarr[i]>=0){
            duongarr.push(numarr[i])
        }
    }
    let minduong = duongarr[0]
    for(let j=0;j<duongarr.length;j++){
         if(minduong>=duongarr[j]){
              minduong = duongarr[j];
         }
    }
    getID('txtminduong').innerHTML = "số dương nhỏ nhất trong mảng là : " + minduong
}
function chanend(){
    let chan = [];
    let counts = 0;
    for(let i=0;i<numarr.length;i++){
        if(numarr[i]%2 ==0){
            chan.push(numarr[i])
            counts++;
        }
    }
    if(counts==0){
        getID('txtchanend').innerHTML = '-1'
    }else{
    let chanend = chan[chan.length-1]; 
    getID('txtchanend').innerHTML = "số chẵn cuối cùng trong mảng là : " + chanend;
    }
}

function doicho(){
    let vitri1 = Number(getID('input1').value);
    let vitri2 = Number(getID('input2').value);
    let temp = 0;
    temp = numarr[vitri1-1];
    numarr[vitri1-1] = numarr[vitri2-1];
    numarr[vitri2-1] = temp;
    getID('txtdoicho').innerHTML = "mảng thay đổi là : " + numarr
}

function sapxep(){
    for(let i=0;i<numarr.length-1;i++){
        for(let j=i+1;j<numarr.length;j++){
            if(Number(numarr[i])>Number(numarr[j])){
               
               let temp = numarr[i];
                numarr[i] = numarr[j]
                numarr[j] = temp;
            }
        }
    }
    getID('txtup').innerHTML = "mảng sau khi được sắp xếp : " + numarr
}


function nguyentodau(){
    
    let nguyenarr = [];
    let counts =0;
    for(let i =0;i<numarr.length;i++){
       if(Number(numarr[i])<=1){
        numarr[i]++;
       }else if(Number(numarr[i])==2 || Number(numarr[i])== 3){
        nguyenarr.push(numarr[i])
            counts++;
       }
       else{
        if(numarr[i]%2 ==0 || numarr[i%3 ==0]){
            numarr[i]++
        }else{
            nguyenarr.push(numarr[i])
            counts++;
        }
    }
    }
    if(counts==0){
        getID('txtnguyentodau').innerHTML = "-1" 
    }else{
     getID('txtnguyentodau').innerHTML = "số nguyên tố đầu tiên là : " + nguyenarr[0]   
    }
    
}




let nguyenarr = [];
function mang(){
    let num = getID('inputnum1').value;
    nguyenarr.push(num);
    getID('txtmang').innerHTML = nguyenarr;
}

function demsonguyen(){
    let conuts = 0 ;
    for(let i=0;i<nguyenarr.length;i++){
        if(Number.isInteger(Number(nguyenarr[i]))){
            conuts++;
        }
    }
   
    getID('txtsonguyen').innerHTML = "số nguyên : " + conuts;
}



function sosanh(){
    let am = 0;
    let duong =0;
    for(let i=0;i<numarr.length;i++){
        if(Number(numarr[i])>0){
            duong++;
        }else{
            am++;
        }
    }
    if(am > duong){
        getID('txtsosanh').innerHTML = "số âm > số dương"
    }else if(am < duong){
        getID('txtsosanh').innerHTML = "số âm < số dương"
    }else{
        getID('txtsosanh').innerHTML = "số âm = số dương"
    }
}


let listitem = document.querySelectorAll('#ftn ul li>input');
let switch_mode = document.querySelectorAll('.form__icon');

for(let i=0;i<listitem.length;i++){
    listitem[i].onclick = function(){ 
      switch_mode[i].classList.toggle('fa-angle-up')
      switch_mode[i].classList.toggle('fa-angle-down')
    }
}