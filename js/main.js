window.addEventListener("DOMContentLoaded", function () {
    // Light/Dark
    const body=document.body
    const switch_button=document.getElementById("switch_button")

    // Dropdown
    const dropdown=document.getElementById("dropdown")
    const dropdown_title=document.getElementById("dropdown_title")
    const dropdown_wrapper=document.getElementById("dropdown_wrapper")

    // Back to Top
    const back_to_top=this.document.getElementById("back_to_top")

    // Light/Dark
    switch_button.addEventListener("click", function() {
        if (body.style.color==="black" && body.style.background==="white") {
            body.style.color="white";
            body.style.background="black";
            dropdown_title.style.color="white";
            dropdown_title.style.background="black";
            dropdown.style.color="white";
            dropdown.style.background="black";
            localStorage.setItem("theme", "dark");
        }
        else {
            body.style.color="black";
            body.style.background="white";
            dropdown_title.style.color="black";
            dropdown_title.style.background="white";
            dropdown.style.color="black";
            dropdown.style.background="white";
            localStorage.setItem("theme", "light");
        }
    });

    window.onload = function() {
        const theme=localStorage.getItem("theme")

        if (theme==="dark") {
            body.style.color="white";
            body.style.background="black";
            dropdown_title.style.color="white";
            dropdown_title.style.background="black";
            dropdown.style.color="white";
            dropdown.style.background="black";        
        }
        else {
            body.style.color="black";
            body.style.background="white";
            dropdown_title.style.color="black";
            dropdown_title.style.background="white";
            dropdown.style.color="black";
            dropdown.style.background="white";
        }
    };

    // Dropdown
    function dropdown_open(event) {
        dropdown.style.display="block";
        event.stopPropagation();
    }

    function dropdown_close(event) {
        dropdown.style.display="none";
        event.stopPropagation();
    }

    dropdown_title.addEventListener("click", dropdown_open);
    dropdown_title.addEventListener("mouseenter", dropdown_open);
    dropdown_wrapper.addEventListener("mouseleave", dropdown_close);
    document.addEventListener("click", dropdown_close);
});

// Back to Top
window.addEventListener("scroll", ()=> {
    if (window.scrollY>=100) {
        back_to_top.style.opacity="1";
        back_to_top.style.pointerEvents="auto";
    }
    else {
        back_to_top.style.opacity="0";
        back_to_top.style.pointerEvents="none";
    }
});
