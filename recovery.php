<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Azur Consultancy</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="ASSETS/CSS/create.css">
    <link rel="stylesheet" href="ASSETS/css/all.min.css">
</head>

<?php include("Includes/db.php");?>
<?php session_start();?>


<body>
 <div class="container mt-5 w-50 ">


     
<img src="Assets/Images/logo.png" class ="rounded mx-auto d-block mb-5" alt="Azur Consultancy">
<div class="row justify-content-center " >
    
    <div class="col-md-6  ml-3 mb-3">
    <span class = "text-secondary " id="recoveryMsg"> Enter your email and a New password..</span>   

        
        </div>
  
</div>
<form action="" method="post">


<div class="row justify-content-center" >
    
    <div class="col-md-6 col-sm-12">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="26" height="26"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#48a53b"><path d="M100.57452,113.36599h-0.62019c-4.75481,13.35997 -13.35997,20.02704 -25.86719,20.02704c-9.38041,0 -16.92608,-3.48858 -22.66286,-10.49159c-5.76262,-6.97716 -8.63101,-16.66767 -8.63101,-29.04567c0,-15.99579 3.97957,-29.01983 11.93871,-39.07212c7.93329,-10.02644 17.52043,-15.03966 28.70973,-15.03966c10.12981,0 16.48678,4.08293 19.07092,12.27463h0.41346l1.00781,-10.38822h22.92127c-3.04928,29.79507 -4.59976,49.2536 -4.59976,58.42728c0,9.79387 2.58413,14.67788 7.7524,14.67788c5.45253,0 9.92308,-3.72115 13.46334,-11.11178c3.51442,-7.41647 5.29747,-17.10697 5.29747,-29.04567c0,-16.35758 -5.0649,-29.76923 -15.19471,-40.23498c-10.12981,-10.4399 -24.23918,-15.68569 -42.37981,-15.68569c-19.43269,0 -35.58353,6.97716 -48.45252,20.93149c-12.86899,13.95433 -19.30349,30.95794 -19.30349,51.03666c0,19.43269 5.6851,34.73077 17.05529,45.92007c11.39603,11.1893 27.08173,16.79688 47.13462,16.79688c15.29808,0 29.27824,-2.9976 41.99219,-9.01863v20.02704c-11.6286,5.09074 -26.5649,7.64904 -44.83474,7.64904c-25.09194,0 -45.48077,-7.39062 -61.19231,-22.17187c-15.73738,-14.8071 -23.59315,-34.67909 -23.59315,-59.64183c0,-25.45373 8.39844,-46.82452 25.16947,-64.16406c16.77103,-17.33954 38.3744,-26.02224 64.8101,-26.02224c24.44591,0 44.24038,6.71875 59.35757,20.18209c15.11719,13.46335 22.66286,31.21635 22.66286,53.23317c0,18.11479 -4.6256,32.63762 -13.85096,43.59435c-9.2512,10.93089 -20.69892,16.40926 -34.34315,16.40926c-6.71875,0 -12.19712,-1.86058 -16.40926,-5.55589c-4.21214,-3.72115 -6.48618,-8.55349 -6.82212,-14.49699zM87.00781,57.98798c-6.09856,0 -11.08594,3.59195 -14.91046,10.75c-3.85037,7.1839 -5.76262,15.47897 -5.76262,24.91106c0,6.71875 1.31791,11.93871 3.92788,15.6857c2.60997,3.74699 5.96935,5.60757 10.12981,5.60757c6.38281,0 11.42187,-3.51442 15.09135,-10.59495c3.64363,-7.05469 5.47837,-16.48678 5.47837,-28.29628c0,-5.60757 -1.26622,-10.0006 -3.82452,-13.23077c-2.53246,-3.20433 -5.91767,-4.83233 -10.12981,-4.83233z"></path></g></g></svg></span>
            </div>
            <input type="text" class="form-control" placeholder="Email address" name = "emailField" id="emailField" aria-label="Email address" aria-describedby="basic-addon1">
          </div>
    </div>
    
</div>
<div class="row justify-content-center"  >
    
    <div class="col-md-6">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="26" height="26"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#60b03d"><path d="M86,0c-21.99099,0 -39.69231,17.70132 -39.69231,39.69231v26.46154c-14.54868,0 -26.46154,11.91286 -26.46154,26.46154v52.92308c0,14.54868 11.91286,26.46154 26.46154,26.46154h79.38462c14.54868,0 26.46154,-11.91286 26.46154,-26.46154v-52.92308c0,-14.54868 -11.91286,-26.46154 -26.46154,-26.46154v-26.46154c0,-21.99099 -17.70132,-39.69231 -39.69231,-39.69231zM86,13.23077c15.06551,0 26.46154,11.39603 26.46154,26.46154v26.46154h-52.92308v-26.46154c0,-15.06551 11.39603,-26.46154 26.46154,-26.46154zM86,99.23077c7.28726,0 13.23077,5.94351 13.23077,13.23077c0,4.6256 -2.63581,9.17368 -6.61538,11.16346v15.29808c0,3.97957 -2.63581,6.61538 -6.61538,6.61538c-3.97956,0 -6.61538,-2.63581 -6.61538,-6.61538v-15.29808c-3.97956,-1.98978 -6.61538,-6.53786 -6.61538,-11.16346c0,-7.28726 5.94351,-13.23077 13.23077,-13.23077z"></path></g></g></svg>
</span>
            </div>
            <input type="password" class="form-control" placeholder="New Password" name="passwordField"  id="passwordField" aria-label="Password" aria-describedby="basic-addon1">
          </div>
    </div>
  
</div>









<div class="row justify-content-center" >
    
    <div class="col-md-6  ">
        <button type="submit" class="btn btn-primary btn-lg btn-block" name = "recoverBtn" id="recoverBtn">Recover</button>
    </div>
  
</div>




</form>

 </div>
<!-- PHP Script section-->


<?php


     if(isset($_POST["recoverBtn"])){
        include("Includes/create.php");

      
        $password =(string)$_POST["passwordField"];
        $email = (string)$_POST["emailField"];
    


         $email = mysqli_real_escape_string($conn,$email);
         $password = mysqli_real_escape_string($conn,$password);

         $errors =errorsR($email,$password);

         if(!$errors){
    
            $query= recoverAccount($email,$password);
            $result = mysqli_query($conn,$query);
            ?>
            <script >
    document.getElementById("recoveryMsg").innerHTML = "Successfully Updated password";
            </script>
            <?php
             
            if(!$result){
               
                          
                    }
          
        }
        
        else{
            ?>
            <script >
            
            
document.getElementById("emailField").style.border = "thin solid red";
document.getElementById("passwordField").style.border = "thin solid red";
            </script>
            <?php
        }
 
 
        }
        
        
    

        ?>

<?php include("Includes/footer.php")?>






      <!--script-->
      <script src="Assets/JS/signup.js"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>

</html>