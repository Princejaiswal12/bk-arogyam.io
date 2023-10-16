let Menu = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

Menu.onclick = () => {
  Menu.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

window.onscroll = () => {
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// Theme Toggle
let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
};
document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
  };
});



function whatsapp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    if (name === "") {
        alert('please fill this section name');
    }
    // else if (email == "") {
    //     alert('please fill this section name');
    // }

    // else if (phone == "") {
    //     alert('please fill this section name');
    // }
    // // else if (address == "") {
    // //     alert('please fill this section name');
    // // }
    // else {

        var url = "https://wa.me/917735700700?text="
            + "Name : " + name + "%0a"
            + "Email : " + email + "%0a"
            + "Phone : " + phone + "%0a"
            + "Address : " + address;

        window.open(url, '_blank').focus();

    }



