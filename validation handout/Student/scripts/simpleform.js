"use strict";

/*
 Filename:    simpleform.js
 Student:     Michael Grzesina (cst000)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        2021-03-16
 Purpose:     
*/

window.onload = init;

function init() {
    document.getElementById("simpleFormID").onsubmit = handleSubmission;
}


function handleSubmission(event) {
    //alert("Form submission activated");
    event.preventDefault();

    //let elements = document.getElementsByTagName("input");
    let elements = document.getElementById("simpleFormID").elements;
    let length = elements.length;
    let outputString = "";

    for (let i = 0; i < length; i++) {
        outputString += "Element " + i + " - Name: " + elements[i].name;
        outputString += ", Type: " + elements[i].type;
        outputString += ", Value: " + elements[i].value;
        outputString += "\n";
    }

    alert(outputString);
    console.log(outputString);

    //return false;
}
