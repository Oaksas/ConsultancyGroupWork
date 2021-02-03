<?php 
include("db.php");
function createAccount($fname,$lname,$email,$pass){
    $pass = password_encrypt($pass);
    $existingHash =substr($pass,0,21);

    global $conn;
$query = "INSERT INTO userInfo(FIRSTNAME,LASTNAME,EMAIL,PASSWORD) VALUES('{$fname}','{$lname}','{$email}','{$pass}')";
return $query;
}
function password_encrypt($password){
    $hashFormat ="$2y$10$";
    $saltLength =22;
    $salt =generateSalt($saltLength);
    $formatAndSalt =$hashFormat.$salt;
    $pass = crypt($password,$formatAndSalt);
    return $pass;
    
}

function generateSalt($saltLength){
    $uniqueRandomString = md5(uniqid(mt_rand(),true));
    $base64String = base64_encode($uniqueRandomString);
    $modifiedBaseString =str_replace("+",'.',$base64String);
    $salt=substr($modifiedBaseString,0,$saltLength);
    
    return $salt;

}



function errors($email,$password){




   $errors = array();
   $count = 0;
   global $conn;



    $query = "SELECT EMAIL From userInfo";
    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_row($result)){
    if($row[0] == $email){
        $error = "email";
        $errors[$count] = mysqli_real_escape_string($conn,$error);
        $count++;
    }

}
    
if(strlen($password)<5){
    $error = "password";
    $errors[$count] =  mysqli_real_escape_string($conn,$error);
    $count++;
}
return $errors;
}

function allMember(){
    global $conn;
    $users = array();
    $count=0;



    $query = "SELECT userName From users";
    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_row($result)){
 $users[$count] = $row[0];
 $count++;
    
}
return $users;
}

function post($msg,$target,$time){
    global $conn;
    $query = "INSERT INTO userInfo(message,seen,userName,time) VALUES('{$msg}',0,'{$target}','{$time}')";

$result = mysqli_query($conn,$query);

if(!$result){
    return false;
}
else{return true;}
}


function remainder($msg,$dueDate,$username){
    global $conn;
    $query = "INSERT INTO remainder(message,userName,dueDate) VALUES('{$msg}','{$username}','{$dueDate}')";

$result = mysqli_query($conn,$query);

if(!$result){
    return false;
}
else{return true;}
}



function blogPost($post,$target,$postDate){
    global $conn;
    $query = "INSERT INTO blog(message,userName,postDate) VALUES('{$post}','{$target}','{$postDate}')";
    $result = mysqli_query($conn,$query);

    return $result;
    }

function userInfo1($occupation,$year,$helpType,$userName){
    global $conn;
    
    $query = "SELECT userName From userInfo1";
    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_row($result)){
    if($row[0] == $userName){
        $query = "UPDATE userinfo1 SET occupation ='{$occupation}',year ='{$year}',helpType ='{$helpType}' WHERE username='{$userName}'";
        $result = mysqli_query($conn,$query);    
        return $result;

      
    }
}
    
        $query = "INSERT INTO userInfo1(occupation,year,helpType,userName) VALUES('{$occupation}','{$year}','{$helpType}','{$userName}')";
        $result = mysqli_query($conn,$query);

    
        return $result;


}

function userInfo2($race,$majorChoice,$financialAid,$userName){
    global $conn;
    $query = "SELECT userName From userInfo2";
    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_row($result)){
    if($row[0] == $userName){
        $query = "UPDATE userinfo2 SET race ='{$race}',intendedMajor ='{$majorChoice}',financialAidNeed ='{$financialAid}' WHERE username='{$userName}'";
        $result = mysqli_query($conn,$query);    
        return $result;

      
    }
}
if(!is_null($race) && !is_null($majorChoice)&& !is_null($financialAid)){
        $query = "INSERT INTO userInfo2(race,intendedMajor,financialAidNeed,userName) VALUES('{$race}','{$majorChoice}','{$financialAid}','{$userName}')";
        $result = mysqli_query($conn,$query);

    
        return $result;
}


}
function userInfo3($APClasses,$honorClasses,$collegeCourses,$userName){
    global $conn;
    $query = "SELECT userName From userInfo2";
    $result = mysqli_query($conn,$query);
    while($row = mysqli_fetch_row($result)){
    if($row[0] == $userName){
        $query = "UPDATE userinfo2 SET APClassesTaken ='{$APClasses}',honorClassesTaken ='{$honorClasses}',collegeCoursesTaken ='{$collegeCourses}' WHERE username='{$userName}'";
        $result = mysqli_query($conn,$query);    
        return $result;

      
    }
}
if(!is_null($race) && !is_null($majorChoice)&& !is_null($financialAid)){
        $query = "INSERT INTO userInfo2(APClassesTaken,honorClassesTaken,collegeCoursesTaken,userName) VALUES('{$APClasses}','{$honorClasses}','{$collegeCourses}','{$userName}')";
        $result = mysqli_query($conn,$query);

    
        return $result;
}


}





?>