<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #div2{
        width: 300px;
        height: 260px;
        background-color: rgb(0, 255, 195);
        margin-left: 35%;margin-top: 3px;

        border:2px solid gray;
              border-radius: 30px;
    }
    #div1{
     
       margin-left: 35%;
      
       
    }
    body{
        background-color:lightcyan;
    }
    .gray-color{
    width: 50px;
    height: 50px;
    background-color: chartreuse;
    margin-left: 17px;
    margin-top: 10px;
    border:2px solid gray;
    border-radius: 30px;
    }
    .gray-color3{
        width: 50px;
        height: 50px;
        background-color: orange;
        margin-left: 17px;
        margin-top: 10px;
        border:2px solid gray;
    border-radius: 30px;
        }
    .gray-color1{
            width: 50px;
            height: 50px;
            background-color: blue;
            margin-left: 17px;
            margin-top: 10px;
            border:2px solid gray;
    border-radius: 30px;
            }
            .gray-color2{
              width: 50px;
                height: 50px;
                background-color: red;
                margin-left: 17px;
                margin-top: 10px;
                border:2px solid gray;
    border-radius: 30px;
                }
    .inp{
        width: 290px;
        background-color: cornsilk;
        height: 100px;
        text-decoration-color: black;
        border:2px solid gray;
    border-radius: 30px;
    }
    h1{
        margin-left: 40%;
        margin-top: 10%;
        color: red;
        
    }
    .equal{
        width: 50px;
                height: 50px;
                background-color: hotpink;
                margin-left: 17px;
                margin-top: 10px;
                border:2px solid gray;
              border-radius: 30px;
    }
    .clear{
        width: 50px;
                height: 50px;
                background-color: hotpink;
                margin-left: 17px;
                margin-top: 10px;
                border:2px solid gray;
              border-radius: 30px;
    }
</style>
<body>
    <h1><b>Calculator</b></h1>
    <div id="div1">
        <input type="text" class="inp">
    </div>
    <div id="div2">
        <button type="button" class="btn gray-color" value="*">*</button>
        <button type="button" class="btn gray-color" value="/">/</button>
        <button type="button" class="btn gray-color" value="+">+</button>
        <button type="button" class="btn gray-color" value="-">-</button><br>

        <button type="button" class="btn gray-color1" value="9">9</button>
        <button type="button" class="btn gray-color1" value="8">8</button>
        <button type="button" class="btn gray-color1" value="7">7</button>
        <button type="button" class="btn gray-color1" value="6">6</button><br>
        <button type="button" class="btn gray-color2" value="5">5</button>
        <button type="button" class="btn gray-color2" value="4">4</button>
        <button type="button" class="btn gray-color2" value="3">3</button>
        <button type="button" class="btn gray-color2" value="2">2</button><br>
        <button type="button" class="btn gray-color3" value="1">1</button>
        <button type="button" class="btn gray-color3" value="0">0</button>
        <button type="button" class="equal btn" value="=">=</button>
        <button type="button" class="clear btn" value="c">C</button>
    </div>
    <script>
        let string="";
        let buttons=document.querySelectorAll(".btn");
        Array.from(buttons).forEach((button)=>{
            button.addEventListener('click',(e)=>{
                if(e.target.innerHTML=="=")
                {
                    string=eval(string);
                    document.querySelector(".inp").value=string;
                }
                else if(e.target.innerHTML=="C")
                {
                    string="";
                    document.querySelector(".inp").value=string;
                }
                else
                {
                    string=string+e.target.innerHTML;
                    document.querySelector(".inp").value=string;
                }
            });
            
        });
    </script>
</button body>
</button html>

