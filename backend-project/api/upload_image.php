<?php
require_once '../db_config.php';

$dir="../uploads/gallery/";

$file=time()."_".$_FILES["image"]["name"];

move_uploaded_file($_FILES["image"]["tmp_name"],$dir.$file);

echo json_encode([
"path"=>"/uploads/gallery/".$file
]);