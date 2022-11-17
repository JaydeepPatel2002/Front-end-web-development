"use strict";

/*
 Filename:    simpleform-validated.js
 Student:     Michael Grzesina (cst000)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        2021-03-19
 Purpose:     
*/

window.onload = init;

function init() {
    document.getElementById("simpleFormID").onsubmit = handleSubmission;
    document.getElementById("name").oninput = handleName;
}


function handleSubmission(event) {
    event.preventDefault();

    handleName();
}


function handleName() {
    let element = document.getElementById("name");
    if (element.value.trim() === "") {
         alert("A name must be entered");
        document.getElementById("error").innerHTML = "Name field must not be blank";
        element.style.backgroundColor = "tomato";
    } else {
        // alert("Form data valid");
        document.getElementById("error").innerHTML = "";
        element.style.backgroundColor = "";
    }
}
