<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 12px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  /* font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
</head>
<body>


<?php

require_once "config.php";
?>


<div class="sidenav">

<?php  $sql = "SELECT ItemName FROM `item_category` ";
        
        if($result = $mysqli->query($sql)){
            if($result->num_rows > 0){
                
                while($row = $result->fetch_array()){
                        ?>

            <!-- <button class="tablinks" onclick="openCity(event, <?php //echo $row[0]; ?>)" id="defaultOpen"><?php echo $row[0]; ?></button> -->
            <a href="/<?php echo $row[0]; ?>"><?php echo $row[0]; ?></a> 
            

                <?php
                }
                $result->free();
            } else{
                echo "No records matching your query were found.";
            }
        } else{
            echo "ERROR: Could not able to execute $sql. " . $mysqli->error;
        } 

?>

</div>
   
</body>