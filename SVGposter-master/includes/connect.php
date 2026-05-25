<?php
$host = "localhost";
$user = "root";
$pw = ;
$db = "cards";

$conn = mysqli_connect($host, $user, $pw, $db);

if (!$conn) {
    echo "no card here";
    die;
}

//echo "connected";

if (isset($_GET["label"])) {
    $theLabel = $_GET["label"];
    $myQuery = "SELECT * FROM labels WHERE label='$theLabel'";

    $result = mysqli_query($conn, $myQuery);

    $rows = array();

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
}
?> 