/**
 *  when he tries to perform various callbacks function one after the other
 */
//example

const student=()=>{
    setTimeout(() => {
        const name=["Ajay","Binod","Bunu","Suman","Salaman"];
        console.log(name);
        setTimeout((name) => {
           let data={
             roll_no:123,
             age:19,
             stream:"science"
            }
            console.log(`my name is ${name[1]} and My roll no. ${data.roll_no} stram ${data.stream} and age is ${data.age}`);

            setTimeout((name) => {
                data.gender="male"
                console.log(`my name is ${name[0]} and My roll no. ${data.roll_no} stram ${data.stream} and age is ${data.age} and i am a aplha ${data.gender}`)
            }, 2500,name);
        }, 2000,name);
    }, 1000);
}
student()