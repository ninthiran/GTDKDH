<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
require_once "config.php";

$item = array();

$text_0 = $mysqli->real_escape_string($_REQUEST['text_0']);
$text_1 = $mysqli->real_escape_string($_REQUEST['text_1']);
$text_2 = $mysqli->real_escape_string($_REQUEST['text_2']);

$sql = "INSERT INTO itemlisiting (text_0, text_1, text_2) VALUES ('$text_0', '$text_1', '$text_2')";
if($mysqli->query($sql) === true){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . $mysqli->error;
}
$mysqli->close();
?>