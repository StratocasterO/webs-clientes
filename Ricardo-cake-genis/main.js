function myFunction() {
    var image = document.getElementById("image1");
    var ingredientsList1 = document.getElementById("ingredientsList1");
    var btnText = document.getElementById("ingredients1");
    var overflow = document.getElementById("overflow1");

    if (image.style.height === "240px") {
        image.style.height = "0px";
        btnText.innerHTML = "Ingredients";
        // ingredientsList1.style.animation = "fadeOut";
        ingredientsList1.style.top = "240px";
        overflow.style.overflow = "hidden";
        overflow.style.width = "auto";
        overflow.style.height = "auto";
      
    } else {
        image.style.height = "240px";
        btnText.innerHTML = "Cake photo";
        // ingredientsList1.style.animation = "fadeIn";
        ingredientsList1.style.top = "0px";
        overflow.style.overflow = "scroll";
        overflow.style.width = "250px";
        overflow.style.height = "230px";
    }
}


function myFunction2() {
    var image = document.getElementById("image2");
    var ingredientsList1 = document.getElementById("ingredientsList2");
    var btnText = document.getElementById("ingredients2");
    var overflow = document.getElementById("overflow2")

    if (image.style.display === "none") {
        image.style.display = "inline";
        btnText.innerHTML = "Ingredients";
        ingredientsList1.style.display = "none";
        overflow.style.overflow = "hidden";
    } else {
        image.style.display = "none";
        btnText.innerHTML = "Cake photo";
        ingredientsList1.style.display = "inline";
        overflow.style.overflow = "scroll";
    }
}


function myFunction3() {
    var image = document.getElementById("image3");
    var ingredientsList1 = document.getElementById("ingredientsList3");
    var btnText = document.getElementById("ingredients3");
    var overflow = document.getElementById("overflow3")

    if (image.style.display === "none") {
        image.style.display = "inline";
        btnText.innerHTML = "Ingredients";
        ingredientsList1.style.display = "none";
        overflow.style.overflow = "hidden";
    } else {
        image.style.display = "none";
        btnText.innerHTML = "Cake photo";
        ingredientsList1.style.display = "inline";
        overflow.style.overflow = "scroll";
    }
}

function myFunction4() {
    var image = document.getElementById("image4");
    var ingredientsList1 = document.getElementById("ingredientsList4");
    var btnText = document.getElementById("ingredients4");
    var overflow = document.getElementById("overflow4")

    if (image.style.display === "none") {
        image.style.display = "inline";
        btnText.innerHTML = "Ingredients";
        ingredientsList1.style.display = "none";
        overflow.style.overflow = "hidden";
    } else {
        image.style.display = "none";
        btnText.innerHTML = "Cake photo";
        ingredientsList1.style.display = "inline";
        overflow.style.overflow = "scroll";
    }
}


function myFunction5() {
    var image = document.getElementById("image5");
    var ingredientsList1 = document.getElementById("ingredientsList5");
    var btnText = document.getElementById("ingredients5");
    var overflow = document.getElementById("overflow5")

    if (image.style.display === "none") {
        image.style.display = "inline";
        btnText.innerHTML = "Ingredients";
        ingredientsList1.style.display = "none";
        overflow.style.overflow = "hidden";
    } else {
        image.style.display = "none";
        btnText.innerHTML = "Cake photo";
        ingredientsList1.style.display = "inline";
        overflow.style.overflow = "scroll";
    }
}


function myFunction6() {
    var image = document.getElementById("image6");
    var ingredientsList1 = document.getElementById("ingredientsList6");
    var btnText = document.getElementById("ingredients6");
    var overflow = document.getElementById("overflow6")

    if (image.style.display === "none") {
        image.style.display = "inline";
        btnText.innerHTML = "Ingredients";
        ingredientsList1.style.display = "none";
        overflow.style.overflow = "hidden";
    } else {
        image.style.display = "none";
        btnText.innerHTML = "Cake photo";
        ingredientsList1.style.display = "inline";
        overflow.style.overflow = "scroll";
    }
}