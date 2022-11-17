"use strict";

let data;
function submitNow()
{

    let name = document.getElementById("parkingForm").elements[1].value;
    let separateName = name.trim().split(", ");
    let propername = separateName[1] + " " + separateName[0];
    let license = document.getElementById("parkingForm").elements[2].value;
    let parkingpass = document.getElementById("parkingForm").elements[3].value;
    let platelist = document.getElementById("plate");
    let helper = parkingpass+": "+propername;
    
    platelist.add(new Option(license.toUpperCase(),helper,true,true));
    
    $("#plate").html($("#plate option").sort(function (a, b)
    {
        return a.text == b.text ? 0 : a.text < b.text ? -1 : 1
    }))

    data = platelist.options[platelist.selectedIndex].value;
    document.getElementById("selectedData").value = data;
    
    
    update();
    function update()
    {
       document.getElementById("initial").innerHTML = "";

       $("ul").prepend("<li>"+ license.toUpperCase() +"</li>");

        document.getElementById("fullName").value = "";
        document.getElementById("licensePlate").value = "";
        document.getElementById("parkingPass").value = "";
    }
}

document.cookie = "userid=geeky";
window.alert(document.cookie);




$(function(){ $("#plate").on("change",displaySelected ) });

function displaySelected()
{
    let platelist = document.getElementById("plate");
     data = platelist.options[platelist.selectedIndex].value;
    document.getElementById("selectedData").value = data;
}

jQuery.validator.addMethod("testName", function(value, elem)
        {
        return this.optional(elem) || /^([\s]+)?[a-zA-Z]+,\s[a-zA-Z]+([\s]+)?$/.test(value);
        }, "Please enter full name in the form Lastname, Firstname")

jQuery.validator.addMethod("testType", function(value, elem)
        {
            return this.optional(elem) || /^[\w]+([\s|-]\w+)*$/.test(value);
        }, "this is not a correct format for plate number");


$(function() {
    $("#parkingForm").validate({
        rules: {
            fullName: {
                testName: true
            },
            licensePlate: {
                testType: true,
                minlength: 1,
                maxlength:7
            },
            parkingPass: {
                min:1,
                max:999
            }
        },
        messages: {
            fullName: {
                required: "your full name is required",
                minlength: "Name must include at least 2 characters"
            },
            licensePlate: {
                required: "your license plate is required"
            },
            parkingPass:{
                required:"your parking pass number in required"
            }
        },
        submitHandler: submitNow
    });
});
