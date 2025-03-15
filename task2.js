function modifyContent() {
    let div = document.getElementById("content-box");
    let heading = document.getElementById("heading");

    // Add a class to style the div and paragraph
    div.classList.add("styled");

    // Change the heading text
    heading.textContent = "Israa Haj Ali's New Heading";
}
