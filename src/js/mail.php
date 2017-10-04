<?php
// Multiple recipients
$to = 'justinmcnary@yahoo.com, amandaalmquist@yahoo.com'; // note the comma

// Subject
$subject = 'Wedding Question';

// Message
$message = '
<html>
<head>
  <title>Wedding Information</title>
</head>
<body>
<p>
  '.$_POST['name'].'<br>
  '.$_POST['email'].'<br>
  '.$_POST['message'].'
</p>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// // Additional headers
// $headers[] = 'To: Mary <mary@example.com>, Kelly <kelly@example.com>';
// $headers[] = 'From: Birthday Reminder <birthday@example.com>';
// $headers[] = 'Cc: birthdayarchive@example.com';
// $headers[] = 'Bcc: birthdaycheck@example.com';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));
echo('message has been sent');
?>
