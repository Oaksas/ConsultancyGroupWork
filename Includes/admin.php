<?php 
include("db.php");
function numberOfAllMembers(){
global $conn;
$query ="SELECT * FROM USERS"; 
$result = mysqli_query($conn,$query);
$result =mysqli_num_rows($result);

return $result;

}
function messageRead($target){
    global $conn;
    $resultSet = array();
    $resultSet2 = array();

    $count=0;
    if($target =="Admin"){
        $query ="SELECT message,time from userInfo Where(seen = 0)";

    }
    else{
    $query ="SELECT message,time from userInfo Where(seen = 0 && userName = '{$target}' )";
    }
    $result = mysqli_query($conn,$query);
   
    while($row = mysqli_fetch_row($result)){
        if($row[1] == NULL){
            $row[1] = "Not Specified..";
        }
        $resultSet[$count] = $row[0]."*".$row[1];
  
        $count++;

           
       }
       return $resultSet;

}
function notificationRead($target){
    global $conn;
    $resultSet = array();
    $resultSet2 = array();

    $count=0;
    $query ="SELECT message,time from userInfo Where(seen = 0 &&  userName = 'everyone')";
    $result = mysqli_query($conn,$query);
   
    while($row = mysqli_fetch_row($result)){
        if($row[1] == NULL){
            $row[1] = "Not Specified..";
        }
        $resultSet[$count] = $row[0]."*".$row[1];
  
        $count++;

           
       }
       return $resultSet;

}
function remainderRead($target){
    global $conn;
    $resultSet = array();
    $resultSet2 = array();

    $count=0;
    $query ="SELECT message,dueDate from remainder Where( userName = '{$target}')";
    $result = mysqli_query($conn,$query);
   
    while($row = mysqli_fetch_row($result)){
        if($row[1] == NULL){
            $row[1] = "Not Specified..";
        }
        $resultSet[$count] = $row[0]."*".$row[1];
  
        $count++;

           
       }
       return $resultSet;

}
function oldMessage(){
    global $conn;
    $resultSet = array();
    $resultSet2 = array();

    $count=0;
    $query ="SELECT message,time from userInfo";
    $result = mysqli_query($conn,$query);
   
    while($row = mysqli_fetch_row($result)){
        if($row[1] == NULL){
            $row[1] = "Not Specified..";
        }
        $resultSet[$count] = $row[0]."*".$row[1];
  
        $count++;

           
       }
       return $resultSet;

}

function oldBlog(){
    global $conn;
    $resultSet = array();

    $count=0;
    $query ="SELECT message,userName,postDate from blog";
    $result = mysqli_query($conn,$query);
   
    while($row = mysqli_fetch_row($result)){
        if($row[1] == NULL){
            $row[1] = "Not Specified..";
        }
        $resultSet[$count] = $row[0]."*".$row[1]."*".$row[2];
  
        $count++;

           
       }
       return $resultSet;

}
function profilePic($userName){
    global $conn;

    $query ="SELECT userName,profilePicture from users";
    $result = mysqli_query($conn,$query);
    $Result = "";
    while($row = mysqli_fetch_row($result)){
        if($row[0] == $userName){
            $Result = $row[1];       
         }
       }

    return $Result;
}




?>