

//function displays the dresscode for the day
function displayMessage(){
    let temperature = document.getElementById("temp").value;
    console.log(temperature)
    if (temperature >= 24) {
        document.getElementById("dresscode").innerHTML = "Summer time!! wear shorts ,flip flops and sunglasses ";
    
    } else if (temperature <= 23 && temperature >= 15){
        document.getElementById("dresscode").innerHTML = "wear a windbreaker and have a raincoat";
        
    } else if (temperature <= 14 && temperature >= -7) {
        document.getElementById("dresscode").innerHTML = "wear a warm clothes and a coat";
      
    } else {
        document.getElementById("dresscode").innerHTML = "invalid temperature";
    
    }
    }
    