<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">

<style>
body {
  font-family: "Lato", sans-serif;
  font-size:15px;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
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
require_once "leftmenu.php";
?>


<div class="main">
<br/>
<br/>
<form action="insert.php" method="post">
            
<?php  $sql = "SELECT * FROM `itemlist` ";
        $i = 0;
        if($result = $mysqli->query($sql)){
            if($result->num_rows > 0){
                
                while($row = $result->fetch_array()){
                        ?>

    <div class="form-group <?php echo (!empty($userid_err)) ? 'has-error' : ''; ?>">
            <label><?php echo $row['ItemName']; ?></label>
            <input type="text" name="text_<?php echo $i++?>" class="form-control" value="0">
            <!-- <span class="help-block"><?php //echo $userid_err; ?></span> -->
    </div> 

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
    <div class="form-group">
             <input type="submit" class="btn btn-primary" value="Submit">
            <input type="reset" class="btn btn-default" value="Reset">
    </div>
</form>
</div>

   
</body>