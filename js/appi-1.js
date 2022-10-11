/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
 const sections = Array.from(document.querySelectorAll('section'));

 /**
  * End Global Variables
  * Start Helper Functions
  * 
  */
 
 /**
  * End Helper Functions
  * Begin Main Functions
  * 
  */
 // build the nav
 function navBar() {
     for (let s of sections) {
         const unl = document.querySelector('ul');
         const lst = document.createElement('li');
         lst.className = "menu_link";
         lst.innerHTML = `<a class='${s.id}' href='#${s.id}'>${s.dataset.nav} </a>`;
         unl.appendChild(lst);
         lst.addEventListener('click', function(event) {
             event.preventDefault();
             s.scrollIntoView({
                 behavior: "smooth",
                 block: "start"
             });
         });
 
     }
 
 
 }
 
 
 
 
 // Add class 'active' to section when near top of viewport
 
 function activeSection() {
     for (s of sections) {
         const vwbox = s.getBoundingClientRect();
         if (vwbox.top <= 150 && vwbox.bottom >= 150) {
             s.classList.add("your-active-class");
             const id = s.getAttribute("id");
             document.querySelector(`.${id}`).classList.add("active");
 
         } else {
             s.classList.remove("your-active-class");
             const id = s.getAttribute("id");
             document.querySelector(`.${id}`).classList.remove("active");
         }
 
     }
 
 }
 // Scroll to anchor ID using scrollTO event
 
 /**
  * End Main Functions
  * Begin Events
  * 
  */
 
 // Build menu 
 window.onload = navBar();
 
 // Scroll to section on link click
 /*function SectionScroll(){
     const lst = document.querySelectorAll(".menu__link");
     lst.forEach((item) => {
         item.addEventListener("click", function(event) {
            event.preventDefault();
            sect=document.get
            sect.scrollIntoView({block:"end", inline:"nearest",
                  behaviour: "smooth"
             })
            
            })
            })
 }*/
 
 
 //nvbar.onscroll=SectionScroll();
 
 
 
 
 // Set sections as active
 window.addEventListener("scroll", function() {
     activeSection();
 
 })
 
 //Scroll to top
 const btn = document.querySelector("button");
 btn.addEventListener("click", function(event) {
     event.preventDefault();
     const sc = document.querySelector("section");
     sc.scrollIntoView({
         block: "end",
         behavior: "smooth"
     });
 })