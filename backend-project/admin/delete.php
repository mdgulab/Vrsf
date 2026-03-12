<?php
require_once '../db_config.php';

$conn = new mysqli(
"localhost",
"u426805102_vrsf_user",
"Vrsf@2026",
"u426805102_vrsf_volunteer"
);

$id = $_GET['id'];
$type = $_GET['type'];

$conn->query("DELETE FROM $type WHERE id=$id");

header("Location: ".$type.".php");