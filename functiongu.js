//normal function 
function double(n)
{
    return n*2;
}
 console.log(double(12));//function call
 //outputp:24

 //Arrow function 
 const arrow=(n)=>n*2;
 console.log(arrow(10));
 console.log(arrow(20));
 //output:20,40

 //two variable sum arrow function
 const sum=(a,b)=>a+b;
 console.log(sum(100,200));
 console.log(sum(100,400));
 //output:300,500

//sum IIFE
console.log(
    (function sum(a,b){
        
        return a+b;
    })(3,5)
    );
    //output:8
     
      // IIFE+Anonyms+Arrow  function
      console.log(((a,b)=>a+b)(5,5))

//
console.log(
    (function cool(rollno){
        var firstname="sowmiya";
        let lastname="ponmudi";
        return firstname+" "+lastname+"-"+rollno;
     }
    )(93)
);

//
var firstname="Sindhuja";
let lastname="Govindaraj";
console.log(firstname,lastname);
