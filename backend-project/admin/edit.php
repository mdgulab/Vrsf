<?php
require_once '../db_config.php';

$conn = new mysqli(
"localhost",
"u426805102_vrsf_user",
"Vrsf@2026",
"u426805102_vrsf_volunteer"
);

$id = $_GET['id'];

$result = $conn->query("SELECT * FROM volunteers WHERE id=$id");

$row = $result->fetch_assoc();

?>

<!DOCTYPE html>
<html>

<head>

<title>Edit Volunteer</title>

<style>

body{
font-family:Arial;
background:#f4f6f9;
padding:40px;
}

.container{
background:white;
padding:30px;
border-radius:8px;
max-width:700px;
margin:auto;
box-shadow:0 4px 12px rgba(0,0,0,0.1);
}

h2{
margin-bottom:20px;
}

.form-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:15px;
}

label{
font-size:13px;
font-weight:bold;
}

input,textarea,select{
width:100%;
padding:8px;
border:1px solid #ccc;
border-radius:4px;
}

textarea{
grid-column:1 / span 2;
height:80px;
}

.buttons{
margin-top:20px;
}

button{
padding:10px 16px;
border:none;
background:#1e63b5;
color:white;
border-radius:4px;
cursor:pointer;
}

a{
margin-left:10px;
text-decoration:none;
color:#333;
}

</style>

</head>

<body>

<div class="container">

<h2>Edit Volunteer</h2>

<form action="update_volunteer.php" method="POST">

<input type="hidden" name="id" value="<?php echo $row['id']; ?>">

<div class="form-grid">

<div>
<label>Name</label>
<input type="text" name="name" value="<?php echo $row['name']; ?>">
</div>

<div>
<label>Phone</label>
<input type="text" name="phone" value="<?php echo $row['phone']; ?>">
</div>

<div>
<label>Email</label>
<input type="email" name="email" value="<?php echo $row['email']; ?>">
</div>

<div>
<label>Age</label>
<input type="text" name="age" value="<?php echo $row['age']; ?>">
</div>

<div>
<label>Gender</label>
<input type="text" name="gender" value="<?php echo $row['gender']; ?>">
</div>

<div>
<label>City</label>
<input type="text" name="city" value="<?php echo $row['city']; ?>">
</div>

<div>
<label>State</label>
<input type="text" name="state" value="<?php echo $row['state']; ?>">
</div>

<div>
<label>Interest</label>
<input type="text" name="interest" value="<?php echo $row['interest']; ?>">
</div>

<div>
<label>Availability</label>
<input type="text" name="availability" value="<?php echo $row['availability']; ?>">
</div>

<div>
<label>Mode</label>
<input type="text" name="mode" value="<?php echo $row['mode']; ?>">
</div>

<div style="grid-column:1 / span 2">
<label>Experience</label>
<textarea name="experience"><?php echo $row['experience']; ?></textarea>
</div>

</div>

<div class="buttons">

<button type="submit">Update Volunteer</button>

<a href="volunteers.php">Back</a>

</div>

</form>

</div>

</body>

</html>