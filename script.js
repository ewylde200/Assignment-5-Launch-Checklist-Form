window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
         response.json().then(function(json){
            const missionTarget = document.getElementById('missionTarget');
            const index = Math.floor(Math.random() * json.length);
            missionTarget.innerHTML = `
            <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
            `;
         });
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
     });
   
   let form = document.querySelector('form');
   
   form.addEventListener("submit", function(event){
      event.preventDefault()
      let pilotNameNode = document.querySelector("input[name=pilotName]");
      let copilotNameNode = document.querySelector("input[name=copilotName]");
      let fuelLevelNode = document.querySelector("input[name=fuelLevel]");
      let cargoMassNode = document.querySelector("input[name=cargoMass]");

   if (!pilotNameNode.value || !copilotNameNode.value || !fuelLevelNode.value || !cargoMassNode.value) {
      alert("Please fill out all fields.")
      // Alerts the user to fill out the form
   } else if (!isNaN(pilotNameNode.value) || !isNaN(copilotNameNode.value)){
      alert("Pilot Name and/or Co-pilot Name cannot include numbers. Please try again.");
      // Alerts the user to not use numbers in the name fields
   } else if (isNaN(fuelLevelNode.value) || isNaN(cargoMassNode.value)){
      alert("Fuel Level and/or Cargo Mass cannot include letters. Please try again.");
      // Alerts the user to not use letters for Fuel Level and Cargo Mass
   } else {
      itemStatus.style.visibility = 'visible';
      // After initial validation, make this list visible by changing its visibility to  visible.
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameNode.value} is ready.`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameNode.value} is ready.`;
      // Update the list to include the pilot's name and the co-pilot's name

      if (fuelLevelNode.value < 10000 && cargoMassNode.value > 10000) {
         document.getElementById("fuelStatus").innerHTML = `There is not enough fuel for the journey.`;
         document.getElementById("cargoStatus").innerHTML = `There is too much mass for the shuttle to take off.`;
         document.getElementById("launchStatus").innerHTML = `The shuttle is not ready for launch.`;
         launchStatus.style.color = 'red';
            // document.getElementById("fuelStatus").innerHTML = 'The fuel level check passed.';
            //For an acceptable fuel level, report that “Fuel level check passed” in the itemStatus  list
      } else if (cargoMassNode.value > 10000 && fuelLevelNode.value > 10000) {
         document.getElementById("cargoStatus").innerHTML = `There is too much mass for the shuttle to take off.`;
         document.getElementById("fuelStatus").innerHTML = `The fuel level check passed.`;
         document.getElementById("launchStatus").innerHTML = `The shuttle is not ready for launch.`;
         launchStatus.style.color = 'red';
               /* If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the 
               cargo status to reflect that that there is too much mass for the shuttle to take off. The text of 
               launchStatus  should also change to "Shuttle not ready for launch" and the  color  should 
               change to red. */
      } else if (fuelLevelNode.value < 10000 && cargoMassNode.value < 10000) {
         document.getElementById("fuelStatus").innerHTML = `There is not enough fuel for the journey.`;
         document.getElementById("cargoStatus").innerText = `The cargo mass check passed.`;
         document.getElementById("launchStatus").innerHTML = `The shuttle is not ready for launch.`;
         launchStatus.style.color = 'red';
            /* If the user submits a fuel level that is too low (less than 10,000 liters), change the fuel status 
            to reflect that there is not enough fuel for the journey. The text of the  h2  element, 
            launchStatus , should also change to "Shuttle not ready for launch" and its  color  should 
            change to red. */
      } else {
         document.getElementById("cargoStatus").innerText = `The cargo mass check passed.`;
         document.getElementById("launchStatus").innerText = `The shuttle is ready for launch.`;
         document.getElementById("fuelStatus").innerHTML = `The fuel level check passed.`;
         launchStatus.style.color = 'green';
            /*  For an acceptable cargo mass, report that “Cargo mass check passed” in 
            the  itemStatus  list.
            If the shuttle is ready to launch, change the text of  launchStatus  to green and display 
            "Shuttle is ready for launch". */
      }
   // conditions: 1. fuel too low, cargo fine 2. fuel fine, cargo too high 3. fuel too low and cargo too high. If all pass, ready for launch. If, else if, else if, and else
   }
   });
 });