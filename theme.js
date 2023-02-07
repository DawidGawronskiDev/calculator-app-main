// Get the root element
var r = document.querySelector(":root");

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue("--blue"));
}

// Create a function for setting a variable value

function themeOne() {
  r.style.setProperty("--c-main-background", "hsl(222, 26%, 31%)");
  r.style.setProperty("--c-toggle-background", "hsl(223, 31%, 20%)");
  r.style.setProperty("--c-screen-background", "hsl(224, 36%, 15%)");

  r.style.setProperty("--c-1-key-background", "hsl(30, 25%, 89%)");
  r.style.setProperty("--c-1-key-shadow", "hsl(28, 16%, 65%)");

  r.style.setProperty("--c-2-key-background", "hsl(6, 63%, 50%)");
  r.style.setProperty("--c-2-key-key-shadow", "hsl(6, 70%, 34%)");

  r.style.setProperty("--c-3-key-background", "hsl(225, 21%, 49%)");
  r.style.setProperty("--c-3-key-shadow", "hsl(224, 28%, 35%)");

  r.style.setProperty("--k-text", "hsl(221, 14%, 31%)");
  r.style.setProperty("--w", "");

  document.querySelector(".output").style.color = "hsl(0, 0%, 100%)";
}

function themeTwo() {
  r.style.setProperty("--c-main-background", "hsl(0, 0%, 90%)");
  r.style.setProperty("--c-toggle-background", "hsl(0, 5%, 81%)");
  r.style.setProperty("--c-screen-background", "hsl(0, 0%, 93%)");

  r.style.setProperty("--c-1-key-background", "hsl(45, 7%, 89%)");
  r.style.setProperty("--c-1-key-shadow", "hsl(35, 11%, 61%)");

  r.style.setProperty("--c-2-key-background", "");
  r.style.setProperty("--c-2-key-key-shadow", "hsl(25, 99%, 27%)");

  r.style.setProperty("--c-3-key-background", "hsl(185, 42%, 37%)");
  r.style.setProperty("--c-3-key-shadow", "hsl(185, 58%, 25%)");

  r.style.setProperty("--k-text", "hsl(60, 10%, 19%)");
  r.style.setProperty("--w", "hsl(0, 0%, 100%)");

  document.querySelector(".output").style.color = "hsl(60, 10%, 19%)";
}

// #### Backgrounds

// - Very dark violet (main background): hsl(268, 75%, 9%)
// - Very dark violet (toggle background, keypad background, screen background): hsl(268, 71%, 12%)

// #### Keys

// - Dark violet (key background): hsl(281, 89%, 26%)
// - Vivid magenta (key shadow): hsl(285, 91%, 52%)

// - Pure cyan (key background, toggle):
// - Soft cyan (key shadow):

// - Very dark violet (key background):
// - Dark magenta (key shadow):

// #### Text

// - Light yellow: hsl(52, 100%, 62%)
// - Very dark blue: hsl(198, 20%, 13%)
// - White (text): hsl(0, 0%, 100%)

function themeThree() {
  r.style.setProperty("--c-main-background", "hsl(268, 75%, 9%)");
  r.style.setProperty("--c-toggle-background", "hsl(268, 71%, 12%)");
  r.style.setProperty("--c-screen-background", "hsl(268, 71%, 12%)");

  r.style.setProperty("--c-1-key-background", "hsl(281, 89%, 26%)");
  r.style.setProperty("--c-1-key-shadow", "hsl(285, 91%, 52%)");

  r.style.setProperty("--c-2-key-background", "hsl(176, 100%, 44%)");
  r.style.setProperty("--c-2-key-key-shadow", "hsl(177, 92%, 70%)");

  r.style.setProperty("--c-3-key-background", "hsl(268, 47%, 21%)");
  r.style.setProperty("--c-3-key-shadow", "hsl(290, 70%, 36%)");

  r.style.setProperty("--k-text", "hsl(52, 100%, 62%)");
  r.style.setProperty("--w", "hsl(0, 0%, 100%)");

  document.querySelector(".output").style.color = "hsl(52, 100%, 62%)";
}

const switchOptions = document.querySelectorAll(".switchOption");

switchOptions.forEach((opt) =>
  opt.addEventListener("click", () => {
    switch (opt.classList[1]) {
      case "1":
        themeOne();
        break;
      case "2":
        themeTwo();
        break;
      case "3":
        themeThree();
        break;
    }
  })
);
