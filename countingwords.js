<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>word counter</title>
    <style>

        #textbox{
          background-color: aqua;
          margin: 0px 10px 10px 80px;
        }

        #div1{
           width: 400px;
           height: 400px;
            margin: 0% 20% 20% 20%;
        }

        #p{
            text-align: center;
            background-color: yellow;
        }

        h1{
            text-align: center;
            background-color: rgb(73, 140, 49);
        }

    </style>
</head>
<body>
    <div id="div1">
        <h1>Word and character counter</h1>
        <textarea id="textbox" cols="30" rows="10"></textarea>
        <p id="p">
           <span id="word">o</span> words and <span id="char">0</span> chharacter
        </p>    
    </div>
    <script>
        let textbox=document.getElementById("textbox");

        textbox.addEventListener('input',function(){
               var text=this.value;
               let char=text.length;
               document.getElementById("char").innerHTML=char;
               text=text.trim();
               let words=text.split(" ");
               document.getElementById("word").innerHTML=words.length;
        });
    </script>
    
</body>
</html>
