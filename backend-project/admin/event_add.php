<?php
require_once '../db_config.php';
session_start();
?>

<!DOCTYPE html>
<html>
<head>

<title>Add Event</title>

<style>

body{
font-family:Arial;
background:#f3f6fb;
padding:40px;
}

.container{
max-width:900px;
margin:auto;
background:white;
padding:30px;
border-radius:10px;
box-shadow:0 10px 30px rgba(0,0,0,0.1);
}

h2{
margin-bottom:20px;
}

input,textarea{
width:100%;
padding:12px;
margin-bottom:15px;
border:1px solid #ccc;
border-radius:6px;
}

textarea{
height:100px;
}

button{
padding:12px 20px;
border:none;
border-radius:6px;
background:#2b6cb0;
color:white;
cursor:pointer;
}

button:hover{
background:#1a4e87;
}

</style>

</head>

<body>

<div class="container">

<h2>Add New Event</h2>

<form action="../api/event_create.php" method="POST" enctype="multipart/form-data">

<input type="text" name="event_code" placeholder="Event Code" required>

<input type="text" name="title" placeholder="Title" required>

<textarea name="short_description" placeholder="Short Description"></textarea>

<input type="date" name="date" required>

<h4>Cover Image</h4>

<input type="file" name="cover_image" required>

<input type="text" name="activity_name" placeholder="Activity Name">

<input type="text" name="location" placeholder="Location">

<input type="text" name="organized_by" placeholder="Organized By">

<h4>Objectives (one per line)</h4>

<textarea name="objectives" placeholder="Write each objective in new line"></textarea>

<textarea name="program_description" placeholder="Program Description"></textarea>

<textarea name="dignitaries" placeholder="Dignitaries"></textarea>

<textarea name="impact" placeholder="Impact"></textarea>

<h4>Upload Gallery Images (Minimum 5)</h4>

<input type="file" name="gallery[]" multiple required>

<h4>Documents</h4>

<label>Declaration PDF</label>

<input type="file" name="declaration">

<label>Activity Report PDF</label>

<input type="file" name="activity_report">

<label>Participation Record PDF</label>

<input type="file" name="participation_record">

<br><br>

<button type="submit">Add Event</button>

</form>

</div>

</body>

</html>