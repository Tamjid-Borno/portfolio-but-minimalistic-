// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const texts = ["Web Designer", "Programmer"];
    let index = 0;
    let charIndex = 0;
    const typingText = document.getElementById('typing-text');
    
    function type() {
      if (charIndex < texts[index].length) {
        typingText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200); // Adjust typing speed (milliseconds)
      } else {
        setTimeout(erase, 2000); // Adjust delay before backspacing (milliseconds)
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typingText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100); // Adjust backspacing speed (milliseconds)
      } else {
        index = (index + 1) % texts.length;
        setTimeout(type, 500); // Adjust delay before typing next text (milliseconds)
      }
    }
  
    type(); // Start typing
  });
  
// script.js
// JavaScript to control the typing animation
document.addEventListener('DOMContentLoaded', function() {
  const lines = [
    "I'm Borno. I'm from Bangladesh. I've started learning coding in 2020 when",
    "lockdown started and I self taught myself that's why I don't have any",
    "certificate. But I'm well education in this section and learnt various",
    "skills related to this sector. If someone asks which language is my",
    "comfort",
    "language then I always answer Python because it's my first programming",
    "language and because of ease but I also mastered alot of other languages",
    "as Javascript, HTML, CSS( web development basically) jsx etc etc. I'm",
    "currently learning ethical hacking. I love to learn. I'm going to do your",
    "project in the most reasonable price possible so you wont have to worry!",
    "Even if you don't like my projects or given tasks I'll do them again-",
    "because I love trying [to impress you ;) {rizz}]",
  ];

  let lineIndex = 0;
  let charIndex = 0;
  const typingDiv = document.querySelector('.typing-text');

  function type() {
      if (lineIndex < lines.length) {
          if (charIndex < lines[lineIndex].length) {
              typingDiv.innerHTML += lines[lineIndex].charAt(charIndex);
              charIndex++;
              setTimeout(type, 50); // Adjust typing speed (milliseconds)
          } else {
              typingDiv.innerHTML += '<br>'; // Insert line break
              charIndex = 0;
              lineIndex++;
              setTimeout(type, 500); // Adjust delay between lines (milliseconds)
          }
      }
  }

  // Call the typing function when the page loads
  type();
});

document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth <= 768) {
      const lines = [
          "I'm Borno. I'm from Bangladesh. I've started",
          "learning coding in 2020 when",
          "lockdown started and I self taught",
          "myself that's why I don't have any",
          "certificate. But I'm well education in",
          "this section and learnt various",
          "skills related to this sector. If someone",
          "asks which language is my",
          "comfort",
          "language then I always answer Python",
          "because it's my first programming",
          "language and because of ease but I",
          "also mastered a lot of other languages",
          "as Javascript, HTML, CSS( web",
          "development basically) jsx etc etc. I'm",
          "currently learning ethical hacking. I love to",
          "learn. I'm going to do your",
          "project in the most reasonable price",
          "possible so you won't have to worry!",
          "Even if you don't like my projects or",
          "given tasks I'll do them again-",
          "because I love trying [to impress you ;) {rizz}]"
      ];

      let lineIndex = 0;
      let charIndex = 0;
      const typingDiv = document.querySelector('.black-box');

      function type() {
          if (lineIndex < lines.length) {
              if (charIndex < lines[lineIndex].length) {
                  typingDiv.innerHTML += lines[lineIndex].charAt(charIndex);
                  charIndex++;
                  setTimeout(type, 50); // Adjust typing speed (milliseconds)
              } else {
                  typingDiv.innerHTML += '<br>'; // Insert line break
                  charIndex = 0;
                  lineIndex++;
                  setTimeout(type, 500); // Adjust delay between lines (milliseconds)
              }
          }
      }

      // Call the typing function when the page loads
      type();
  }
});

// Check if the pie chart container is in view
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const pieChartContainer = document.querySelector('.pie-chart-container');
    const bounding = pieChartContainer.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      pieChartContainer.classList.add('in-view');
    } else {
      pieChartContainer.classList.remove('in-view');
    }
  });
});

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));

$(document).ready(function(){
  $('.frame').click(function(){
    $('.top').addClass('open');
    $('.message').addClass('pull');
  })
});

