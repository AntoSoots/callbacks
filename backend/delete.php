<?php
require __DIR__.'/callbacks.php';
$callbackId = $_POST['id'];
deleteCallback($callbackId);
?>