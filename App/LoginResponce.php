<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
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

    // Get data from the POST request
    $usernameOrEmail = $_POST["login-username"];
    $password = $_POST["login-password"];

    // Check user credentials in the database
    $sql = "SELECT * FROM users WHERE (username='$usernameOrEmail' OR email='$usernameOrEmail') AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows === 1) {
        // Set up a session or token-based authentication
        session_start();
        $_SESSION['username'];

        $response = array("success" => true, "message" => "Login successful");
    } else {
        $response = array("error" => "Invalid credentials");
    }

    // Close the database connection
    $conn->close();

    // Send the response
    echo json_encode($response);
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    $response = array("error" => "Invalid request method");
    echo json_encode($response);
}
?>
