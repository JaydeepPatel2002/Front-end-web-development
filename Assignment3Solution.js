"use strict";

var platesAdded = 0 ;

$("#plate").on("change", function() {
    displayPlateData(this);
})

displayPlateData(document.getElementById("plate"));

function nameSwitch(fullName) {
    fullName = fullName.trim();
    return fullName.split(", ").reverse().join(" ");
}

function addVehicle(f){
    platesAdded++;
    
    var nameInput = $("#fullName");
    var plateInput = $("#licensePlate");
    var passInput = $("#parkingPass");

    var name = nameInput.val();
    var plate = plateInput.val().toUpperCase();
    var passNumber = passInput.val();

    var newOpt = document.createElement("option");
    newOpt.value = passNumber + ": " + nameSwitch(name);
    newOpt.innerHTML = plate;

    var found = false;
    var plateSelect = document.getElementById("plate");
    var foundIndex = 0;
    for(var i = 0 ; i < plateSelect.options.length; i++) {
        if(plate < plateSelect.options[i].innerHTML) {
            plateSelect.insertBefore(newOpt, plateSelect.options[i]);
            found = true;
            foundIndex = i;
            break;
        }
    }

    if(!found)
    {
        plateSelect.appendChild(newOpt);
    }

    plateSelect.selectedIndex = foundIndex;
    displayPlateData(plateSelect);

    if(platesAdded === 1){
        $("p:last").remove();
        $("body").append("<ul></ul>");
    }
    $("ul:last").prepend("<li>" + plate + "</li>");
    nameInput.val("");
    plateInput.val("");
    passInput.val("");
}

// Test to ensure that the full name is in the proper format
function nameTester(value, elem) {
    return this.optional(elem) ||
    /^([A-Za-z ]*[A-Za-z], [A-Za-z][A-Za-z]*)$/.test(value);
}
jQuery.validator.addMethod("nameChars", nameTester, 
 "Please enter the full name in the form LastName, FirstName");

// Test to ensure that the license plate number is in the proper format
function plateTester(value, elem) {
    return this.optional(elem) ||
    /^([0-9A-Z]|[0-9A-Z][0-9A-Z -]{0,5}[0-9A-Z])$/.test( value.toUpperCase() );
}

jQuery.validator.addMethod("plateChars", plateTester, 
    "Must be a valid license plate number");

// Test to ensure that the parking pass number is in the proper format
function passTester(value,elem) {
    return this.optional(elem) ||
        /^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$/.test(value);
}

jQuery.validator.addMethod("passChars", passTester, 
    "Must be a number from 1-999");

$(function () {
    $("#parkingForm").validate( {
        rules: {
            fullName: "required nameChars",
            licensePlate: "required plateChars",
            parkingPass: "required passChars"
        },
        messages: {
            fullName: "Please enter the full name in the form LastName, FirstName"
        },
        submitHandler: addVehicle
    });
});

function displayPlateData(p) {
    $("#selectedData").val(p.options[p.selectedIndex].value);
}