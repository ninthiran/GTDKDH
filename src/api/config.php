
<?php

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'german_donar_inventory');

// $link = mysqli_connect($host, $user, $password,$dbname);
$mysqli = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);


if (!$mysqli) {
  die("Connection failed: " . mysqli_connect_error());
}


?>