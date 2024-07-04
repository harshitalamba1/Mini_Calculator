// declare the variables
const result = document.querySelector(".res");
const operator = document.querySelectorAll(".operator1");
const num1 = document.querySelectorAll(".num");
const equal = document.querySelector(".equal");
const c = document.querySelector(".clear");

// define the variables
let num_1="";
let num_2="";
let operator_1=null;

// clicked condition->before clicking the operator is num_1 and after num_2
num1.forEach((n)=>{
    n.addEventListener("click",()=>{
        if(operator_1===null){
            num_1=num_1+n.textContent;
            result.innerText=num_1;
        }
        else{
            num_2=num_2+n.textContent;
            result.innerText=num_2;
        }
    })
})

// checking the operator
operator.forEach((op)=>{
    op.addEventListener("click",()=>{
        operator_1=op.textContent;
    })
})

// equal to event
equal.addEventListener("click",()=>{
    n1=parseFloat(num_1).toFixed(3);
    n2=parseFloat(num_2).toFixed(3);
    if(operator_1==="+"){
        result.innerText=num_1+num_2;
    }
    else if(operator_1==="-"){
        result.innerText=num_1-num_2;
    }
    else if(operator_1==="x"){
        result.innerText=num_1*num_2;
    }
    else{
        result.innerText=num_1/num_2;
    }
    
})

// setting the clear option
c.addEventListener("click",()=>{
    num_1="";
    num_2="";
    operator_1=null;
    result.innerText=0.;
})

