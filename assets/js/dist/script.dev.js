"use strict";

$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
      document.querySelector('#scroll-top').classList.add('active');
    } else {
      document.querySelector('#scroll-top').classList.remove('active');
    } // scroll spy


    $('section').each(function () {
      var height = $(this).height();
      var offset = $(this).offset().top - 200;
      var top = $(window).scrollTop();
      var id = $(this).attr('id');

      if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find("[href=\"#".concat(id, "\"]")).addClass('active');
      }
    });
  }); // smooth scrolling

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  }); // <!-- emailjs to mail contact form data -->

  $("#contact-form").submit(function (event) {
    emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");
    emailjs.sendForm('contact_service', 'template_contact', '#contact-form').then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById("contact-form").reset();
      alert("Form Submitted Successfully");
    }, function (error) {
      console.log('FAILED...', error);
      alert("Form Submission Failed! Try Again");
    });
    event.preventDefault();
  }); // <!-- emailjs to mail contact form data -->
});
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Ravi Kumar";
    $("#favicon").attr("href", "assets/images/favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    $("#favicon").attr("href", "assets/images/favhand.png");
  }
}); // <!-- typed js effect starts -->

var typed = new Typed(".typing-text", {
  strings: [" DEVELOPER"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500
}); // <!-- typed js effect ends -->

function fetchData() {
  var type,
      response,
      data,
      _args = arguments;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          type = _args.length > 0 && _args[0] !== undefined ? _args[0] : "skills";

          if (!(type === "skills")) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("skills.json"));

        case 4:
          response = _context.sent;
          _context.next = 10;
          break;

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(fetch("./projects/projects.json"));

        case 9:
          response = _context.sent;

        case 10:
          _context.next = 12;
          return regeneratorRuntime.awrap(response.json());

        case 12:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showSkills(skills) {
  var skillsContainer = document.getElementById("skillsContainer");
  var skillHTML = "";
  skills.forEach(function (skill) {
    skillHTML += "\n        <div class=\"bar\">\n              <div class=\"info\">\n                <img src=".concat(skill.icon, " alt=\"skill\" />\n                <span>").concat(skill.name, "</span>\n              </div>\n            </div>");
  });
  skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
  var projectsContainer = document.querySelector("#work .box-container");
  var projectHTML = "";
  projects.slice(0, 10).filter(function (project) {
    return project.category != "android";
  }).forEach(function (project) {
    projectHTML += "\n        <div class=\"box tilt\">\n      <img draggable=\"false\" src=\"/assets/images/projects/".concat(project.image, ".png\" alt=\"project\" />\n      <div class=\"content\">\n        <div class=\"tag\">\n        <h3>").concat(project.name, "</h3>\n        </div>\n        <div class=\"desc\">\n          <p>").concat(project.desc, "</p>\n          <div class=\"btns\">\n            <a href=\"").concat(project.links.view, "\" class=\"btn\" target=\"_blank\"><i class=\"fas fa-eye\"></i> View</a>\n            <a href=\"").concat(project.links.code, "\" class=\"btn\" target=\"_blank\">Code <i class=\"fas fa-code\"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>");
  });
  projectsContainer.innerHTML = projectHTML; // <!-- tilt js effect starts -->

  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15
  }); // <!-- tilt js effect ends -->

  /* ===== SCROLL REVEAL ANIMATION ===== */

  var srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
  });
  /* SCROLL PROJECTS */

  srtop.reveal('.work .box', {
    interval: 200
  });
}

fetchData().then(function (data) {
  showSkills(data);
});
fetchData("projects").then(function (data) {
  showProjects(data);
}); // <!-- tilt js effect starts -->

VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15
}); // <!-- tilt js effect ends -->
// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end
// disable developer mode

document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
}; // Start of Tawk.to Live Chat


var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();

(function () {
  var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})(); // End of Tawk.to Live Chat

/* ===== SCROLL REVEAL ANIMATION ===== */


var srtop = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: true
});
/* SCROLL HOME */

srtop.reveal('.home .content h3', {
  delay: 200
});
srtop.reveal('.home .content p', {
  delay: 200
});
srtop.reveal('.home .content .btn', {
  delay: 200
});
srtop.reveal('.home .image', {
  delay: 400
});
srtop.reveal('.home .linkedin', {
  interval: 600
});
srtop.reveal('.home .github', {
  interval: 800
});
srtop.reveal('.home .twitter', {
  interval: 1000
});
srtop.reveal('.home .telegram', {
  interval: 600
});
srtop.reveal('.home .instagram', {
  interval: 600
});
srtop.reveal('.home .dev', {
  interval: 600
});
/* SCROLL ABOUT */

srtop.reveal('.about .content h3', {
  delay: 200
});
srtop.reveal('.about .content .tag', {
  delay: 200
});
srtop.reveal('.about .content p', {
  delay: 200
});
srtop.reveal('.about .content .box-container', {
  delay: 200
});
srtop.reveal('.about .content .resumebtn', {
  delay: 200
});
/* SCROLL SKILLS */

srtop.reveal('.skills .container', {
  interval: 200
});
srtop.reveal('.skills .container .bar', {
  delay: 400
});
/* SCROLL EDUCATION */

srtop.reveal('.education .box', {
  interval: 200
});
/* SCROLL PROJECTS */

srtop.reveal('.work .box', {
  interval: 200
});
/* SCROLL EXPERIENCE */

srtop.reveal('.experience .timeline', {
  delay: 400
});
srtop.reveal('.experience .timeline .container', {
  interval: 400
});
/* SCROLL CONTACT */

srtop.reveal('.contact .container', {
  delay: 400
});
srtop.reveal('.contact .container .form-group', {
  delay: 400
});