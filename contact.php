<?php
$errors = '';
$myemail = 'paartheepan94@gmail.com';
if(empty($_POST['name']) ||
   empty($_POST['mail']) ||
   empty($_POST['message']))
{
	$errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email_address = $_POST['mail'];
$message = $_POST['message'];

if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address)) {
	$errors .= "\n Error: This is invalid email address";
}

if( empty($errors) ) {
	$to = $myemail;
	$email_subject = "Demande de contact : $name";
	$email_body = "Vous venez de recevoir un nouveau message.\n ".
	"\nNom: $name \nDe: $email_address \nMessage:\n\n $message";

	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email_address";

	mail($to,$email_subject,$email_body,$headers);
}

echo $errors;
?>
<!DOCTYPE html>
<html lang="fr">
<head>

	<title>Merci!</title>
	<meta charset="utf-8"/>
	<link rel="icon" href="img/favicon.png">


<link rel="stylesheet" href="css/style.css">

</head>	
<body>

<div class="respond">
    <div class="contactphp">
        <h1>Merci.</h1>
        <p>Merci de nous avoir contacté. Nous vous recontacterons dans les plus brefs délais.</p>
        <p style="font-weight: bold; ">L'équipe de My Orbis</p>
        <a class="btn" onclick="window.history.back()">Page précedente</a>
    </div>
</div>

</body>
</html>






