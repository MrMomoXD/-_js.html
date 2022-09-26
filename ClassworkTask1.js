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

<form id="frm1" action="/action_page.php">
  Email: <input type="text" name="email">
  Subscribe: <input type="text" name="subscribe"><br><br>
</form>
<button class="button button1">Confirm</button>

</body>
</html>
