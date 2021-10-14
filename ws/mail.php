<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

$errors = array();  	// array to hold validation errors
$data = array(); 		// array to pass back data

// validate the variables ======================================================
$contact = null;
$contact = !empty($_POST) ? $_POST : $_GET;

if (!empty($contact)) {
		
	foreach($contact as $key => $value) {
		
		$dataForm[$key] = $value;

		if(empty($dataForm[$key])) {
			$errors[$key] = true;
		}

	}

	// return a response ===========================================================
		// response if there are errors

		if (!empty($errors)) {
			// if there are items in our errors array, return those errors
			$data['success'] = false;
			$data['errors']  = $errors;
		} else {

			$to = "ronipaschoal@gmail.com";
			$subject = "Contato SetFin";
			
			$msg = "<html>";
			$msg .= "<body>";
			$msg .= "<table>";	
			foreach($dataForm as $key => $value) {
				$msg .= "<tr>";
				$msg .= "<td style='vertical-align: top; padding-right: 5px; color: #777'>". $key .":</td>";
				$msg .= "<td>". wordwrap($value,70) ."</td>";
				$msg .= "</tr>";
			}
			$msg .= "</table>";
			$msg .= "</body>";
			$msg .= "</html>";

			// Always set content-type when sending HTML email
			$headers = "MIME-Version: 1.0" . "\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
			$headers .= "From: contato@fiversystem.com";

			if(mail($to, $subject, $msg, $headers)) {
				$data['success'] = true;
			} else {
				$data['success'] = false;
			}
		}

} else {
	$data['success'] = false;
	$data['errors']  = 'Houve um erro no envio!';
}
	// return all our data to an AJAX call
	echo json_encode($data);
?>