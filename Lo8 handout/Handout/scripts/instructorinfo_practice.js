"use strict";

window.onload = function() {
    document.getElementById("btnUpdate").onclick = function() {
        document.getElementById("name").innerText = "Michael Grzesina";
        document.getElementById("office").innerText = "Room 240A.5";
        document.getElementById("phone").innerText = "306-659-4231";
    }

   


    document.getElementById("btnUpdateFetch").onclick = function() {
        fetch("data/oneinstructor.json").then(function(response) {
            if (response.ok) {
                
                return response.json();
            }
            throw new Error("Network response was not OK: " + response.status);
        }).then(function(jsonObject){
            document.getElementById("name").innerText = jsonObject.name;
            document.getElementById("office").innerText = jsonObject.office;
            document.getElementById("phone").innerText = jsonObject.phone;
        }).catch(function(error) {
            console.log("Problem with the fetch operation: " + error.message);
        });
    };


    document.getElementById("btnUpdateAll").onclick = function() {
        fetch("data/allinstructors.json").then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not OK: " + response.status);
        }).then(function(jsonArray) {
            let names = [];
            let offices = [];
            // just to show we could use a string instead of an array
            let phones = "";

            for (const instructor of jsonArray) {
                names.push(instructor.name);
                offices.push(instructor.office);
                phones += instructor.phone + ", ";
            }

            document.getElementById("name").innerText = names.join(", ");
            document.getElementById("office").innerText = offices.join(", ");
            document.getElementById("phone").innerText = phones.slice( 0, -2 );
        }).catch(function(error) {
            console.log("Problem with the fetch operation: " + error.message);
        });
    };
};

