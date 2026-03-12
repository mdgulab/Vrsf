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

$sql = "SELECT * FROM contacts WHERE 1=1";

if($search){
$sql .= " AND (first_name LIKE '%$search%' OR email LIKE '%$search%')";
}

$result = $conn->query($sql);

?>

<link rel="stylesheet" href="../assets/admin.css">

<h2>Contact Messages</h2>

<form>

<input type="text" name="search" placeholder="Search contact">

<button>Filter</button>

<a href="export.php?type=contacts">Export CSV</a>

</form>

<table>

<tr>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Subject</th>
<th>Message</th>
<th>Date</th>
<th>Action</th>
</tr>

<?php

while($row = $result->fetch_assoc()){

echo "<tr>

<td>".$row['first_name']." ".$row['last_name']."</td>
<td>".$row['email']."</td>
<td>".$row['phone']."</td>
<td>".$row['subject']."</td>
<td>".$row['message']."</td>
<td>".$row['created_at']."</td>

<td>

<a href='delete.php?id=".$row['id']."&type=contacts'>Delete</a>

</td>

</tr>";

}

?>

</table>