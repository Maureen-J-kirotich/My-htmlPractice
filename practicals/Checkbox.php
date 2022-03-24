<?php
require 'connection.php';

if(isset($_POST["submit"])){
  $name = $_POST["name"];
  $id_number= $_POST["id_number"];
  $phone_number = $_POST["phone_number"];
  $seat_position= $_POST["seat_position"];
  $parking= $_POST["parking"]; 
  }

  $query = "INSERT INTO tb_ticket VALUES('', '$name', '$id_number', '$phone_number', '$seat_position', '$parking')";
  mysqli_query($conn,$query);
  echo
  "
  <script> alert('Data Inserted Successfully'); </script>
  ";
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>database</title>
</head>
<style media="screen">
    label{
      display: block;
    }
    </style>
<body>
	<h1>Ticket Form</h1>
<form class="" action="" method="post">
	<label for="Name">Name</label>
	<input type="text"  placeholder="Name" required>

	<label for="idnum">Id number</label>
	<input type="num" placeholder="id no" required>

	<label for="num">Phone number</label>
	<input type="num" placeholder="phone number" required>
	<hr>
	<h2>seat reservation</h2>
	<label for="">Seats position</label>
	  <input type="radio" name="Seats" required>VIP
	  <input type="radio" name="Seats" required> Middle
      <input type="radio" name="Seats" required>Top
      <hr>
      <p>Do you need a parking?</p>
      <label for="">Parking</label>
       <input type="radio" name="Yes" required>Yes
        <input type="radio" name="Yes" required>No
        <br>
        <button type="submit" name="submit">Submit</button>

</form>
</body>
</html>