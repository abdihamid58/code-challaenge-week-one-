const prompt=require("prompt-sync")();
let netSalary=prompt("Enter salary:");

 /// CALCULATE NET SALARY OF (100000) Payee 30% NHIF rate 1700 and NSSF rate 6%.
function getSalary(){
    let salary = netSalary;
   
    if (salary){
        let nhif = salary - 1700;
        let tax = salary * 0.3;
        let nssf = salary * 0.006;
        let deductions = (nhif+tax+nssf)
        let netSalary = salary - deductions 
    console.log(`your net salary is ${netSalary}`);
    }
    
}
getSalary();