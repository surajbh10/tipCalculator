

const totalset =()=>{
    var totalAmt = document.querySelector('.totalAmt').value;
    var tipAmt = document.querySelector('.tipAmt').value;
    var total = document.querySelector('.total');
    var tip = document.querySelector('.tip');

  let  reqTip = totalAmt*tipAmt/100;
  let value = Number(totalAmt) + Number(reqTip);
    
   
    total.innerText = `the Total amount including tips is ${value}.`
    // total.innerText = 'The Total amount including tips is' + value+ '.'
    tip.innerText = `The tip is ${reqTip}.`;
}