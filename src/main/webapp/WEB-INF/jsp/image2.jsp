<!DOCTYPE html>
<html lang="en">
<head>
    <title>Selector Gallery</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10">
                <!-- Content for upper div goes here -->
                <p>Remaining: ${contentslength}</p>
                <form method="post" action="image2">
                    <img class="image" src="data:image/jpeg;base64,${image}"  width="100%" height="auto" alt="Image">
                    <input type="hidden" value="${imageName}" name="imageName"/>
                    <input type="hidden" value="" name="crudFlag"/>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                        <button type="button" class="btn btn-primary h-100 w-45" id="delete">'<-' DELETE</button>
                        <button type="button" class="btn btn-primary h-100 w-45"  id="favourite">Favourite '->'</button>
            </div>
        </div>
    </div>

    <script>
        document.onkeydown = function(e) { 
            switch (e.keyCode) { 
                case 37: // 'Left Key pressed!'; 
                    document.forms[0].crudFlag.value="M";
                    document.forms[0].submit();
                    break; 
                case 39: //'Right Key pressed!';
                    document.forms[0].crudFlag.value="F";
                    document.forms[0].submit();
                    break; 
            } 
        }; 
        
        $(document).ready(function(){
            $("#delete").click(function(){
                document.forms[0].crudFlag.value="M";
                document.forms[0].submit();
            });
            $("#favourite").click(function(){
                document.forms[0].crudFlag.value="F";
                document.forms[0].submit();
            });
        });
    </script>
</body>
</html>
