<?php
// Load from environment or define here for local dev
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_USER', getenv('DB_USER') ?: 'your_db_user');
define('DB_PASS', getenv('DB_PASS') ?: 'your_db_password');
define('DB_NAME', getenv('DB_NAME') ?: 'your_db_name');

function getDB() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        die(json_encode(["status" => "error", "message" => "Database connection failed"]));
    }
    return $conn;
}
