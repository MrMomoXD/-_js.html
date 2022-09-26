<!DOCTYPE html>
<html>
<head>
<style>
.button {
  background-color: #4CAF50; /* Green */
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
</form>
<button type="submit" form="frm1" value="Submit" class="button button1">Confirm</button>

</body>
</html>
