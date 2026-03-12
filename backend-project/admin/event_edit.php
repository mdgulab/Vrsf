
<?php

$conn = new mysqli(
"localhost",
"u426805102_vrsf_user",
"Vrsf@2026",
"u426805102_vrsf_volunteer"
);

$id = $_GET['id'];

$result = $conn->query("SELECT * FROM events WHERE id=$id");

$row = $result->fetch_assoc();

$gallery = json_decode($row['gallery'], true);
$documents = json_decode($row['documents'], true);

?>

<!DOCTYPE html>
<html>

<head>

<title>Edit Event</title>

<link rel="stylesheet" href="/assets/admin.css?v=200">

<style>

.container{
max-width:900px;
margin:auto;
background:white;
padding:30px;
border-radius:10px;
box-shadow:0 4px 15px rgba(0,0,0,0.1);
}

input,textarea{
width:100%;
padding:10px;
margin-bottom:12px;
border:1px solid #ddd;
border-radius:6px;
}

button{
background:#1e63b5;
color:white;
border:none;
padding:10px 16px;
border-radius:6px;
cursor:pointer;
}

.gallery img{
width:120px;
margin:6px;
border-radius:6px;
}

</style>

</head>

<body>

<div class="container">

<h2>Edit Event</h2>

<form action="../api/event_update.php" method="POST">

<input type="hidden" name="id" value="<?php echo $row['id']; ?>">

<input name="event_code" value="<?php echo $row['event_code']; ?>">

<input name="title" value="<?php echo $row['title']; ?>">

<textarea name="short_description"><?php echo $row['short_description']; ?></textarea>

<input type="date" name="date" value="<?php echo $row['date']; ?>">

<h3>Cover Image</h3>

<img src="<?php echo $row['cover_image']; ?>" width="150">

<input type="file" id="coverUpload">

<input type="hidden" name="cover_image" id="coverImageInput" value="<?php echo $row['cover_image']; ?>">

<input name="activity_name" value="<?php echo $row['activity_name']; ?>">

<input name="location" value="<?php echo $row['location']; ?>">

<input name="organized_by" value="<?php echo $row['organized_by']; ?>">

<textarea name="objectives"><?php echo implode("\n", json_decode($row['objectives'], true)); ?></textarea>

<textarea name="program_description"><?php echo $row['program_description']; ?></textarea>

<textarea name="dignitaries"><?php echo $row['dignitaries']; ?></textarea>

<textarea name="impact"><?php echo $row['impact']; ?></textarea>

<h3>Current Gallery</h3>

<div class="gallery">

<?php
if($gallery){
foreach($gallery as $img){
echo "<img src='$img'>";
}
}
?>

</div>

<h3>Add More Gallery Images</h3>

<input type="file" id="galleryUpload" multiple>

<input type="hidden" name="gallery" id="galleryInput" value='<?php echo $row['gallery']; ?>'>

<h3>Documents</h3>

<label>Declaration</label>
<a href="<?php echo $documents['declaration']; ?>" target="_blank">View</a>
<input type="file" id="decUpload">

<label>Activity Report</label>
<a href="<?php echo $documents['activityReport']; ?>" target="_blank">View</a>
<input type="file" id="reportUpload">

<label>Participation Record</label>
<a href="<?php echo $documents['participationRecord']; ?>" target="_blank">View</a>
<input type="file" id="recordUpload">

<input type="hidden" name="documents" id="documentsInput" value='<?php echo $row['documents']; ?>'>

<br><br>

<button>Update Event</button>

</form>

</div>


<script>

/* COVER IMAGE */

document.getElementById("coverUpload").addEventListener("change",async e=>{

let formData=new FormData()

formData.append("image",e.target.files[0])

let res=await fetch("/api/upload_image.php",{method:"POST",body:formData})

let data=await res.json()

document.getElementById("coverImageInput").value=data.path

})

/* GALLERY */

let gallery = JSON.parse(document.getElementById("galleryInput").value || "[]")

document.getElementById("galleryUpload").addEventListener("change",async e=>{

for(const file of e.target.files){

let formData=new FormData()

formData.append("image",file)

let res=await fetch("/api/upload_image.php",{method:"POST",body:formData})

let data=await res.json()

gallery.push(data.path)

}

document.getElementById("galleryInput").value=JSON.stringify(gallery)

})

/* DOCUMENTS */

let docs = JSON.parse(document.getElementById("documentsInput").value || "{}")

async function uploadPDF(input,key){

let formData=new FormData()

formData.append("pdf",input.files[0])

let res=await fetch("/api/upload_document.php",{method:"POST",body:formData})

let data=await res.json()

docs[key]=data.path

document.getElementById("documentsInput").value=JSON.stringify(docs)

}

document.getElementById("decUpload").onchange=e=>uploadPDF(e.target,"declaration")

document.getElementById("reportUpload").onchange=e=>uploadPDF(e.target,"activityReport")

document.getElementById("recordUpload").onchange=e=>uploadPDF(e.target,"participationRecord")

</script>

</body>

</html>
