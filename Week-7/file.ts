let myName:string = "Fawaz";
//string
let scores:number[] = [10,20,30];
//array of numbers
let student:[string, number] = ["John", 20];
//tuple

type Point =  {
x:number
y:number
}

function printCoord(pt: Point)
{
    console.log(`The coordinate's x value is ${pt.x}`)
    console.log(`The coordinate's y value is ${pt.y}`)
}

printCoord({x:100,y:200})