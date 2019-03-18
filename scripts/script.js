$text = $(".text");
$image = $(".image");
$worksH3 = $(".text h3");
$worksP = $(".text p");
$description = $(".description");
$anchor = $("a");
$image = $(".image");
$menu = $(".menu");
$about = $(".about");

app = {}

// app.morph1 = anime({
//   targets: ".animate1",
//   d: [
//     {
//       value:
//         "M0.5,117.316677 L0.5,767.5 L1367.5,767.5 L1367.5,117.689229 C1278.13704,146.83055 1188.14338,161.401589 1097.52082,161.401589 C1006.69867,161.401589 866.472793,146.765459 676.840894,117.49543 C496.281935,92.9139276 351.315479,80.6235634 241.945941,80.6235634 C132.818813,80.6235634 52.3318067,92.8605091 0.499999947,117.316682 Z"
//     }
//   ],
//   easing: "easeInQuad",
//   duration: anime.random(7000, 10000),
//   loop: true,
//   direction: "alternate"
// });

// app.morph2 = anime({
//   targets: ".animate2",
//   d: [
//     {
//       value:
//         "M0.5,277.615018 L0.5,767.5 L1367.5,767.5 L1367.5,277.388142 C1287.23078,256.859282 1206.30765,246.594975 1124.72966,246.594975 C1043.01205,246.594975 936.804259,256.894278 806.099665,277.495524 C658.077941,297.435178 510.580417,307.405028 363.607236,307.405028 C216.933548,307.405028 95.8990033,297.475837 0.49999998,277.615017 Z"
//     }
//   ],
//   easing: "easeInQuad",
//   duration: anime.random(7000, 10000),
//   loop: true,
//   direction: "alternate"
// });

// app.morph3 = anime({
//     targets: ".animate3",
//     d: [
//         {
//             value:
//                 "M0.5,424.399209 L0.5,767.5 L1367.5,767.5 L1367.5,424.604562 C1285.09723,440.320417 1186.63924,448.177584 1072.12426,448.177584 C964.075993,448.177584 862.976387,446.946181 773.728222,444.007761 C658.968398,440.229391 572.963685,433.878949 523.406229,424.491263 C481.789521,416.607797 444.715913,411.588386 406.559808,408.546959 C358.529254,404.718439 321.906709,404.048695 216.994213,404.048695 C132.513147,404.048695 60.3477563,410.832923 0.499999993,424.39921 Z"
//         }
//     ],
//     easing: "easeInQuad",
//     duration: anime.random(7000, 10000),
//     loop: true,
//     direction: "alternate"
// });

// app.morph4 = anime({
//   targets: ".animate4",
//   d: [
//     {
//       value:
//         "M0.5,553.683239 L0.5,767.5 L1367.5,767.5 L1367.5,553.348409 C1286.11538,523.327848 1201.46121,508.317704 1113.53474,508.317704 C994.911126,508.317704 858.256348,526.527493 747.60656,553.48579 C738.505683,555.703093 729.551761,558.052658 719.817425,560.74982 C714.809548,562.137388 709.752032,563.571758 703.42311,565.391777 C701.419127,565.968065 690.577631,569.09831 687.491764,569.983837 C646.748825,581.675519 620.333633,587.685391 581.820034,592.78538 C533.006492,599.249293 471.460774,602.533962 387.94938,602.533962 C232.446119,602.533962 103.297245,586.251943 0.49999998,553.683237 Z"
//     }
//   ],
//   easing: "easeInQuad",
//   duration: anime.random(7000, 10000),
//   loop: true,
//   direction: "alternate"
// });
new Glide(".glide", {
    type: "carousel",
    animationDuration: 1000
}).mount()
app.init = () => {
    $anchor.smoothScroll();
    console.log("here we go");
    $image.hover(() => {
        $(".description").addClass("visible");
    }, () => {
        $(".description").removeClass("visible");
    });
    $menu.on("click", ()=> {
        $("span").toggleClass("open");
        $(".dropDownMenu").toggleClass("open");
    })
    $(".dropDownMenu a").on("click", ()=> {
        $("span").toggleClass("open");
        $(".dropDownMenu").toggleClass("open");
    })
    $(document).scroll(()=> {
        const position1 = $about.offset().top;
        const scrollPos = $(document).scrollTop();

        if(scrollPos === 0 || scrollPos < position1) {
            $menu.removeClass("white");
        } else if (scrollPos >= position1) {
            $menu.addClass("white");
        }
    })
    

}
$(function(){
    app.init()
})