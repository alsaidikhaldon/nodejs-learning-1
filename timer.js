// setInterval(() => {
//     console.log("timer count every seconde");

// }, 1000);

// setTimeout(() => {
//     console.log("time out working");

// }, 3000);

// var counter = 0;
// for (let x = 0; x < 10; x++) {
//     counter ++;
//     setTimeout(() => {
//         console.log("time out working" + counter);
//     }, 3000);
//     console.log( counter);

// }




   
   
var counter = 0
   
    function doSetTimeout(x) {
        setTimeout(() => {
            console.log("time out working  " + x);
          
        }, 1000);
    }
    
    
    

    
      

    for (let i = 0; i < 5; i++) {
        counter++;
        doSetTimeout(i);
        console.log("counting ... " + counter);
        
       
        
    }