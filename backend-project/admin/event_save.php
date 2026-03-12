<?php
require_once '../db_config.php';

$conn = new mysqli(
"localhost",
"u426805102_vrsf_user",
"Vrsf@2026",
"u426805102_vrsf_volunteer"
);

$code = $_POST['event_code'];
$title = $_POST['title'];
$short = $_POST['short_description'];
$date = $_POST['date'];
$cover = $_POST['cover_image'];

$activity = $_POST['activity_name'];
$location = $_POST['location'];
$organized = $_POST['organized_by'];

$objectives = $_POST['objectives'];
$program = $_POST['program_description'];
$dignitaries = $_POST['dignitaries'];
$impact = $_POST['impact'];

$documents = $_POST['documents'];
$gallery = $_POST['gallery'];

$conn->query("INSERT INTO events(

event_code,
title,
short_description,
date,
cover_image,
activity_name,
location,
organized_by,
objectives,
program_description,
dignitaries,
impact,
documents,
gallery

) VALUES (

'$code',
'$title',
'$short',
'$date',
'$cover',
'$activity',
'$location',
'$organized',
'$objectives',
'$program',
'$dignitaries',
'$impact',
'$documents',
'$gallery'

)");

header("Location: events.php");