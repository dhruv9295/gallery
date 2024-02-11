<!DOCTYPE html>
<html lang="en">
<head>
  <title>Gallery V2</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script src="js/Gallery.V1.0.js"></script>
  
  <style>
  #overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 2;
  cursor: pointer;
}
  </style>
</head>
<body>

<div class="container-fluid">
<div class="container-fluid col-12">
<div class="btn-group row col-12" >
  <div class="btn-group  col-6">
    <button type="button" class="btn btn-primary dropdown-toggle col-12" data-toggle="dropdown" >
       WALLPAPERS
    </button>
    <div class="dropdown-menu col-12">
	  <option class="btn dropdown-item" value="1">Wallpapers</option>
	  <option class="btn dropdown-item" value="2">Anime</option>
	  <option class="btn dropdown-item" value="3">Selected</option>
	  <option class="btn dropdown-item" value="4">New</option>
	  <option class="btn dropdown-item" value="5">Wall2</option>
	  <option class="btn dropdown-item" value="6">NewAnime</option>
	  <option class="btn dropdown-item" value="7">RBulk</option>
	  <option class="btn dropdown-item" value="8">BBulk</option>
    </div>
  </div>
  <select class="btn btn-primary dropdown-menu" name="categList" id="categList">
	  <option class="btn dropdown-item" value="1">Wallpapers</option>
	  <option class="btn dropdown-item" value="2">Anime</option>
	  <option class="btn dropdown-item" value="3">Selected</option>
	  <option class="btn dropdown-item" value="4">New</option>
	  <option class="btn dropdown-item" value="5">Wall2</option>
	  <option class="btn dropdown-item" value="6">NewAnime</option>
	  <option class="btn dropdown-item" value="7">RBulk</option>
	  <option class="btn dropdown-item" value="8">BBulk</option>
</select>
  <button type="button" class="btn btn-primary col-6" id="config" data-toggle="collapse" data-target="#confTable">Configure</button>
</div>
</div>

<div class="container-fluid collapse" id= "confTable">
<table class="table table-bordered ">
<tr>
<td>Count</td><td><input type="input" class="form-control" id="count" ></input></td>
<td>Lower Limit</td><td><input type="input" class="form-control" id="lowerLimit" ></input></td>
<td>Upper Limit</td><td><input type="input" class="form-control" id="upperLimit" ></input></td>
<td>Current</td><td><input type="input" class="form-control" id="x" ></input></td>
</tr>
<tr>
<td>File Path</td><td><input type="input" class="form-control" id="filePath" ></input></td>
<td>File Format</td><td><input type="input" class="form-control" id="fileFormat" ></input></td>
<td>Random Toggle</td><td><input type="input" class="form-control" id="randomToggle" ></input></td>
<td>Slide Show</td><td><input type="input" class="form-control" id="slideshow" ></input></td>
</tr>
<tr>
<button type="button" class="btn btn-primary col-12" id="submitConf">Submit</button>
</tr>
</table>
</div>
<div class="d-flex flex-wrap" id= "container">

</div>
<div class="container-fluid btn-group fixed-bottom">
<button type="button" class="btn btn-primary" id="previous">'<-' Previous</button>
<button type="button" class="btn btn-primary" id="nextImg">Next '->'</button>
<button type="button" class="btn btn-primary" id="increase">Increase '>'</button>
<button type="button" class="btn btn-primary" id="decrease">Decrease '<' </button>
<input type="button" class="btn btn-primary" id="fileNumber" value=""></input>
<input type="button" class="btn btn-primary" id="randomToggleid" value="Random 'R'"></input>
<input type="button" class="btn btn-primary" id="slideshowid" value="SlideShow 'S'"></input>
<button type="button" class="btn btn-primary" id="favouriteid">Favourite 'F'></button>
</div>
</div>
<div id="overlay" align="center"></div>
</body>
</html>