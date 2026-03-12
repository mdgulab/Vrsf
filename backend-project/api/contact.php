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

$stmt = $conn->prepare("INSERT INTO contacts (first_name, last_name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss",
    $data['firstName'], $data['lastName'], $data['email'],
    $data['phone'], $data['subject'], $data['message']
);

if ($stmt->execute()) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "message" => $conn->error]);
}
$conn->close();
