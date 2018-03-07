<?php
$name = $_POST["name"];
$type = $_POST["type"];
$data = Array (
  "real"=>$type,
  "likes"=>0,
  "correct"=>0,
  "incorrect"=>0
);
$json_file = file_get_contents("articles.json");
$temp_array = json_decode($json_file,true);
if (isset($temp_array[$name]) !== true) {
  $temp_array[$name] = $data;
  $json_data = json_encode($temp_array);
  file_put_contents("articles.json",$json_data);
  echo "Success";
}else {
  echo "Article already exists";
}
?>
