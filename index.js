const colorForm = document.getElementById("color_form");
const colorSeed = document.getElementById("color_seed");
const selectMenu = document.getElementById("select_menu");
const colorContainer = document.getElementById("color_container");
const colorValuesContainer = document.getElementById("color_values_container");


colorForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    var color = colorSeed.value.replace('#', ''); // remove hash tag form values
    var mode = selectMenu.options[selectMenu.selectedIndex].value;
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
            const colors = data.colors.map(color => color.hex.value); // extract hex values
            displayColors(colors); // call a function to display them
        });
})



// why doesn't this work? maybe a scrimba thing
//
// document.addEventListener("click", function(e){
//     if (e.target.textContent.includes("#")) {
//         navigator.clipboard.writeText(e.target.textContent).then(() => {
//             alert("Copied: " + e.target.textContent);
//         }).catch(err => {
//             console.error("Failed to copy: ", err);
//         });
//     }
// })
//


function displayColors(colors){
    colorContainer.innerHTML = "";
    colorValuesContainer.innerHTML = "";
    colors.forEach(hex => {
            const colorDiv = document.createElement("div");
            const colorValues = document.createElement("p");
            colorDiv.style.backgroundColor = hex;
            colorDiv.style.width = "7em";
            colorDiv.style.height = "100vh";
            colorDiv.style.display = "inline-block";
            colorValues.textContent = hex;
            colorContainer.appendChild(colorDiv);
            colorValuesContainer.appendChild(colorValues);
    });
}



