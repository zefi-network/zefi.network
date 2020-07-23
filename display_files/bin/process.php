<?php

////////////////////////////  CONFIGURATION   /////////////////////////////


//Put your own email address here

$emailTo = 'templates@inbasics.com';


//Put the subjet here

$subject = 'From website';


//////////////////////////// END OF CONFIGURATION   /////////////////////////////


$email = trim($_POST['email']);
$headers = 'From: My Site <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;
$headers .= "X-Mailer: PHP5\n";
$headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=utf8' . "\r\n";
$body= "Email: ".$email."<br>";
if($email != ''){
     mail($emailTo, $subject, $body, $headers);
}
?>