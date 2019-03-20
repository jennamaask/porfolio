// variable declarations
$anchor = $("a");
$menu = $(".menu");
$about = $(".about");
$desktopMenu = $(".desktopMenu");
$span = $("span");
$dropDownMenu = $(".dropDownMenu");
$dropDownLinks = $("dropDownMenu a");

// setting up name spacing
app = {};

//header morphs
app.morph1 = anime({
  targets: ".animate1",
  d: [
    {
      value:
        "M1366,136v632H0V136c0,0,121.4,53.5,362.5,50.5c159-2,267-113,458-103c215,11.3,269,82,368,63c43.4-8.3, 140-29, 177-53"
    }
  ],
  easing: [0.5, 0, 0.5, 1],
  duration: anime.random(10000, 20000),
  loop: true,
  direction: "alternate"
});

app.morph2 = anime({
  targets: ".animate2",
  d: [
    {
      value:
        "M1366,333.1V768H0V333.1c0,0,92.5,3.4,322.5-37.6c208-37.1,284.7,52.7,502,98c120,25,236,32,324-10c37.7-18, 180-63.1, 217-79.6"
    }
  ],
  easing: [0.5, 0, 0.5, 1],
  duration: anime.random(10000, 20000),
  loop: true,
  direction: "alternate"
});

app.morph3 = anime({
  targets: ".animate3",
  d: [
    {
      value:
        "M1366,504.6V768H0V504.6c0,0,83.2,60.8,323.5,68.9c211,7.1,316-10,498-57c54.9-14.2,84-27,183-35c43.4-3.5, 324, 15.4, 361, 5.4"
    }
  ],
  easing: [0.5, 0, 0.5, 1],
  duration: anime.random(10000, 20000),
  loop: true,
  direction: "alternate"
});

app.morph4 = anime({
  targets: ".animate4",
  d: [
    {
      value:
        "M1366,636.3V768H0V636.3c0,0,184.5-4.8,356.5-18.8c210.3-17.1,276,28.9,467,31c215,2.3,262,42,346,35c43.2-3.6, 110-30, 196-56.1"
    }
  ],
  easing: [0.5, 0, 0.5, 1],
  duration: anime.random(10000, 20000),
  loop: true,
  direction: "alternate"
});

// works section carousel
new Glide(".glide", {
  type: "carousel",
  animationDuration: 1000
}).mount();

//event listeners
app.init = () => {
  //smooth scroll
  $anchor.smoothScroll();
  //on click of the hamburger menu icon change to "x" and display menu
  $menu.on("click", () => {
    $span.toggleClass("open");
    $dropDownMenu.toggleClass("open");
  });
  //on the click of a link in the drop down menu close the menu and change icon from "x" to hamburger menu
  $dropDownLinks.on("click", () => {
    $span.toggleClass("open");
    $dropDownMenu.toggleClass("open");
  });
  //add a fixed menu when user scrolls out side of header
  $(document).scroll(() => {
    const position1 = $about.offset().top;
    const scrollPos = $(document).scrollTop();

    if (scrollPos === 0 || scrollPos < position1) {
      $desktopMenu.removeClass("fixed");
    } else if (scrollPos >= position1) {
      $desktopMenu.addClass("fixed");
    }
  });
};

//document ready
$(function() {
  app.init();
});
