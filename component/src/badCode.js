function calculateSum(a,b){
    var result=a+b    // using var instead of let/const
    console.log(result)    // missing semicolon
    return result
 };      // unnecessary semicolon after function
 
 // unused variable
 const unused = "this will trigger a warning";