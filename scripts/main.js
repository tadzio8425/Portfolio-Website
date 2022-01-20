///////////////////////////////////////////////////////////////////////
// Mobile version query handler
//////////////////////////////////////////////////////////////////////
let main = document.getElementById("main");
let presentationCard = document.querySelector(".presentation-card").cloneNode(true);
function addPresentationToMobile(event){
    if(event.matches){
        presentationCard.style.gridColumn = "1 / 2";
        presentationCard.style.gridRow = "1 / span 1";
        presentationCard.style.display = "block";
        presentationCard.setAttribute("id", "about-me-image");
        main.appendChild(presentationCard);
        //Change anchors
        changeAnchors(true);
    }
    else{
        try{
        main.removeChild(presentationCard);}
        catch{console.log("ERROR-REMOVING-PRESENTATION-CARD")}
        //Return original anchors
        changeAnchors(false);
    }
}
function changeAnchors(toMobile){
    let anchorUl = document.getElementById("ul-nav");
    for(let li of anchorUl.children){
        let anchor = li.firstChild;
        let href = anchor.getAttribute("href");
        let newHref = href.split("-")

        if(toMobile){
            newHref[newHref.length-1] = "image"
            newHref = newHref.join("-");
        }
        else{
            newHref[newHref.length-1] = "section"
            newHref = newHref.join("-");
        }
        anchor.setAttribute("href", newHref);
    }
}
let mobileMediaQuery = window.matchMedia("(max-width: 700px)");
mobileMediaQuery.addEventListener("change", addPresentationToMobile);
addPresentationToMobile(mobileMediaQuery);

///////////////////////////////////////////////////////////////////////
// Click-On Project Handler
//////////////////////////////////////////////////////////////////////
function returnShadow(image, shadow){
    image.style.boxShadow = shadow;
}



function showProject(event){
    let specificImage = event.target;
    let specificProject = specificImage.parentElement;
    let projectSection = document.getElementById("projects-section");

    //Shadow transition on click (affects only the image)
    let previousShadow = specificImage.style.boxShadow;
    specificImage.style.boxShadow = "none";
    setTimeout(returnShadow.bind(null, specificImage, previousShadow), 1000);

    // // Project Expansion // // 

}

let projectImages = document.getElementsByClassName("project-image");
for(let projectImage of projectImages){
    projectImage.addEventListener("click", showProject);
}