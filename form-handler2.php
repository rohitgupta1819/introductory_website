<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
/*$subject = $_POST['subject'];
$message = $_POST['message'];*/
$comment = $_POST['comment'];


$email_from = 'resources@peoplebetter.in';

$email_subject = 'New Comment Submission';

$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                /*"Subject: $subject.\n".
                "User Message: $message .\n";*/
                "User Comment: $comment .\n";


$to = 'rohit.kumar.mom1819@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: knowledge.html");
?>