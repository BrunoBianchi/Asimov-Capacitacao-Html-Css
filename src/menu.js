function openNav() {
    var nav = document.getElementById("navigation");
    if(nav.className === "navigation") {
       nav.className += " menujs";
    }else {
        nav.className="navigation"
    }
}