<?php
// Load from environment or define here for local dev
define('DB_HOST', 'localhost');
define('DB_USER', 'u426805102_vrsf_user');
define('DB_PASS', 'Vrsf@2026');
define('DB_NAME', 'u426805102_vrsf_volunteer');

function getDB() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        die(json_encode(["status" => "error", "message" => "Database connection failed"]));
    }
    return $conn;
}
