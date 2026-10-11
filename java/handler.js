
const infoLable = document.getElementById("infoZwrotne");

//button.addEventListener("click", function() {

 //   if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
   //     infoLable.textContent = "Zapisano";
  //  } else {
  //      infoLable.textContent = "Niepoprawny format";
   // }

   // setTimeout(function() {
      //  infoLable.textContent = "Zapisz się na zajęcia";
    //}, 2000);

//});


document.querySelectorAll(".zapiszButton").forEach(button => {

    button.addEventListener("click", function() {

document.getElementById("zajeciaInput").value = button.dataset.kurs;


            document.querySelector("#Zapis-na-zajęcia").scrollIntoView( {
            behavior: "smooth",
            block: "start"

        });

    });

});

