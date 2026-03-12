<?php
require_once '../db_config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = getDB();
$result = $conn->query("SELECT * FROM events ORDER BY id DESC");
$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}
echo json_encode($data);
