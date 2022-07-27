window.addEventListener("load", function(){
   let form = document.querySelector('form');
   
   form.addEventListener("submit", function(event){
      event.preventDefault()
      let pilotNameNode = document.querySelector("input[name=pilotName]");
      let copilotNameNode = document.querySelector("input[name=copilotName]");
      let fuelLevelNode = document.querySelector("input[name=fuelLevel]");
      let cargoMassNode = document.querySelector("input[name=cargoMass]");

   if (!pilotNameNode.value || !copilotNameNode.value || !fuelLevelNode.value || !cargoMassNode.value) {
      alert("Please fill out all fields.")
   } 
   if (!isNaN(pilotNameNode.value) || !isNaN(copilotNameNode.value)){
      alert("Pilot Name and/or Co-pilot Name cannot include numbers. Please try again.");
   }
   if (isNaN(fuelLevelNode.value) || isNaN(cargoMassNode.value)){
      alert("Fuel Level and/or Cargo Mass cannot include letters. Please try again.");
   }
   });
 });

 // Testing


// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/