const result = document.querySelector(".res");
const operator = document.querySelectorAll(".operator1");
const num1 = document.querySelectorAll(".num"); // Separate num elements for the first number
//const num2 = document.querySelectorAll(".num"); // Separate num elements for the second number
const equal = document.querySelector(".equal");
const c = document.querySelector(".clear");

//let res = 0;////
let str = "";
let res2 = 0;
let str2 = "";
let instrument = null;
fnum1();
function fnum1() {
  str="";
  // let res = 0;
  num1.forEach((n1) => {
    n1.addEventListener("click", () => {
      const clickedNum = n1.textContent;
      str = str + clickedNum;
      res = parseFloat(str);
      // console.log(res);
      result.innerText = res;
    });
    // res = parseFloat(str);
    // result.innerText = res;
    // str=" ";

  });
  fop(res);
}

function fop(res) {
  instrument="";
  operator.forEach((oper) => {
    oper.addEventListener("click", () => {
      const clickedOp = oper.textContent;
      if (clickedOp === "+") {
        instrument = "+";
      } else if (clickedOp === "-") {
        instrument = "-";
      } else if (clickedOp === "x") {
        instrument = "*";
      } else {
        instrument = "/";
      }
      fnum2(res);
    });
  });
}

function fnum2(res) {
  str2="";
  str="";
  num2.forEach((n2) => {
    n2.addEventListener("click", () => {
      const clickedNum = n2.textContent;
      str2 = str2 + clickedNum;
      res2 = parseFloat(str2);
      result=res2;
      result.innerText = res2;
    });
  });
  equal.addEventListener("click", () => {
    if (instrument === "+") {
      console.log(res);
      // console.log()
      result.innerText = res + res2;
    } else if (instrument === "-") {
      result.innerText = res - res2;
    } else if (instrument === "*") {
      result.innerText = res * res2;
    } else if (instrument === "/") {
      result.innerText = res / res2;
    }
  });
}



c.addEventListener("click", () => {
  res = 0;
  res2 = 0;
  str="";
  str2="";
  // result=0;

  result.innerText = 0;
  fnum1();
});
