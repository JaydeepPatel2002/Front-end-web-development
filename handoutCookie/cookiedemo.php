<?php
if ( isset( $_GET["username"] ) ) {
    setcookie( "username", $_GET["username"] );
}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Cookie demonstration</title>
    </head>
	
    <body>
        <h1>Cookie demonstration</h1>
        <p>
            <?php

if ( isset ( $_COOKIE["username"] ) ) {
    echo "The value of the username cookie is: " . $_COOKIE["username"] . "\n";
} else {
    echo "The username cookie is not set\n";
}

?>
        </p>
     </body>
</html>