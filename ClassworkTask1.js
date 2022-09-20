<!DOCTYPE html>
<html>
<body>

<form id="frm1" action="/action_page.php">
  Email: <input type="text" name="email">
  Subscribe: <input type="text" name="subscribe"><br><br>
  <input type="button" onclick="myFunction()" value="Submit">
</form>

<script>
function myFunction() {
  document.getElementById("frm1").submit();
}
</script>

</body>
</html>
