<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .div1{
            width: 800px;
            height: 800px;
            margin: 0% 30% 0% 30%;
        }
        #img{
            width: 400px;
            height: 400px;
            padding-left:20% ;
        }
        h1{
            text-align: center;
        }
        .btn{
            display: inline-block;
            width: 20px;
            height: 20px;
            border: solid gray;

            border-radius: 50%;
        }
        #white{
        background-color: white;
        }
        #aqua{
       background-color: aqua;
        }
        #red{
        background-color: red;
        }
        #orange{
        background-color: orange;
        }
        #colorswitch{
            text-align: right;
        }
    </style>
</head>
<body>
    <div id="colorswitch">
        <span class="btn" id="white" onclick="changeBG('white')"></span>
        <span class="btn" id="aqua" onclick="changeBG('aqua')"></span>
        <span class="btn" id="red" onclick="changeBG('red')" ></span>
        <span class="btn" id="orange" onclick="changeBG('orange')"></span>
    </div>
    <div class="div1">
        <h1>About Us</h1>
        <img src="./KING.jpg" id="img">
        <p>
            If you want to access a modifier m defined in a contract C, you can use C.m to reference it without virtual lookup. It
    is only possible to use modifiers defined in the current contract or its base contracts. Modifiers can also be defined in
    libraries but their use is limited to functions of the same library.
    Multiple modifiers are applied to a function by specifying them in a whitespace-separated list and are evaluated in the
    order presented.
    Modifiers cannot implicitly access or change the arguments and return values of functions they modify. Their values
    can only be passed to them explicitly at the point of invocation.
    In function modifiers, it is necessary to specify when you want the function to which the modifier is applied to be run.
    The placeholder statement (denoted by a single underscore character _) is used to denote where the body of the function
    being modified should be inserted. Note that the placeholder operator is different from using underscores as leading or
    trailing characters in variable names, which is a stylistic choice.
    Explicit returns from a modifier or function body only leave the current modifier or function body. Return variables
    are assigned and control flow continues after the _ in the preceding modifier
        </p>
    </div>
    <script>
        function changeBG(color)
        {
            document.body.style.backgroundColor=color;
        }
    </script>
</body>
</html>
