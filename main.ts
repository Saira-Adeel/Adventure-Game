#!/usr/bin/env node
import inquirer from "inquirer"
class Player{
    name:string;
    fule:number=100;
    constructor(name:string){
        this.name=name;
    }
     fuleDecrease(){
        let fule=this.fule -25
        this.fule=fule
     }
     fuleIncrease(){
        this.fule=100
     }
}
class Opponent{
    name:string;
    fule:number=100;
    constructor(name:string){
        this.name=name;
    }
    fuleDecrease(){
        let fule=this.fule -25
        this.fule=fule
     }
}
let player=await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"Please enter your name"
    }
])
let opponent=await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"Please select your opponent",
        choices:[,"skeleton","aliens","zombi"]
    }
])
let P1=new Player(player.name) 
let O1=new Opponent(opponent.select)
do{
    //skeleton
    if (opponent.select =="skeleton"){
        let ask=await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What would you like to do",
                choices:["Attack","Drink portion","Run for your life"]
            }
        ]);
        if (ask.opt =="Attack"){
            let num =Math.floor(Math.random() *2)
            if(num>0){
                P1.fuleDecrease()
                console.log(`${P1.name}fule is${P1.fule}`);
                console.log(`${O1.name}fule is${O1.fule}`);
                if (P1.fule<=0){
                    console.log("You loose the game better luck for next");
                    process.exit()
                }
            }
            if (num<=0){
                O1.fuleDecrease()
                console.log(`${P1.name}fule is${P1.fule}`);
                console.log(`${O1.name}fule is${O1.fule}`);
                if(O1.fule<=0){
                    console.log("You win the game");
                    process.exit()
                }
                
            }
        }
        if (ask.opt =="Drink portion"){
            P1.fuleIncrease()
            console.log(`You drink health portion and now your fule is${P1.fule}`)
        }
        if (ask.opt=="Run for your life"){
            console.log("you loose the game better luck for next time");
            process.exit()
        }
    }   
    //aliens
    if (opponent.select =="aliens"){
        let ask=await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What would you like to do",
                choices:["Attack","Drink portion","Run for your life"]
            }
        ]);
        if (ask.opt =="Attack"){
            let num =Math.floor(Math.random() *2)
            if(num>0){
                P1.fuleDecrease()
                console.log(`${P1.name}fule is${P1.fule}`);
                console.log(`${O1.name}fule is${O1.fule}`);
                if (P1.fule<=0){
                    console.log("You loose the game better luck for next");
                    process.exit()
                }
            }
            if (num<=0){
                O1.fuleDecrease()
                console.log(`${P1.name}fule is${P1.fule}`);
                console.log(`${O1.name}fule is${O1.fule}`);
                if(O1.fule<=0){
                    console.log("You win the game");
                    process.exit()
                }
                
            }
        }
        if (ask.opt =="Drink portion"){
            P1.fuleIncrease()
            console.log(`You drink health portion and now your fule is${P1.fule}`)
        }
        if (ask.opt=="Run for your life"){
            console.log("you loose the game better luck for next time");
            process.exit()
        }
    } 
    //zombi
    if (opponent.select =="zombi"){
        let ask=await inquirer.prompt([
            {
                name:"opt",
                type:"list",
                message:"What would you like to do",
                choices:["Attack","Drink portion","Run for your life"]
            }
        ]);
        if (ask.opt =="Attack"){
            let num =Math.floor(Math.random() *2)
            if(num>0){
                P1.fuleDecrease()
                console.log(`${P1.name}fule is${P1.fule}`);
                console.log(`${O1.name}fule is${O1.fule}`);
                if (P1.fule<=0){
                    console.log("You loose the game better luck for next");
                    process.exit()
                }
            }
            if (num<=0){
                O1.fuleDecrease()
                console.log(`${P1.name}fule is${P1.fule}`);
                console.log(`${O1.name}fule is${O1.fule}`);
                if(O1.fule<=0){
                    console.log("You win the game");
                    process.exit()
                }
                
            }
        }
        if (ask.opt =="Drink portion"){
            P1.fuleIncrease()
            console.log(`You drink health portion and now your fule is${P1.fule}`)
        }
        if (ask.opt=="Run for your life"){
            console.log("you loose the game better luck for next time");
            process.exit()
        }
    }    

}
while (true)