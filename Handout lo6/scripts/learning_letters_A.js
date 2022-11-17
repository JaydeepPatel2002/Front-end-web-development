"use strict";

/*
 Filename:    learning_letters_A.js
 Student:     Michael Grzesina (cst000)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        2021-04-06
 Purpose:     
*/

$(document).ready(function() {
    console.log("Targets: " + $(".target").length); /* Step 2 */

    $("#choices").on("click", function() { /* Step 3 */
        $(this).hide();
        $("#displayChoices").find("span").text("+"); /* Step 6 */
    });

    $("#displayChoices").on("click", function() { /* Steps 4 & 5 */
        $("#choices").toggle();
        if ($(this).find("span").text() === "+") { /* Step 6 */
            $(this).find("span").text("-");
        } else {
            $(this).find("span").text("+");
        }
    });

    $("#game header").on("click", function() { /* Step 7 */
        $(this).slideUp(1000);
    });

    $(".target").hover(function() { /* Step 8 */
        $(this).css("background-color", "lightgreen")
    }, function() {
        $(this).css("background-color", "");
    });

    $(".target").on("click", function() { /* Step 9 */
        $(this).text("\u2714"); /* Step 9a */
        $(this).addClass("selected"); /* Step 9b */
        $(this).fadeOut("slow"); /* Step 9c */
        $("#game header").slideUp(1000); /* Step 10 */

        if ($(".selected").length - 1 === $(".target").length) { /* Step 11 */
            $("#symbols").slideUp();
            $("#done").slideDown(1000);
        }
    });

    $("#done").on("click", function() { /* Step 12 */
        $("#game header").show();
        $("#done").hide();
        $("#symbols").show();
        $(".target").text("A").removeClass("selected").show();
    });
});