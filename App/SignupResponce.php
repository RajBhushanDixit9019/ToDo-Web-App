<?php
    // Database connection
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "todoappdb";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    else{
         // Get data from the POST request
        $username = $_POST["signup-username"];
        $email = $_POST["signup-email"];
        $password = $_POST["signup-password"]; // You should hash and salt the password

        // Insert data into the database
        $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

        if ($conn->query($sql) === true) {
            session_start();
            $_SESSION['username']=$username;
            header('Location: MainApp.php');
        } 
        else {
            $response = array("error" => "Error: " . $sql . "<br>" . $conn->error);
        }
    }

    // Close the database connection
    $conn->close();

?>
