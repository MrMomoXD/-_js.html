<!DOCTYPE html>
<html>
<body>

<form id="frm1" action="/action_page.php">
  Email: <input type="text" name="email">
  Subscribe: <input type="text" name="subscribe"><br><br>
</form>
<button id="btn" type="button" class="button">Click me!</button>
<script>
const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'salmon';
  btn.style.color = 'white';
});
</script>

</body>
</html>
