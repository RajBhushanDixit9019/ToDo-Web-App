<?php
session_start();

# getting user sign up details..
$username=$_POST["username"];
$email=$_POST["email"];
$password=$_POST["password"];

# database config..
$servername = "localhost";
$db = "todoappdb";
$dbusername = "root";
$dbpassword = "";

# creating a connection to database..
$conn = new mysqli($servername, $dbusername, $dbpassword, $db);

# checking for the error in the connection to database..
if($conn->connect_error){
    die("Database connection error!");
}
else{
    $data = "Insert into users values('$username', '$email', '$password')";
    # if data inserted successfully... 
    if($conn->query($data)== true){
        $_SESSION['username']=$username;
        header('location:Login.html');
    }
    else{
        header('location:signuperror.html');
    }
}
?>