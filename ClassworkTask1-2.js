<!DOCTYPE html>
<html>
<head>
<script type="text/javascript">
var imgObj = null;          
function init() {
imgObj = document.getElementById('myImage');
imgObj.style.position= 'relative'; 
imgObj.style.left = '0px'; 
}
function moveRight() {
imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}         
window.onload = init;
</script>
<style>
.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
}
.button1:hover {
  background-color: #4CAF50;
  color: white;
}
</style>
</head>
<body>

<form id="frm1" method="get" action="/action_page.php">
  <label for="fname">Email:</label>
  <input type="text" id="email" name="email">
  <label for="lname">Subscribe:</label>
  <input type="text" id="subscribe" name="subscribe">
  <button type="submit" form="frm1" value="Submit" class="button button1">Submit</button><br><br>
  <img id="myImage" src="img_girl.jpg" alt="Girl in a jacket" style="position: relative; left: 10px; "width="100" height="100">
  <p>Click button below to move the image to right</p>
  <input type="button" value="Click Me" onclick="moveRight();">
</form>
</body>
</html>
