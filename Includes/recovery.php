<?php 
include("db.php");
include("create.php");
function recoverAccount($username,$password){
    $password = password_encrypt($password);
    global $conn;

    $query = "UPDATE users SET password ='{$password}' WHERE username='{$username}'";
    return $query;
}


function errorsR($username,$password,$passConfirm,$email,$sQue,$sAns){

   $errors = array();
   $count = 0;
   $userId;
   global $conn;



    $query = "SELECT id,userName,eMail,sQuestion,sAnswer From users";
    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_row($result)){
    if($row[1] == $username && $row[2] == $email && $row[3] == $sQue && $row[4] == $sAns){
        $userId = $row[0];

      
    }
    
    
}


if(!isset($userId)){        
    $error = "Incorrect Information...";
    $errors[$count] =  mysqli_real_escape_string($conn,$error);
    $count++;
}
if(strlen($password)<5){
    $error = "Password is too short..";
    $errors[$count] =  mysqli_real_escape_string($conn,$error);
    $count++;
}
if($password != $passConfirm){
    $error = "Password don't match";
    $errors[$count] =  mysqli_real_escape_string($conn,$error);
    $count++;
}

return $errors;
  
}



?>