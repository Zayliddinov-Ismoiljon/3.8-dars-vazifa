var elForm= document.querySelector(".form");
var elInput= document.querySelector(".form-control");
var elResultMan= document.querySelector(".result-man");
var elResultBicycle= document.querySelector(".result-bicycle");
var elResultCar= document.querySelector(".result-car");
var elResultAirplan= document.querySelector(".result-airplan");


elForm.addEventListener ("submit", function(e){
    e.preventDefault();
    var elInputVale= elInput.value;
    var elPersonSpeed= 3.6;
    var elVeloSpeed= 20.1;
    var elCarSpeed= 80;
    var elAriaplanSpeed= 800;

    function person() {
        return elInputVale/elPersonSpeed;
    }
    function velo() {
        return elInputVale/elVeloSpeed;
    }

    function car() {
        return elInputVale/elCarSpeed;
    }

    function airplan() {
        return elInputVale/elAriaplanSpeed;
    }

     

    elResultMan.textContent= Math.round(person()).toFixed(2);
    elResultBicycle.textContent= Math.round(velo()).toFixed(2);
    elResultCar.textContent= Math.round(car()).toFixed(2);
    elResultAirplan.textContent= Math.round(airplan()).toFixed(2);

})

