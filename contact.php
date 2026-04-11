<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  if (!empty($_POST["website"])) {
    die("Spam detected");
  }

  if ((time() * 1000 - $_POST["form_time"]) < 3000) {
    die("Too fast");
  }

  $firstName = htmlspecialchars($_POST["firstName"]);
  $lastName = htmlspecialchars($_POST["lastName"]);  
  $email = htmlspecialchars($_POST["email"]);
  $topic = htmlspecialchars($_POST["topic"]);
  $message = htmlspecialchars($_POST["message"]);

  $to = "DEINE-EMAIL@domain.com";
  $headers = "Reply-To: $email";
  $subject = "Neue Anfrage von Website";
  
  $name = $firstName + " " + $lastName;
  $body = 
    "Name:    " + $name + "\r\n" + 
    "E-Mail:  " + $email + "\r\n" + 
    "Topic:   " + $topic + "\r\n" +
    "Message: " + $message    ;
  
  if (mail($to, $subject, $body, $headers)) {
    echo "OK";
  } else {
    echo "ERROR";
  }
}
?>