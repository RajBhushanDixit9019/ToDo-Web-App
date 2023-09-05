<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do App</title>
    <link rel="stylesheet" href="MainApp.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>
    <?php 
      if(isset($_SESSION['username'])){
        $username=$_SESSION['username'];
      }
    ?>
    <div class="container">
        <div class="sidebar">
            <div class="user-info">
                <i class="fa-regular fa-user fa-lg">
                    <?php echo $username; ?>
                </i>
            </div>
            <div class="lists">
                <div class="list-section">
                    <ul id="list-container"></ul>
                </div>
                <div class="add-list">
                    <input type="text" id="new-list-input" placeholder="Enter list name">
                    <button id="add-list-btn">Add</button>
                </div>
            </div>
        </div>

        <div class="main-area">
            <h2 id="list-name"></h2>
            <div class="todo">
                <h2>To Do</h2>
                <div class="todo-scroll">
                    <ul id="task-list"></ul>
                </div>
            </div>
            <div class="done">
                <h2>Done</h2>
                <div class="done-scroll"></div>
            </div>
            <div class="add-task">
                <input type="text" id="new-task-input" placeholder="Enter task">
                <button id="add-task-btn">Add</button>
            </div>
        </div>
    </div>

    <script src="MainApp.js"></script>
</body>

</html>