"use strict";

/*
   Filename: q1.js
   Author:   YOURNAME (cst###)
   Date:     Winter 2022
   Purpose:  CWEB 190 Midterm 2 Part 2 Question 1
 */


/*
    Function:   rollD20
    Purpose:    Generates a random integer between 1 and a 20 (inclusive)
                Currently biased to roll extra 20's
    Parameters: none
    Returns:    a random integer between 1 and 20
 */
function rollD20() {
    const dieResult = Math.floor(Math.random() * 20 + 1);
    return Math.random() < 0.25 ? 20 : dieResult; // biased to roll 20's more often
}


$(function() {
    jQuery.validator.addMethod("containsOne", function(value, elem) {
        return this.optional(elem) || /1/.test( value );
    }, "User id must contain the digit 1 in some position");

    $("#diceform").validate({
        rules: {
            userId: {
                containsOne: true,
                //pattern: /1/,
                pattern: /^[a-z]{2}\d{4}$/i,
            }
        },
        messages: {
            userId: {
                required: "You must enter a user id",
                pattern: "User id must contain 2 letters followed by 4 digits"
            },
            rollType: {
                required: "You must choose a roll type"
            }
        },
        submitHandler: processRoll
    });


    document.getElementById("btnCheckForTwenty").onclick = function() {
        let twentyCount = 0;

        let historyElement = document.getElementById("history");
        for (let i = 0; i < historyElement.children.length; i++) {
            if (historyElement.children[i].innerText.includes("rolled 20")) {
                twentyCount++;
            }
        }

        //or
        // let twenties = historyElement.innerHTML.match(/rolled 20/g);
        // if (twenties === null) {
        //     twentyCount = 0;
        // } else {
        //     twentyCount = twenties.length;
        // }

        window.alert("A twenty was rolled " + twentyCount + " times");
    };


    function processRoll() {
        let roll;
        if (document.getElementById("normal").checked) {
            roll = rollD20();
            document.getElementById("txtRoll1").value = String(roll);
            document.getElementById("txtRoll2").value = "N/A"
        } else {
            let roll1 = rollD20();
            let roll2 = rollD20();
            document.getElementById("txtRoll1").value = String(roll1);
            document.getElementById("txtRoll2").value = String(roll2);
            if (document.getElementById("advantage").checked) {
                roll = roll1 > roll2 ? roll1 : roll2;
            } else {
                roll = roll1 < roll2 ? roll1 : roll2;
            }
        }
        document.getElementById("currentRoll").innerHTML = "Thus, your roll is: " + roll;

        const modifier = parseInt(document.getElementById("modifier").value, 10);
        let user = document.getElementById("userId").value;
        let log = user + " rolled " + roll + " plus " + modifier + " = " + (roll + modifier);
        document.getElementById("result").innerHTML = log;

        let historyElement = document.getElementById("history");
        if (historyElement.innerText === "No results yet") {
            historyElement.innerHTML = "";
        }
        historyElement.innerHTML += "<li>" + log + "</li>"
    }
});
