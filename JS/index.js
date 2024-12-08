
let randomNumber;
$("#again").hide();
$("#congratulationText").hide();
$("#startbtn").on("click", function(e){
    e.preventDefault();
   randomNumber = Math.floor(Math.random() * 1000) + 1; 
    $("#num").text(randomNumber);

    setTimeout(() => {
        $("#num").text('???');
    }, 70);})
 $("#restart").on("click" , function(e){
    let inputnum= $("#myInput").val();
    if (inputnum === "" || inputnum === undefined) {
        // Display a message asking the user to enter a number
        $("#result").text("Please insert a number first!");}
   else if(randomNumber == inputnum) {
        $("#result").text(`Awesome!You saw the number correctly: ${randomNumber}!🎉`);

    }
else{
    $("#result").text(`Oops!The correct number was ${randomNumber}.Try again⏱️`);
}
 })
$("#secondTime").on("click",  function(e) {
    location.reload();  
});



    