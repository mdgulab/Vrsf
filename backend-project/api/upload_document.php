<?php
require_once '../db_config.php';

$dir="../uploads/documents/";

$file=time()."_".$_FILES["pdf"]["name"];

move_uploaded_file($_FILES["pdf"]["tmp_name"],$dir.$file);

echo json_encode([
"path"=>"/uploads/documents/".$file
]);