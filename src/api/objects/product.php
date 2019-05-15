<?php
class Product{
 
    // database connection and table name
    private $conn;
 
    // object properties
    public $UserID;
    public $UserName;
    public $Password;
    public $category_id;
    public $category_name;
    public $created;
   
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }


function login(){
 
    // select all query
    $query = "SELECT * FROM users u Where u.UserID = '$this->id' ";

 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
    
    // execute query
    $stmt->execute();
    
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    // set values to object properties
    $this->UserID = $row['UserID'];
    $this->UserName = $row['UserName'];
    $this->Password = $row['Password'];
}

function readCategories(){
 
    // select all query
    $query = "SELECT * FROM `item_category` ";

 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
    
    // execute query
    $stmt->execute();
    // $row = $stmt->fetch(PDO::FETCH_ASSOC);
    // print_r($row);die;
    return $stmt;
}

function itemlist(){
 
    // select all query
    $query = "SELECT il.*,  itc.ItemName as CategoryName from itemlist il 
                INNER JOIN item_category itc on itc.ItemCategoryID = il.ItemCategoryID
                Where itc.ItemCategoryID = '$this->catid' ";

 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
    // execute query
    $stmt->execute();
    // $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // print_r($row);die;
    
    return $stmt;
}

}
