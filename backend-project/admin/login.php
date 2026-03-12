<?php
require_once '../db_config.php';
session_start();

$admin_user = "admin";
$admin_pass = "VRSF@123";

if(isset($_POST['login'])){

$user = $_POST['username'];
$pass = $_POST['password'];

if($user == $admin_user && $pass == $admin_pass){

$_SESSION['admin'] = true;

header("Location: dashboard.php");

}else{

$error = "Invalid Login";

}

}

?>

<!DOCTYPE html>
<html>

<head>

<title>Admin Login</title>

<style>

body{
font-family:Arial;
background:#f4f6f9;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.login-box{
background:white;
padding:30px;
border-radius:8px;
box-shadow:0 0 10px rgba(0,0,0,0.1);
width:300px;
}

input{
width:100%;
padding:10px;
margin-bottom:10px;
}

button{
width:100%;
padding:10px;
background:#1e63b5;
color:white;
border:none;
}

</style>

</head>

<body>

<div class="login-box">

<h2>Admin Login</h2>

<?php if(isset($error)){ echo $error; } ?>

<form method="POST">

<input type="text" name="username" placeholder="Username" required>

<input type="password" name="password" placeholder="Password" required>

<button name="login">Login</button>

</form>

</div>

</body>

</html>