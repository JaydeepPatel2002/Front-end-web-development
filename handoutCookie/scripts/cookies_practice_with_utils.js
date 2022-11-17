"use strict";

/*
 Filename:    cookies_practice.js
 Student:     Michael Grzesina (cst000)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        2021-04-16
 Purpose:     
*/

$(document).ready(function() {
    $("#displayButton").on("click", function() {
        $("#cookieValues").text(document.cookie);
    });

    $("#setButton").on("click", function() {
        let cookieName = $("#nameField").val();
        let cookieValue = $("#valueField").val();

        let days = 0; // 0 days will create a session cookie

        if ($("[name=cookieType]:checked").val() === "persistent") {
            // Set the expiration date to 7 days in the future
            days = 7;
        }

        setCookie(cookieName, cookieValue, days);
    });
});