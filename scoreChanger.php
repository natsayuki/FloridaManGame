<?php
$type = $_POST["type"];
$submission = $_POST["title"];

$json_file = file_get_contents("articles.json");
$temp_json = json_decode($json_file,true);
$temp_json[$submission][$type]++;
$correct = $temp_json[$submission]["correct"];
$incorrect = $temp_json[$submission]["incorrect"];
if ($correct + $incorrect === 50) {
  if ($correct >= 45) { //90% or more of answers are correct;
    unset($temp_json[$submission]);
    echo "Removed submission with large percentage of corrects. ";
  }
}
$json = json_encode($temp_json);
file_put_contents("articles.json",$json);
echo "Successfully logged answer."

?>
