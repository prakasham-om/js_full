let a={
    name:"prakash",
    b:{
      age:23
    }
    
  }

  //shallow copy example 
  
  let c={...a};
  c.name="prMD"
  c.b.add='bam'
  
  console.log(a) 
  console.log(c)


  //deepcopy example
  let d=Object.assign({},a)
  d.b.add=888
  console.log(d)
  
  let e=JSON.parse(JSON.stringify(a))
  e.b.age=553
  console.log(e)