<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");

    $apiUrl = $_GET['apiUrl'];
    $file = file_get_contents($apiUrl);
    echo $file;
?>