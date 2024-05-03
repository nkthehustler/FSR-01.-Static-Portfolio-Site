// About Skills, Experience and Education Tab Script

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-content")


function opentab(tabname) {
   for (tablink of tablinks) {
      tablink.classList.remove("active-link");
   }
   for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}

// Hamburger Menu Script

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
   sidemenu.style.right = "0";
}

function closemenu() {
   sidemenu.style.right = "-200px";
}

// form script

const scriptURL = 'PASTE YOUR URL HERE'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
   e.preventDefault()
   fetch(scriptURL, {
         method: 'POST',
         body: new FormData(form)
      })
      .then(response => {
         msg.innerHTML = "Message Sent!"
         setTimeout(function () {
            msg.innerHTML = '';
         }, 5000);
         form.reset();
      })
      .catch(error => console.error('Error!', error.message))
})
