/**
 * in js class is derived in es6
 * class always start clss keyword before a identifiername
 * class have own constructor
 * class have also a static method which is only access using classname
 * we csn inherit a class data to another using extend
 */

class emp{
    constructor(name,id,sal,job){
        this.name=name;
        this.id=id;
        this.sal=sal;
        this.job=job;
        
    }
    _Fun(title){
        console.log("good morning" + " " +this.name +title)
        
    }
    static forpersional(){
    
        console.log("Hello i am the static method");
    }
}

let emp_details=new emp('Rohit',82737,57000,'web developer');
let emp_details1=new emp('Prakash',37465,57000,'web developer');
emp_details._Fun("sahoo")
emp.forpersional()
console.log(emp_details);
console.log(emp_details1); 