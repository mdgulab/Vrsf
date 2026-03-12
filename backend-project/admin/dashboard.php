<?php
require_once '../db_config.php';
session_start();

if(!isset($_SESSION['admin'])){
header("Location: login.php");
exit;
}

$conn = new mysqli(
"localhost",
"u426805102_vrsf_user",
"Vrsf@2026",
"u426805102_vrsf_volunteer"
);

$v = $conn->query("SELECT COUNT(*) as total FROM volunteers")->fetch_assoc();
$c = $conn->query("SELECT COUNT(*) as total FROM contacts")->fetch_assoc();
?>

<!DOCTYPE html>
<html>

<head>

<title>VRSF Admin</title>

<link rel="stylesheet" href="/assets/admin.css?v=5">

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</head>

<body>

<div class="sidebar">

<h2>VRSF</h2>

<a href="dashboard.php">📊 Dashboard</a>
<a href="volunteers.php">👥 Volunteers</a>
<a href="contacts.php">📩 Contacts</a>
<a href="events.php">🎟 Events</a>
<a href="logout.php">🚪 Logout</a>

</div>

<div class="main">

<div class="topbar">

<h1>Dashboard</h1>

<input type="text" placeholder="Search..." class="search">

</div>

<div class="cards">

<div class="card gradient-blue">

<h3>Total Volunteers</h3>

<h2><?php echo $v['total']; ?></h2>

</div>

<div class="card gradient-green">

<h3>Total Contacts</h3>

<h2><?php echo $c['total']; ?></h2>

</div>

<div class="card gradient-purple">

<h3>Total Events</h3>

<h2>0</h2>

</div>

</div>

<div class="dashboard-grid">

<div class="chart-box">

<h3>Analytics</h3>

<canvas id="chart"></canvas>

</div>

<div class="activity">

<h3>Recent Activity</h3>

<ul>

<li>New volunteer joined</li>
<li>Contact form submitted</li>
<li>Volunteer updated</li>
<li>Admin login</li>

</ul>

</div>

</div>

</div>

<script>

new Chart(document.getElementById("chart"),{

type:"bar",

data:{
labels:["Volunteers","Contacts"],
datasets:[{
label:"VRSF Data",
data:[<?php echo $v['total']; ?>,<?php echo $c['total']; ?>],
backgroundColor:["#3b82f6","#10b981"]
}]
},

options:{
responsive:true,
maintainAspectRatio:false
}

});

</script>

</body>

</html>