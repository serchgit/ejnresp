<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "sisconv";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM evento2";
$conn->set_charset("utf8");
$result = $conn->query($sql);

#var_dump($result->fetch_assoc());
$Datos= array();
$data=[];

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$data1[]=$row;
        array_push($Datos,array( "Participante" => $row["Participante"],"Lugar"=>$row["Lugar"],"Puntuacion"=> $row["Puntuacion"]));
        $data[]=array( "Participante" => $row["Participante"],"Lugar"=>$row["Lugar"],"Puntuacion"=> $row["Puntuacion"]);
       # var_dump($Datos,false);
    }
    
    //echo json_encode($data1);
}else{
    echo "0 results";
}	
	echo json_encode($Datos,JSON_UNESCAPED_UNICODE);
$conn->close();
?>