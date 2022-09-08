let isFirst = 0
let res = 0;
function show(num) {
  if(num === "="){
   
    res=eval(document.querySelector('#res').value);
    document.querySelector("#res").value=res
  }else if (num === 'C') {
    document.querySelector("#res").value=0
    isFirst=0
  }else if (isFirst === 0) {
    document.querySelector('#res').value=num;
    isFirst = 1;
  }else {
    document.querySelector('#res').value+=num
  }

}