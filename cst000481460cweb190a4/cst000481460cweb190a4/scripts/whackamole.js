"use strict";

/*
 Filename:    whackamole.js
 Student:     Jaydeep Kanubhai Patel (cst000481460)        <-- Your name and CST # go here!
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        18/4/2022
 Purpose:     JavaScript for Whack-A-Mole game, Assignment #4, CWEB 190 Winter 2022
*/

// Number of mole holes

const NUM_HOLES = 16;
let holesString = "";
let RegularMole = 0;
let SpecialMole = 0;
let TotalPoints = 0;

for (let i = 1; i <= NUM_HOLES; i++) {
    holesString += `<div class="allholes" id="hole${i}"></div>`
}

document.getElementById("holes").innerHTML = holesString;

const grounds = document.querySelectorAll(".allholes");

//==I am setting regular mole image and special mole image and hiding it. ----------------------------------------------

for (let i = 1; i <= NUM_HOLES; i++)
{
    let plate = document.getElementById("hole"+i);
    plate.innerHTML = `<img src="images/newmole.png" id="holeimg${i}" alt="regular mole">`;
}

for (let i = 1; i <= NUM_HOLES; i++)
{
    let plate = document.getElementById("hole"+i);
    plate.innerHTML += `<img src="images/newmole2.png" id="holeimg${i + NUM_HOLES}" alt="special mole">`;
}

for (let i = 1; i <= NUM_HOLES; i++)
{
    let plate2 = $("#holeimg"+i);
    plate2.hide();
}
for (let i = 1; i <= NUM_HOLES; i++)
{
    let plate2 = $("#holeimg"+(i+NUM_HOLES));
    plate2.hide();
}



//==I am generating random number for Hole and making sure that there is no repeat---------------------------------------
let count = 0;
let lastHole = 100;
let lastMole = 100;
let activehole;
let plate3;


function randomHole()
{
    let random2 = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    if(lastHole === random2)
    {
        random2 = random2 + 1;
    }

    return random2;
}

//==I am generating random number for Mole and making sure that there is no repeat---------------------------------------

//--I am generating random number between 1 to 4. if random is 1 to 3 then regular Mole. if random is 4 then special mole

function randomMole()
{
    let random2 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(lastMole === random2)
    {
        random2 = random2 + 1;
    }

    return random2;
}


let moleType;
$(document).ready(function ()
{
    //---displaying cookie msg------------------------------------------------------------
    let cookieValue = document.cookie.split("=");
    if (cookieValue.length===1)
    {
        $("#points").append("<span><strong><em>There is no any Cookie for Previous Score, Play once and then check here</em></strong></span>");
    }
    else
    {
        $("#points").append("<span><em>previous points from COOKIE was  :"+cookieValue[1]+"</em></span>");
    }


    //-- RESET everything on button Start ----------------------------------------------
    $("#btnStart").on( "click", () => {


            let plate2 = $("#holes");
            plate2.slideDown();
            $("#points").empty();

        $("#numRegular").empty();
        $("#numSpecial").empty();
        $("#numPoints").empty();
        grounds.forEach((e) => {
            $(e).css('opacity','1');
            $("#results").slideUp();
        });
         count = 0;
         lastHole = 100;
         lastMole = 100;
         activehole = "";
         plate3 = "";
         RegularMole = 0;
         SpecialMole = 0;
         TotalPoints = 0;

        //------after reset call animate-----------------------
        animate();
    }
    );

    //------animate function will choose random hole and mole from their functions
    function animate()
    {
        let random = 0;
        $("#btnStart").attr("disabled", true);


        //---making sure that no Active hole is repeated by using DO WHILE loop------

        do {

            let random = randomHole();
            moleType = randomMole();

            if (moleType === 4)
            {
                plate3 = $("#holeimg"+(NUM_HOLES+random));
            }
            else if (moleType === 1||moleType === 2||moleType === 3)
            {

                plate3 = $("#holeimg"+random);

            }



            activehole =  document.getElementById("hole"+random);

        }while (activehole.classList.contains("active"));

        //====Adding and removing appropriate classes to identify active hole and mole type.

            count++;
            activehole.classList.add("active");
            if(moleType===4)
            {
                activehole.classList.add("special");
            }
            else
            {
                activehole.classList.add("regular");
            }
            plate3.fadeIn(500);

            //===if active moles are more than SIX then show lose screen otherwise repeat the process--------------

            if (count>6)
            {
                showLoseScreen();
            }
            else
            {
                setTimeout(() => {

                    lastHole = random;
                    lastMole = moleType;
                    animate();
                }, 500);
            }
    }
});

//=====lose screen will display total point and previous points from cookies.----------------------------------

function showLoseScreen()
{
    $("#points").empty();

    let cookieValue = document.cookie.split("=");
    if (cookieValue.length===1)
    {
        $("#points").append("<span><em>There is no any Cookie for Previous Score,<strong> Refresh and then check here </em></strong></span>");
    }
    else
    {
        $("#points").append("<span><em>previous points from COOKIE was  :"+cookieValue[1]+"</em></span>");
    }

     let expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
     document.cookie = `Score=${TotalPoints}; expires= ${expires + (86400)} ;path=/;`
    //document.cookie = `Score=${TotalPoints};`
    $("#numRegular").append("<span>"+RegularMole+"</span>");
    $("#numSpecial").append("<span>"+SpecialMole+"</span>");
    $("#numPoints").append("<span>"+TotalPoints+"</span>");



    grounds.forEach((e) => {
        $(e).css('opacity','0.5');
        e.classList.remove("active");

    });

    $("#results").fadeIn('slow');

    $("#btnStart").attr("disabled", false);
    for (let i = 1; i <= NUM_HOLES; i++)
    {
        let plate2 = $("#holeimg"+i);
        plate2.hide();
    }
    for (let i = 1; i <= NUM_HOLES; i++)
    {
        let plate2 = $("#holeimg"+(i+NUM_HOLES));
        plate2.hide();
    }
    let plate2 = $("#holes");
    plate2.slideUp();


}

//--------------when someone click on any ground then this code will check if it is active or not, it will also check mole type and assign marks accordingly.


grounds.forEach((e) => {
    e.addEventListener("click", () => {



        if (e.classList.contains("active")) {

            count--;
            console.log("Decrease ======="+count);

            if(e.classList.contains("special"))
            {
                e.classList.remove("special");
                SpecialMole++;
                TotalPoints = TotalPoints + 10000;


            }
            else
            {
                e.classList.remove("regular");
                RegularMole++;
                TotalPoints = TotalPoints + 111;


            }
            console.log(TotalPoints);
            console.log(RegularMole);
            console.log(SpecialMole);

           let mole1img = $(e.firstChild);
            let mole2img =  $(e.lastChild);
            mole1img.slideUp();
            mole2img.slideUp();
            $("#points").empty();

            $("#points").append("<span>Points :"+TotalPoints+"</span>");
            e.classList.remove("active");

            activehole = "";

        }
    });
});




//== thank you so much--------------------------------------


//===============================================


