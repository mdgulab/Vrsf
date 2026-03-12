<?php
require_once '../db_config.php';

$conn = new mysqli("localhost","u426805102_vrsf_user","Vrsf@2026","u426805102_vrsf_volunteer");

if($conn->connect_error){
    die("DB Error");
}

$event_code = $_POST['event_code'];
$title = $_POST['title'];
$short_description = $_POST['short_description'];
$date = $_POST['date'];
$activity_name = $_POST['activity_name'];
$location = $_POST['location'];
$organized_by = $_POST['organized_by'];
$objectives = json_encode(explode("\n", $_POST['objectives']));
$program_description = $_POST['program_description'];
$dignitaries = $_POST['dignitaries'];
$impact = $_POST['impact'];

$uploadDir = "../../uploads/gallery/";
$docDir = "../../uploads/documents/";


/* COVER IMAGE */

$cover_image = "";

if(isset($_FILES['cover_image'])){
    $name = time()."_".$_FILES['cover_image']['name'];
    move_uploaded_file($_FILES['cover_image']['tmp_name'],$uploadDir.$name);
    $cover_image = "/uploads/gallery/".$name;
}


/* GALLERY */

$gallery = [];

if(isset($_FILES['gallery'])){

    foreach($_FILES['gallery']['tmp_name'] as $key=>$tmp){

        $name = time()."_".$_FILES['gallery']['name'][$key];

        move_uploaded_file($tmp,$uploadDir.$name);

        $gallery[]="/uploads/gallery/".$name;

    }

}

$gallery_json = json_encode($gallery);


/* DOCUMENTS */

$documents = [];

if(isset($_FILES['declaration'])){
    $name=time()."_".$_FILES['declaration']['name'];
    move_uploaded_file($_FILES['declaration']['tmp_name'],$docDir.$name);
    $documents['declaration']="/uploads/documents/".$name;
}

if(isset($_FILES['activity_report'])){
    $name=time()."_".$_FILES['activity_report']['name'];
    move_uploaded_file($_FILES['activity_report']['tmp_name'],$docDir.$name);
    $documents['activityReport']="/uploads/documents/".$name;
}

if(isset($_FILES['participation_record'])){
    $name=time()."_".$_FILES['participation_record']['name'];
    move_uploaded_file($_FILES['participation_record']['tmp_name'],$docDir.$name);
    $documents['participationRecord']="/uploads/documents/".$name;
}

$documents_json = json_encode($documents);


/* INSERT */

$sql="INSERT INTO events
(event_code,title,short_description,date,cover_image,activity_name,location,organized_by,objectives,program_description,dignitaries,impact,documents,gallery)
VALUES
('$event_code','$title','$short_description','$date','$cover_image','$activity_name','$location','$organized_by','$objectives','$program_description','$dignitaries','$impact','$documents_json','$gallery_json')";

$conn->query($sql);

header("Location: /admin/events.php");
exit();

?>