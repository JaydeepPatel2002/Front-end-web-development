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
        let cookieString = encodeURIComponent(cookieName) + "="
            + encodeURIComponent(cookieValue);

        if ($("[name=cookieType]:checked").val() === "persistent") {
            // let dateString = "Wed, 30 Jun 2021 12:00:00 GMT";
            let expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 7);
            let dateString = expiryDate.toUTCString();

            cookieString += "; expires=" + dateString;
        }

        document.cookie = cookieString;
    });
});