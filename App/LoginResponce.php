<?php
 session_start();

 # getting user login details.. 
 $username=$_POST['usernames'];
 $password=$_POST['password'];

 # database config.. 
 $servername="localhost";
 $db="todoappdb";
 $db_username="root";
 $db_password="";

 # Creating a connection to database.. 
 $conn = new  mysqli($servername, $db_username, $db_password, $db);

 if($conn->connect_error){
    die("Error in connecting to database!");
 }
 else{

    # SQL query for the username and password..
    $data = "SELECT * FROM todoappdb WHERE username='$username' and password='$password'";

    # Executing the query..
    $result = mysqli_query($conn, $data);

    # for checking user existence..
    $nrows = mysqli_num_rows($result);

    # if user exists..
    if ($nrows > 0) {
        $_SESSION['username'] = $username;
        header('location:MainApp.html');
    } else {
        header('location:login_error.html');
    }
 }

?>