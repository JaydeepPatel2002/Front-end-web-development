"use strict";
/*
   JAYDEEP KANUBHAI PATEL
   Computer systems technology (year 1)
   student id: 000481460
   date: 22/feb/2022

   */
//============================================Car  OBJECT========================================================================================//
function Car(id, image, vPosition)
{
    this.image = image;
    this.id = id;
    this.vPosition = vPosition;
    this.hPosition = "0px";
    this.finishedRace = false;
    this.wins = 0;

    this.draw = function()
    {
        return "<img src= \"" + this.image + "\" alt=\"car2\" id=\""+this.id+"\" style=\"position: absolute; left:"+this.hPosition+"; top:"+this.vPosition +"px" +";  \"/>";
    }

    this.move = function ()
    {
        let random = Math.floor(Math.random() * (150 - 1 + 1) + 1);
        if(parseInt(this.hPosition) < 1000)
        {
            this.hPosition = parseInt(this.hPosition) + random + "px";
            document.getElementById(""+this.id).style.left = this.hPosition;
            console.log(random);
            console.log(this.hPosition);
        }
        else if(parseInt(this.hPosition) > 1000)
        {

            this.finishedRace = true;
        }

    }
    this.resetCar = function ()
    {
        this.finishedRace = false;
        this.hPosition = "0px";
    }

}
//=================================================RACE   OBJECT=============================================================================================//

function Race(carArray)
{

    this.carArray = carArray;
    this.raceOver = false;
    this.standings = [];
    this.numCarsDone = 0;
    this.totalRaces = 0;


    this.drawCars = function ()
    {
        let src = document.getElementById("test");

        for (let i = 0; i < this.carArray.length; i++)
        {
            src.innerHTML += this.carArray[i].draw();

        }

    }
    this.moveCars = function ()
    {
        if (start && pixel500.standings.length<=4)
        {
            for (let i = 0; i < this.carArray.length; i++)
            {
                (!this.carArray[i].finishedRace)?this.carArray[i].move():this.addToStandings(this.carArray[i]);
            }
            if(pixel500.standings.length<4 && start)
            {

                setTimeout(timepass,250);

            }
            else
            {
                start = false;
                console.log(pixel500.standings[0].id);
                console.log(pixel500.standings[0].wins);
                document.getElementById("btnStartRace").disabled = true;
                document.getElementById("btnResetRace").disabled = false;
                document.getElementById("btnStatistic").disabled = false;

                pixel500.standings[0].wins++;
                console.log(pixel500.standings[0].wins);

            }
        }
    }


    this.addToStandings = function (Car)
    {
        if (!this.standings.includes(Car))
        {
            this.standings.push(Car);

            this.numCarsDone++;


        }
        if (this.numCarsDone=== 4)
        {
            this.raceOver = true;

        }
        if (this.raceOver=== true)
        {
            this.raceOver = false;

            document.getElementById("btnStartRace").disabled = false;


            window.alert("Statistics\n" +
                "Position 1 :  " + this.standings[0].id + "\n" +
                "Position 2 :  " + this.standings[1].id + "\n" +
                "Position 3 :  " + this.standings[2].id + "\n" +
                "Position 4 :  " + this.standings[3].id);
            this.numCarsDone++;

        }
    }

    this.resetCars = function ()
    {
        for (let i = 0; i < this.carArray.length; i++)
        {
            //this.carArray[i].hPosition = "0px";

            this.carArray[i].resetCar();
            this.carArray[i].draw();

        }
        let src = document.getElementById("test");
        src.innerHTML = "";

        this.drawCars();


        this.standings = [];
        this.numCarsDone = 0;
    }
}

//========================  'CLICKED()' FUNCTION WILL BE CALLED WHEN "START RACE" BUTTON IS CLICKED============================================

let start = false;
function clicked()
{
    start = true;
    document.getElementById("btnStatistic").disabled = true;
    document.getElementById("btnStartRace").disabled = true;

    console.log(pixel500.totalRaces);

    pixel500.totalRaces++;
    console.log(pixel500.totalRaces);


    pixel500.moveCars();

}

//===================== 'resetRace()' Function is called when "reset Race" Button is clicked==============================================

function resetRace()
{
    //start = false;
    document.getElementById("btnStartRace").disabled = false;
    document.getElementById("btnResetRace").disabled = true;


    pixel500.resetCars();

}
let pixel500;

window.onload = function()
{
    const cars = [
        new Car("Classic", "images/car1.png", 130),
        new Car("Bug", "images/car2.png", 280),
        new Car("Hatchback", "images/car3.png", 450),
        new Car("Sedan", "images/car4.png", 615)
    ];


    pixel500 = new Race(cars);
    console.log('resetCar' in pixel500.carArray[0]);
    console.log(typeof pixel500.numCarsDone);

    console.log(JSON.stringify(pixel500));
    console.log(pixel500);
    pixel500.drawCars();
    document.getElementById("btnResetRace").disabled = true;

}

//========================= 'statistics()' function is called when "View statistics" button is clicked====================================


function statistics()
{
    window.alert("Out of "+ pixel500.totalRaces +" races, the number of wins were as follows:\n" +
        pixel500.carArray[0].id +":  "+ pixel500.carArray[0].wins +"\n"+
        pixel500.carArray[1].id +":  "+ pixel500.carArray[1].wins +"\n"+
        pixel500.carArray[2].id +":  "+ pixel500.carArray[2].wins +"\n"+
        pixel500.carArray[3].id +":  "+ pixel500.carArray[3].wins );
}


//=========================== "timepass()" function is used to help "moveCars()" function ===================================================


function timepass()
{

    pixel500.moveCars();

}





























