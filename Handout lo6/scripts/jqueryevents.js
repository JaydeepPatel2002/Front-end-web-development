"use strict";

/*
 Filename:    jqueryevents.js
 Student:     Michael Grzesina (cst000)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        2021-03-26
 Purpose:     
*/

let face = new Image();
face.src = "media/HappyFaceSmile.jpg";


// $(document).ready(function() {
$(function() {
    // $("#italic").click(function() {
    //     $("p").addClass("special");
    // });
    $("#italic").click(function() {
        if ($(this).text() === "Italic") {
            $("p").addClass("special");
            $(this).html("<strong>Un</strong>Italic");
        } else {
            $("p").removeClass("special");
            $(this).html("Italic");
        }
    });

    $("#bold").click(function() {
        $("p").addClass("bold");
    });

    $("#undecorate").click(function() {
        $("p").removeClass("special bold");
    });

    let jFirst = $("#firstPara");

    jFirst.mouseover(function() {
        $(this).addClass("green");
    });

    jFirst.mouseout(function() {
        $(this).removeClass("green");
    });

    $("#secondPara").hover(function() {
        $(this).addClass("green");
    }, function() {
        $(this).removeClass("green");
    });

    jFirst.on("click", function() {
        $(this).addClass("invisible");
        $("#secondPara").removeClass("invisible");
    });

    $("#secondPara").on("click", function() {
        $(this).addClass("invisible");
        $("#firstPara").removeClass("invisible");
    });

    $("#myNewButton").on("click", function() {
        jFirst.off();
        $(this).val("Done").attr("disabled", true);
    });

    $("#happy").hover(function() {
        $(this).attr("src", "media/HappyFaceSmile.jpg").attr("alt", "Happy face");
    }, function() {
        $(this).attr("src", "media/HappyFaceNoSmile.jpg").attr("alt", "Initial face");
    });
});
