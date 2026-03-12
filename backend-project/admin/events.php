
<?php

$conn = new mysqli(
"localhost",
"u426805102_vrsf_user",
"Vrsf@2026",
"u426805102_vrsf_volunteer"
);

$limit = 10;

$page = isset($_GET['page']) ? $_GET['page'] : 1;

$start = ($page - 1) * $limit;

$result = $conn->query("SELECT * FROM events ORDER BY id DESC LIMIT $start,$limit");

$total = $conn->query("SELECT COUNT(*) as total FROM events")->fetch_assoc()['total'];

$pages = ceil($total / $limit);

?>

<!DOCTYPE html>
<html>

<head>

<title>Events Management</title>

<link rel="stylesheet" href="/assets/admin.css?v=200">

<style>

.container{
padding:30px;
}

.cards{
display:flex;
gap:20px;
margin-bottom:30px;
}

.card{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 4px 12px rgba(0,0,0,0.08);
width:200px;
}

.card h3{
font-size:14px;
color:#777;
}

.card h2{
font-size:28px;
color:#1e63b5;
}

.topbar{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
}

.add-btn{
background:#1e63b5;
color:white;
padding:10px 14px;
border-radius:6px;
text-decoration:none;
}

.search{
padding:8px;
border:1px solid #ccc;
border-radius:6px;
width:250px;
}

table{
width:100%;
border-collapse:collapse;
background:white;
border-radius:8px;
overflow:hidden;
}

th,td{
padding:12px;
border-bottom:1px solid #eee;
}

th{
background:#1e63b5;
color:white;
}

.cover{
width:80px;
border-radius:6px;
}

.gallery img{
width:40px;
margin:2px;
border-radius:4px;
}

.action a{
margin-right:6px;
padding:6px 10px;
border-radius:4px;
color:white;
text-decoration:none;
font-size:13px;
}

.edit{
background:#10b981;
}

.delete{
background:#ef4444;
}

.pagination{
margin-top:20px;
}

.pagination a{
padding:6px 10px;
border:1px solid #ddd;
margin-right:4px;
text-decoration:none;
}

</style>

</head>

<body>

<div class="container">

<div class="cards">

<div class="card">
<h3>Total Events</h3>
<h2><?php echo $total; ?></h2>
</div>

<div class="card">
<h3>Upcoming</h3>
<h2>
<?php
echo $conn->query("SELECT COUNT(*) as c FROM events WHERE date >= CURDATE()")->fetch_assoc()['c'];
?>
</h2>
</div>

<div class="card">
<h3>Completed</h3>
<h2>
<?php
echo $conn->query("SELECT COUNT(*) as c FROM events WHERE date < CURDATE()")->fetch_assoc()['c'];
?>
</h2>
</div>

</div>


<div class="topbar">

<h2>Events Management</h2>

<a href="event_add.php" class="add-btn">+ Add Event</a>

</div>


<input class="search" placeholder="Search events..." onkeyup="searchTable(this.value)">

<br><br>

<table id="eventsTable">

<tr>

<th>ID</th>
<th>Title</th>
<th>Date</th>
<th>Cover</th>
<th>Gallery</th>
<th>Documents</th>
<th>Action</th>

</tr>

<?php

while($row = $result->fetch_assoc()){

$gallery = json_decode($row['gallery'], true);
$documents = json_decode($row['documents'], true);

echo "<tr>";

echo "<td>".$row['id']."</td>";

echo "<td>".$row['title']."</td>";

echo "<td>".$row['date']."</td>";

echo "<td><img src='".$row['cover_image']."' class='cover'></td>";

echo "<td class='gallery'>";

if($gallery){
foreach($gallery as $img){
echo "<img src='$img'>";
}
}

echo "</td>";

echo "<td>";

if($documents){

if(isset($documents['declaration'])){
echo "<a href='".$documents['declaration']."' target='_blank'>Declaration</a><br>";
}

if(isset($documents['activityReport'])){
echo "<a href='".$documents['activityReport']."' target='_blank'>Report</a><br>";
}

if(isset($documents['participationRecord'])){
echo "<a href='".$documents['participationRecord']."' target='_blank'>Record</a>";
}

}

echo "</td>";

echo "<td class='action'>

<a class='edit' href='event_edit.php?id=".$row['id']."'>Edit</a>

<a class='delete' href='../api/event_delete.php?id=".$row['id']."' onclick='return confirm(\"Delete?\")'>Delete</a>

</td>";

echo "</tr>";

}

?>

</table>


<div class="pagination">

<?php

for($i=1;$i<=$pages;$i++){

echo "<a href='?page=$i'>$i</a>";

}

?>

</div>

</div>


<script>

function searchTable(value){

let rows = document.querySelectorAll("#eventsTable tr");

value = value.toLowerCase();

rows.forEach((row,index)=>{

if(index===0)return;

let text = row.innerText.toLowerCase();

row.style.display = text.includes(value) ? "" : "none";

});

}

</script>

</body>

</html>