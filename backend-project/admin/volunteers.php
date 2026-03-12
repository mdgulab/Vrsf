<?php
require_once '../db_config.php';
session_start();

if(!isset($_SESSION['admin'])){
header("Location: login.php");
exit;
}

$conn = new mysqli(
"localhost",
"u426805102_vrsf_user",
"Vrsf@2026",
"u426805102_vrsf_volunteer"
);

$search = $_GET['search'] ?? '';
$city = $_GET['city'] ?? '';
$gender = $_GET['gender'] ?? '';
$mode = $_GET['mode'] ?? '';

$sql = "SELECT * FROM volunteers WHERE 1=1";

if($search){
$sql .= " AND (name LIKE '%$search%' OR phone LIKE '%$search%')";
}

if($city){
$sql .= " AND city='$city'";
}

if($gender){
$sql .= " AND gender='$gender'";
}

if($mode){
$sql .= " AND mode='$mode'";
}

$result = $conn->query($sql);

?>

<!DOCTYPE html>
<html>
<head>

<title>Volunteer Admin</title>

<style>

body{
font-family: Arial;
background:#f4f6f9;
padding:30px;
}

h2{
margin-bottom:20px;
}

form{
margin-bottom:20px;
}

input,select{
padding:8px;
margin-right:10px;
}

button{
padding:8px 12px;
background:#1e63b5;
color:white;
border:none;
cursor:pointer;
}

table{
width:100%;
border-collapse:collapse;
background:white;
}

th,td{
padding:10px;
border:1px solid #ddd;
font-size:14px;
}

th{
background:#1e63b5;
color:white;
}

tr:nth-child(even){
background:#f9f9f9;
}

</style>

</head>

<body>

<h2>Volunteer Admin Panel</h2>

<form method="GET">

<input type="text" name="search" placeholder="Search name / phone">

<select name="city">
<option value="">City</option>
<option>Hyderabad</option>
<option>Delhi</option>
<option>Mumbai</option>
</select>

<select name="gender">
<option value="">Gender</option>
<option>Male</option>
<option>Female</option>
</select>

<select name="mode">
<option value="">Mode</option>
<option>Online</option>
<option>Offline</option>
<option>Both</option>
</select>

<button type="submit">Filter</button>

<a href="export.php">
<button type="button">Download CSV</button>
</a>

</form>

<table>

<tr>

<th>ID</th>
<th>Name</th>
<th>Phone</th>
<th>Email</th>
<th>Age</th>
<th>Gender</th>
<th>City</th>
<th>State</th>
<th>Interest</th>
<th>Availability</th>
<th>Mode</th>
<th>Experience</th>
<th>Date</th>
<th>Action</th>

</tr>

<?php

while($row = $result->fetch_assoc()){

echo "<tr>

<td>".$row['id']."</td>
<td>".$row['name']."</td>
<td>".$row['phone']."</td>
<td>".$row['email']."</td>
<td>".$row['age']."</td>
<td>".$row['gender']."</td>
<td>".$row['city']."</td>
<td>".$row['state']."</td>
<td>".$row['interest']."</td>
<td>".$row['availability']."</td>
<td>".$row['mode']."</td>
<td>".$row['experience']."</td>
<td>".$row['created_at']."</td>

<td>

<a href='edit.php?id=".$row['id']."'>Edit</a> |

<a href='delete.php?id=".$row['id']."' onclick='return confirm(\"Delete volunteer?\")'>Delete</a>

</td>

</tr>";

}

?>

</table>

</body>
</html>