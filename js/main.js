// Typing Animation
Skip to content

DEV Community
Create account

5
Jump to Comments
4
Save

Cover image for Disable inspect element - DevTools in your Website
Nguyễn Công Dũng
Nguyễn Công Dũng
Posted on Mar 14, 2022


5

2
Disable inspect element - DevTools in your Website
#
devtools
#
javascript
#
html
#
chrome
A Website can build with simple HTML / CSS / Javascript. When you published, all source code can see with DevTools of Browser.

What is DevTools?
DevTools is a great tool in the hands of developers and designers for the need to making the development process more productive and debugging easy.

With the Inspect Element on Chrome, you have more power than the traditional web users:

View and change the DOM
View and style CSS
Debug Javascript
Watch network activity
Show Local Storage, Session Storage,...
Optimize website performance
etc...
You can discover that the DevTools can be a serious boost to your productivity. But...

With great power comes great responsibility
— Tom Precious

Why need disable Devtools?
DevTools is powerful for Development, but is dangerous on production environment.
Anyone can see your source code, which means it's not secure. With DevTools, hacker easily inspect, edit, modify your code.

I was access to admin of website by change is_admin variable to true

Besides, he can see when your website get API (Application Programming Interface) and steal API_KEY or exploit information.

Solution
DevTools can't closed completely. But you can make it inaccessible. Launching DevTools in the following ways:

Right-click -> Inspect
Ctrl + Shift + I (DevTools shortcut)
F12 (DevTools shortcut)
Ctrl + Shift + J (Open the Console panel)
Ctrl + Shift + C (Open the Elements panel)
Ctrl + U (View Source-code)
// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};
Check out from this Github code.

Top comments (5)

Subscribe
pic
Add to the discussion
 
 
harshadsatra profile image
Harshad
•
Feb 8

Neat trick,

Do you have any idea on how to prevent site access, if the user opens the devtools from navigation menu.

Check this website for reference:
mca.gov.in/content/mca/global/en/h...


1
Like
 
 
sidintechnics profile image
Sid
•
Apr 4 • Edited

here you go buddy.
disable-devtool
Just a side note, by default doesn't work on debug mode, works on release mode. Enjoy


1
Like
 
 
pvcodes2020 profile image
pvcodes
•
Mar 16

How to do that?


Like
 
 
kolja profile image
Kolja
•
Mar 19 '22

You can hack it by:
open DevTools -> goto your "protected" site.


1
Like
 
 
andaeiii profile image
Ande Caleb
•
Nov 29 '22

you can hack this by pressing F12 on the keyboard... use the devtools.js ( devtools.isOpen) functionality to control and restrict access


Like
Code of Conduct • Report abuse
DEV Community

DEV Author Spotlight
miracool image 
Makanju Emmanuel
Follow
I’m an enthusiastic software developer and a technical writer, with a keen focus on making the web a better environment. I love to motivate myself to be consistent with learning and working smart.
Meet Makanju Emmanuel, an enthusiastic software developer and technical writer with a passion for making the web a better environment. They have recently been focusing on Vue.js, a popular JavaScript framework for building user interfaces. Makanju has written a series of articles called "Vue Made Easy," aimed at helping beginners understand the fundamentals and best practices of Vue.js.

In their articles, Makanju covers topics like Vuex, a state management library for Vue.js, and self-contained components for frontend applications. They also discuss the differences between React and Vue, as well as troubleshooting CORS preflight errors in Vue applications. If you're interested in learning more about Vue.js or web development in general, be sure to follow Makanju Emmanuel for insightful and informative content!

miracool 
Part 3(a): How to Build a Self-Contained Component
Makanju Emmanuel ・ Jun 2 ・ 4 min read
#programming #vue #frontend #webdev
miracool 
Part 2: Understanding Vuex: A State Management Library.
Makanju Emmanuel ・ May 30 ・ 5 min read
#webdev #javascript #programming #vue
miracool 
Part 1: Getting Started with Vue
Makanju Emmanuel ・ May 28 ・ 6 min read
#webdev #javascript #programming #vue
miracool 
Vue Made Easy: Introduction.
Makanju Emmanuel ・ May 28 ・ 3 min read
#webdev #frontend #vue #javascript
miracool 
React Vs Vue
Makanju Emmanuel ・ May 19 ・ 1 min read
#webdev #react #vue #frontend
miracool 
When or how do you know which to choose between CSR and SSR ?
Makanju Emmanuel ・ May 16 ・ 1 min read
#discuss #webdev #programming #frontend
miracool 
A guide to Vue Lifecycle hooks.
Makanju Emmanuel ・ May 16 ・ 3 min read
miracool 
Troubleshooting CORS preflight error in vue applications.
Makanju Emmanuel ・ May 13 ・ 3 min read
#vue #webdev
Read next
ruppysuppy profile image
7 Secret TypeScript Tricks Pros Use 😎🤫
Tapajyoti Bose - May 14

_blank profile image
Conquering the Villains: A Journey of Setting Up Node.js with Express and TypeScript
Harendra Bhujel - May 5

zinox9 profile image
React CheatSheet
Arjun Porwal - May 30

ptheodosiou profile image
Understanding Promises in JavaScript
Pantelis Theodosiou - May 29


Nguyễn Công Dũng
Follow
Front-end Software Engineer, Technical Writer
LOCATION
Hanoi, Viet Nam
EDUCATION
Hanoi University Of Business and Technology
WORK
Middle Front-end at VinBigData
JOINED
Dec 29, 2019
Trending on DEV Community 
Chris profile image
Stringify and Parse Errors in JavaScript
#javascript #webdev #tutorial #typescript
Michael Tharrington profile image
What you learning about this weekend?
#codenewbie #discuss #learning #beginners
Jarrod Roberson profile image
The only two questions you need to ask to determine if someone really "knows" something.
#career #beginners
DEV Community

DEV

Thank you.
Thanks for visiting DEV, we’ve worked really hard to cultivate this great community and would love to have you join us.

Sign up here

// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};
DEV Community — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Listings
Podcasts
Videos
Tags
FAQ
Forem Shop
Sponsors
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community © 2016 - 2023.
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    "web Developer",
    "App Developer",
    "JS Developer",
  ],
  typeSpeed: 100,
  BackSpees: 60,
  loop: true,
});

//aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totlaNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totlaNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totlaNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totlaNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggle"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}
