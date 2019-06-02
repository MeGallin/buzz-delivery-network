<?php
  // This is to check for the hidden field to kill bots..by GA
  if (isset($_POST['falsename']) && !empty($_POST['falsename'])) {
   die('You are not human!' . '<a href="http://www.yahoo.com"> Click here to try again</a>');
  }



if(isset($_FILES['file'])){
  $file = $_FILES['file'];
  // File properties
$file_name = $file['name'];
$file_tmp = $file['tmp_name'];
$file_size = $file['size'];
$file_error = $file['error'];

// work out the file extension
  $file_ext = explode('.', $file_name);
  $file_ext =  strtolower(end($file_ext));

  $allowed = array('txt','png' );
    if(in_array($file_ext,$allowed)){

      if ($file_error === 0) {

        if ($file_size <= 2097152) {
        $file_destination = 'news/' . $file_name;

          if (move_uploaded_file($file_tmp, $file_destination)) {
            echo "success" . "<br />";
            echo "<a href='index.html'>Click here to continue </a>";

          }
        }
      }
    }
  }

?>
