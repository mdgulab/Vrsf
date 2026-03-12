<?php
require_once '../db_config.php';
$conn = getDB();
$id = intval($_GET['id']); // sanitize
$stmt = $conn->prepare("DELETE FROM events WHERE id=?");
$stmt->bind_param("i", $id);
$stmt->execute();
header("Location: /admin/events.php");
