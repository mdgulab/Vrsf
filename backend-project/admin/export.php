<?php
require_once '../db_config.php';

$conn = new mysqli(
"localhost",
"u426805102_vrsf_user",
"Vrsf@2026",
"u426805102_vrsf_volunteer"
);

header('Content-Type: text/csv');
header('Content-Disposition: attachment; filename="volunteers.csv"');

$output = fopen("php://output", "w");

fputcsv($output, [
"id","name","phone","email","age","gender","city","state","interest","availability","mode","created_at"
]);

$result = $conn->query("SELECT * FROM volunteers");

while($row = $result->fetch_assoc()){

fputcsv($output,$row);

}

fclose($output);