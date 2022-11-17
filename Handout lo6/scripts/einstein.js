"use strict";

/*
 Filename:    einstein.js
 Student:     Michael Grzesina (cst000)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        2021-03-30
 Purpose:     
*/

$(document).ready(function() {
    let jEinsteinImage = $("#einstein");
    console.log(jEinsteinImage);

    $("#hide").on("click", function() {
        jEinsteinImage.hide( "slow" );
    });

    $("#show").on( "click", () => jEinsteinImage.show( "fast" ) );

    $("#toggle").on( "click", () => jEinsteinImage.toggle( 1000 ) );

    $("#fadeout").on( "click", () => jEinsteinImage.fadeOut() );

    $("#fadein").on( "click", () => jEinsteinImage.fadeIn() );

    $("#slideup").on( "click", () => $("h1").slideUp("slow") );

    $("#slidedown").on( "click", () => $("h1").slideDown("fast") );

    $("#slidetoggle").on( "click", () => $("h1:first").slideToggle() );

    jEinsteinImage.on("mouseenter", function() {
        $(this).fadeOut(5000);
    });
});