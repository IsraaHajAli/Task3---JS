function modifyContent() {
    let div = document.getElementById("container"); 
    let heading = document.getElementById("heading");
    let paragraph = document.querySelector("#container p");

    document.querySelector("#container p").classList.add("styled-text");
    div.classList.add("styled");

    heading.textContent = "Israa Haj Ali's New Heading";
}
