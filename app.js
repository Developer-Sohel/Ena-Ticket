

let  count = 40;
let seatIncrement = 0;

const allBtn = document.getElementsByClassName('btn');
for(const btns of allBtn){
    btns.addEventListener('click', function(e){
     if(btns>=4){
        alert('hfghf')
     }
        if(count>0){
            count -- ;
        }
      
     seetInnarText('seetCount' ,count)
    
     if(seatIncrement<40){
        seatIncrement ++;
     }
       seetInnarText('seetIncrement', seatIncrement )
        btns.style.backgroundColor = "green";
     
        const seetNumber =(e.target.innerText);
        const seetName = document.getElementById('seetName');
        const h1 = document.createElement("h1");
        h1.innerText = seetNumber;
      
        seetName.appendChild(h1)

      
        const classNmae = document.getElementById('classNmae');
        const h2 =  document.createElement('h2');
        h2.innerHTML = 'Economoy'
        classNmae.appendChild(h2)

        const seatPrice = document.getElementById('seatPrice');
        const h3 = document.createElement('h3');
        h3.innerHTML = '500'
        seatPrice.appendChild(h3)

        const total = document.getElementById('totalprice').innerText;

       const convertMoney = parseInt(total);
       document.getElementById('totalprice').innerText = convertMoney + parseInt(500);
     
     

       
    })
}


function seetInnarText(id , value){
    // seetCount.innerText=count;
    document.getElementById(id).innerText = value;
 

}

const nextbtn = document.getElementById('nextbtn');

nextbtn.addEventListener('click', function(){
    const popup = document.getElementById('popup');
    popup.remove(this.remove)


})
// Applu Coupon





