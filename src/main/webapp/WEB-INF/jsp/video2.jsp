<html>
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

<div class="container-fluid col-12">
<h2>Selector</h2>
<p>Remaining: ${contentslength}</p>
<form method="post" action="video2">
    
    <div class="container-fluid col-12" >
    <video width="400" controls>
  <source src="${image }" type="video/mp4">
</video>
    </div>
    <%-- <img class="image" src="/image/wallpaper.jpeg" width="auto" height="auto">--%>
    <div class="container-fluid">
<input type="hidden" value="${imageName }"  name="imageName"/>
<input type="hidden" value=""  name="crudFlag"/>
</div>
<br>
<br>
<br>
 <div class="btn-group col-12" style="height: 300px;">
<button type="button" class="btn btn-primary h-100" id="delete">'<-' DELETE</button>
<button type="button" class="btn btn-primary h-100" id="favourite">Favourite '->'</button>
</div>
</div>
</form>
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