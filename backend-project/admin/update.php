<?php
require_once '../db_config.php';

$conn = new mysqli(
"localhost",
"u426805102_vrsf_user",
"Vrsf@2026",
"u426805102_vrsf_volunteer"
);

$id = $_POST['id'];

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$city = $_POST['city'];
$state = $_POST['state'];
$interest = $_POST['interest'];
$availability = $_POST['availability'];
$mode = $_POST['mode'];
$experience = $_POST['experience'];

$conn->query("UPDATE volunteers SET

name='$name',
phone='$phone',
email='$email',
age='$age',
gender='$gender',
city='$city',
state='$state',
interest='$interest',
availability='$availability',
mode='$mode',
experience='$experience'

WHERE id=$id");

header("Location: volunteers.php");

?>