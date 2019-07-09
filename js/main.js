function displayUserOutput(){
    var temperature = document.getElementById("temp").value;
// Creating a temp variable
    
//  Giving the temp is greater than 24 degree
        if (temperature >=24) {
        document.getElementById("text").innerHTML = "Summer time! wear shorts ,flip flops and sunglasses";
//  Giving the temp is greater than 23 but less than 14
        } else if (temperature <=23 && temperature >=14) {
        document.getElementById("text").innerHTML ="Wear a wind breaker jacket and have a raincoat";
//  Giving the temp is greater than 13 but less than -7
        } else if (temperature <=13 && temperature >=-7) {
        document.getElementById("text").innerHTML ="Dress warmly and have a shovel with you cause its snowy";
//  Giving that if any of the above values aren't entered then its invalid   
        } else {
        document.getElementById("text").innerHTML ="Not a valid weather temperature";
        }
    
    }


    