
//traffic light program
var color="Green";
if(color=="red")
{
    console.log("stop")
}
if(color=="yellow")
{
    console.log("Get ready")
}
if(color=="Green")
{
    console.log("Go")
}

//season of the year
var season="autumn";
if(season=="Spring")
{
    console.log("Enjoy the blooming flowers")
}
else if(season=="Summer")
{
    console.log("Have funin the sun")
}
else if(season=="autumn")
{
    console.log("Admire the colorful leaves")
}
else if(season=="winter")
{
    console.log("Bundle up and stay warm")
}

//score of a game

var score=80
if(score<50){
    console.log("You need to improve")
}
if(score>=50 && score<=70)
{
    console.log("Good job")
}
if(score>70)
{
    console.log("Excellent Peformance")
}

//print the number even or odd
var number=84
if(number%2==0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}


//vowel or consonant
var ch="E"
{ 
    if( ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u" )
    {
        console.log("It's a vowel")
    }
    else if
    (ch=="A" || ch=="E" || ch=="I" || ch=="O"||ch=="U" )
    {
        console.log("It's a vowel");
    }
else
{
    console.log("It's a consonant")
}

}

//for loop
for(count=1;count<=10;count=count+2)
{
    console.log(count)
}

//print the numbers 1to 10,in reverse order

for(count=10;count>=1;count=count-1)
{
    console.log(count)
}

//print only the even number from 1 to 10
for(count=2;count<=10;count=count+1)
{
    if(count%2==0)
    {
        console.log(count)
    }
}

//print two tables
for(i=1;i<=10;i=i+1)
{
    console.log(i+"*2=",i*2)
}







