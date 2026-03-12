<?php
require_once '../db_config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

$conn = getDB();
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No data received"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO volunteers (name, phone, email, age, gender, city, state, interest, availability, mode, experience) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssssss",
    $data['name'], $data['phone'], $data['email'], $data['age'],
    $data['gender'], $data['city'], $data['state'], $data['interest'],
    $data['availability'], $data['mode'], $data['experience']
);

if ($stmt->execute()) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}
$conn->close();
