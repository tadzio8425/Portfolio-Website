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
        main.removeChild(presentationCard);
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