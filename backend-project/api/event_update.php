
<?php
require_once '../db_config.php';

$conn = new mysqli(
"localhost",
"u426805102_vrsf_user",
"Vrsf@2026",
"u426805102_vrsf_volunteer"
);

if ($conn->connect_error) {
die("DB Error");
}

$id = $_POST['id'];

$event_code = $_POST['event_code'];
$title = $_POST['title'];
$short_description = $_POST['short_description'];
$date = $_POST['date'];
$cover_image = $_POST['cover_image'];

$activity_name = $_POST['activity_name'];
$location = $_POST['location'];
$organized_by = $_POST['organized_by'];

$objectives = json_encode(explode("\n", $_POST['objectives']));

$program_description = $_POST['program_description'];
$dignitaries = $_POST['dignitaries'];
$impact = $_POST['impact'];

$documents = $_POST['documents'];
$gallery = $_POST['gallery'];

$sql = "

UPDATE events SET

event_code='$event_code',
title='$title',
short_description='$short_description',
date='$date',
cover_image='$cover_image',
activity_name='$activity_name',
location='$location',
organized_by='$organized_by',
objectives='$objectives',
program_description='$program_description',
dignitaries='$dignitaries',
impact='$impact',
documents='$documents',
gallery='$gallery'

WHERE id=$id

";

$conn->query($sql);

header("Location: /admin/events.php");

?>
