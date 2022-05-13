/*
* Author:   Jaydeep kanubhai Patel (CST 000481460)
    Date:      3 february 2022
    * */
"use strict";
//first we will declare some variable
let mainCount = 0;

let NumOfDice;

let maintemp ;

let imageArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

let statarray = [];

let statistics = [];

let frequency = [];

let percentage = [];



//this function will run when button is clicked
function clicked()
{

    mainCount++;

    input();

    Validation();

    Animation();




}
//======================================================================================================================
function input()
{
    let src = document.getElementById("diceArea");
    src.innerHTML =" ";

    if(mainCount === 1)
    {

        NumOfDice = window.prompt("How many dice should be rolled?(1-5)");
        maintemp = NumOfDice;

        statGenerator();
        let button = document.getElementById('btnRoll').disabled = true;


    }
    else
    {

        NumOfDice = maintemp;
        let button = document.getElementById('btnRoll').disabled = true;


    }
}
//======================================================================================================================
function Validation()
{
    if (!NumOfDice < 6 || !NumOfDice > 0) {
        while (NumOfDice > 5 || NumOfDice < 1 || isNaN(parseInt(NumOfDice))) {
            if (NumOfDice === null) {
                window.alert("default value 2 will be used.");
                NumOfDice = 2;
                maintemp = NumOfDice;
                mainCount = 1;
                statistics = [2,3,4,5,6,7,8,9,10,11,12];
                frequency = [0,0,0,0,0,0,0,0,0,0,0];
                percentage = [0,0,0,0,0,0,0,0,0,0,0];

                break;
            }

            NumOfDice = window.prompt("Number of dices must be between 1 - 5 \n How many dice should be rolled?(1-5)");
            maintemp = NumOfDice;
            mainCount = 1;
            statGenerator();
        }
    }
}
//======================================================================================================================
function statGenerator()
{
    switch(maintemp) {
        case '1':
            statistics = [1,2,3,4,5,6];
            frequency = [0,0,0,0,0,0];
            percentage = [0,0,0,0,0,0];


            break;
        case '2':
            statistics = [2,3,4,5,6,7,8,9,10,11,12];
            frequency = [0,0,0,0,0,0,0,0,0,0,0];
            percentage = [0,0,0,0,0,0,0,0,0,0,0];

            break;
        case '3':
            statistics = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
            frequency = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            percentage = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

            break;
        case '4':
            statistics = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
            frequency = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            percentage = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

            break;
        case '5':
            statistics = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
            frequency = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            percentage = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

            break;
    }



}
//======================================================================================

function DiceRollar()
{
    let count = 0;


    while (NumOfDice !== 0)
    {
        let temp = Math.floor(Math.random()*6)+1;
        let src = document.getElementById("diceArea");
        src.innerHTML +="  <img src=\""+imageArray[temp - 1]+"\" id=\"image1\">";
        count += temp;
        NumOfDice--;
    }

    let button = document.getElementById('btnRoll').disabled = false;

    let srcagain = document.getElementById("pRolled");
    srcagain.innerHTML = "" + count;
    let srcagain2 = document.getElementById("pPreviousTenRolls");
    let para = document.getElementById("pTotalRolls");


    if(mainCount === 10)
    {
        statarray[mainCount-1] = count;
        srcagain2.innerHTML = "The previous 10 rolls were: " + statarray;
        para.innerHTML = "My statistics for a total of 10 rolls:";

        mainCount = 0;
        statarray = [];
    }
    else
    {
        statarray[mainCount-1] = count;

        srcagain2.innerHTML = "The previous "+ mainCount +" rolls were: " + statarray;
        para.innerHTML = "My statistics for a total of "+ mainCount +" rolls:";
    }
    let TABLE = document.getElementById("tblStats");

    for (let i = 0; i < statistics.length; i++)
    {
        if (count===statistics[i])
        {
            frequency[i]++;
        }
    }

    for (let i = 0; i < statistics.length; i++)
    {
        percentage[i] = (frequency[i]/mainCount)*100;
        if (mainCount === 0)
        {
            percentage[i] = (frequency[i]/10)*100;

        }
    }

    console.log(frequency);
    console.log(percentage);
    TABLE.innerHTML = "";
    let ROW = TABLE.insertRow(0);
    let IndexCell1 = ROW.insertCell(0);
    let IndexCell2 = ROW.insertCell(1);
    let IndexCell3 = ROW.insertCell(2);
    IndexCell1.innerHTML = "Roll";
    IndexCell2.innerHTML = "Frequency";
    IndexCell3.innerHTML = "percent of total rolls";

    for (let i = 0; i < statistics.length; i++)
    {
        let row = TABLE.insertRow(i + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = statistics[i];
        cell2.innerHTML = frequency[i];
        cell3.innerHTML = percentage[i].toFixed(3) + "%";
    }


}
//===============================================================================================
let picCount = 0;
let totalCount = 0;



function Animation() {



    (picCount >=5) ? picCount = 0 : picCount++;
    totalCount++;
    if (totalCount === 12)
    {
        totalCount=0;
        DiceRollar();


    }
    else
    {
        AnimateHelp();
        setTimeout(Animation, 150);
    }
}

function AnimateHelp() {

    let picDOM = document.getElementById("diceArea");
    picDOM.style.display = "block";

     for (let i = 0; i < NumOfDice; i++)
     {
         picDOM.innerHTML +="  <img src=\""+imageArray[(picCount + i)%5] +"\" id=\"image1\">" ;
     }
    setTimeout(display,150);



    function display()
    {
         picDOM.innerHTML = "";
    }
}













