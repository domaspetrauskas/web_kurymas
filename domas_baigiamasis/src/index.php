
<?php 

    if(isset($_POST['submit'])) {
        $name = trim($_POST['vardas']);
        $email = trim($_POST['email']);
        $message = trim($_POST['zinute']);
        if(!empty($name) && !empty($email) && !empty($message)) {
            if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
                define("DB_SERVER", "localhost");
                define("DB_USER", "root");
                define('DB_PASSWORD', 'root');
                define("DB_NAME", "baigiamasis");
            
                $mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);
                if($mysqli->connect_error) {
                    echo 'Klaida: ' . $mysqli->connect_error . '\n';
                    exit();
                }
                    mysqli_query($mysqli, "INSERT INTO info(vardas, email, zinute)
                    VALUES('$_POST[vardas]', '$_POST[email]', '$_POST[zinute]')");
                    
        
         }}}




    // $name = trim($_POST['vardas']);
    // $email = trim($_POST['email']);
    // $message = trim($_POST['zinute']);

    // if(!empty($vardas) && !empty($email) && !empty($zinute)) {
    //     if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //         include 'db.php';
    //         $from = "$email";
    //         $to = 'domas.petrauskas2@gmail.com';
    //         $subject = 'nauja zinute';
    //         $autorius = 'Nuo: ' . $vardas . ', ' . $email;
    //         $zinute = htmlspecialchars($zinute);
    //         // mail($to, $subject, $autorius, $zinute, $from);
    //         // echo '<script>alert("Muchos gracias!");</script>';
    //     }
    
    // }

  

    ?>