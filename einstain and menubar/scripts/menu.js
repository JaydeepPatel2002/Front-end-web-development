"use strict";

/*
 Filename:    menu.js
 Student:     Michael Grzesina (cst000)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        2021-04-06
 Purpose:     
*/

// $(document).ready(function() {
//     $("#menubar > li").hover(function() {
//         $("ul", this).show(200);
//     }, function() {
//         $("ul", this).hide(200);
//     });
// });
$(document).ready(function() {
$("#menubar > li").on("click", function () {
    let current = $("ul", this);
    current.toggle(200);
    $("ul", "ul").not(current).hide();
});
});