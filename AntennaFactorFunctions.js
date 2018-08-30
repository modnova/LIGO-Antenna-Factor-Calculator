//These are the debug mode functions and the main functions(leave debugging on).
//This allows people to see the intermediate variables in the main function.
var DEBUG_MODE=true;

//defined externally
var DOM_FieldID_MagnetarRA_Hours 	= "MagnetarRA_Hours";
var DOM_FieldID_MagnetarRA_Minutes 	= "MagnetarRA_Minutes";
var DOM_FieldID_MagnetarRA_Seconds 	= "MagnetarRA_Seconds";
var DOM_FieldID_MagnetarDEC_Degrees	= "MagnetarDEC_Degrees";
var DOM_FieldID_MagnetarDEC_Minutes 	= "MagnetarDEC_Minutes";
var DOM_FieldID_MagnetarDEC_Seconds 	= "MagnetarDEC_Seconds";
var DOM_FieldID_DetectorLat		= "DetectorLat";
var DOM_FieldID_DetectorLng		= "DetectorLng";
var DOM_FieldID_DetectorOrientation 	= "DetectorOrientation";

//Sets Magnetar Values to the debugging console.
function SetMagnetarValues (magnetar_id) {
	if (DEBUG_MODE) {
		console.log(magnetar_id);	
		console.log(ANTENNA_FACTOR_CONSTANTS);
		console.log(ANTENNA_FACTOR_CONSTANTS.MAGNETARS);
		console.log(ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]);	
		console.log(ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["RA"]);	
		console.log(ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["RA"]["_hours"]);	
		console.log(ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["RA"]["_minutes"]);
		console.log(ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["RA"]["_seconds"]);
		console.log(ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["DEC"]["_degrees"]);
		console.log(ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["DEC"]["_minutes"]);
		console.log(ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["DEC"]["_seconds"]);
		
	}
	
	$('#' + DOM_FieldID_MagnetarRA_Hours).val (ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["RA"]["_hours"]); 
	$('#' + DOM_FieldID_MagnetarRA_Minutes).val  (ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["RA"]["_minutes"]); 
	$('#' + DOM_FieldID_MagnetarRA_Seconds).val (ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["RA"]["_seconds"]); 
	
	$('#' + DOM_FieldID_MagnetarDEC_Degrees).val (ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["DEC"]["_degrees"]); 
	$('#' + DOM_FieldID_MagnetarDEC_Minutes).val (ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["DEC"]["_minutes"]); 
	$('#' + DOM_FieldID_MagnetarDEC_Seconds).val (ANTENNA_FACTOR_CONSTANTS.MAGNETARS[magnetar_id]["DEC"]["_seconds"]); 
	

}

//Sets Detector Values to the debugging console.
function SetDetectorValues(detector_id) {
	if (DEBUG_MODE) {
		console.log(detector_id);
		console.log(ANTENNA_FACTOR_CONSTANTS);
		console.log(ANTENNA_FACTOR_CONSTANTS.DETECTORS);
		console.log(ANTENNA_FACTOR_CONSTANTS.DETECTORS[detector_id]);
		console.log(ANTENNA_FACTOR_CONSTANTS.DETECTORS[detector_id]["_lat"]);
		console.log(ANTENNA_FACTOR_CONSTANTS.DETECTORS[detector_id]["_lng"]);		
		console.log(ANTENNA_FACTOR_CONSTANTS.DETECTORS[detector_id]["_orientation"]);

	}


	$('#' + DOM_FieldID_DetectorLat).val (ANTENNA_FACTOR_CONSTANTS.DETECTORS[detector_id]["_lat"]); 
	$('#' + DOM_FieldID_DetectorLng).val  (ANTENNA_FACTOR_CONSTANTS.DETECTORS[detector_id]["_lng"]); 
	$('#' + DOM_FieldID_DetectorOrientation).val (ANTENNA_FACTOR_CONSTANTS.DETECTORS[detector_id]["_orientation"]); 
	

}

//This is the main function that calculates the antenna factors.
function ComputeFValues () {

	var _MAGNETAR_RA_HOURS		=	$('#' + DOM_FieldID_MagnetarRA_Hours).val ();
	var _MAGNETAR_RA_MINUTES	=	$('#' + DOM_FieldID_MagnetarRA_Minutes).val ();
	var _MAGNETAR_RA_SECONDS	=	$('#' + DOM_FieldID_MagnetarRA_Seconds).val ();
	
	var _MAGNETAR_DEC_DEGREES	=	$('#' + DOM_FieldID_MagnetarDEC_Degrees).val ();
	var _MAGNETAR_DEC_MINUTES	=	$('#' + DOM_FieldID_MagnetarDEC_Minutes).val ();
	var _MAGNETAR_DEC_SECONDS	=	$('#' + DOM_FieldID_MagnetarDEC_Seconds).val ();
	
	var _DETECTOR_LAT		=	$('#' + DOM_FieldID_DetectorLat).val ();
	var _DETECTOR_LNG		=	$('#' + DOM_FieldID_DetectorLng).val ();
	var _DETECTOR_ORIENTATION	=	$('#' + DOM_FieldID_DetectorOrientation).val ();
	
	
//Shows the Magnetar and Detector values in the console.
	if (DEBUG_MODE) {
		console.log(_MAGNETAR_RA_HOURS);
		console.log(_MAGNETAR_RA_MINUTES);	
		console.log(_MAGNETAR_RA_SECONDS);
		
		console.log(_MAGNETAR_DEC_DEGREES);
		console.log(_MAGNETAR_DEC_MINUTES);
		console.log(_MAGNETAR_DEC_SECONDS);
		
		console.log(_DETECTOR_LAT);
		console.log(_DETECTOR_LNG);
		console.log(_DETECTOR_ORIENTATION);
	}
	
//This is a list of all the functions.
	GPSTime 		= ConvertUTCtoGPSTime();
	RAseconds 		= GetRAsec();
	RAPrime 		= GetRAPrime();
	LowerPhi		= GetLowerPhi();
	LowerTheta 		= GetLowerTheta();
	alpha 	        = GetAlphaValue();
	beta 	        = GetBetaValue();
	gamma 	        = GetGammaValue();
	iHatSrcX        = GetiHatSrcX();
	iHatSrcY        = GetiHatSrcY();
	iHatSrcZ        = GetiHatSrcZ();
	kHatSrcX        = GetkHatSrcX();
	kHatSrcY        = GetkHatSrcY();
	kHatSrcZ        = GetkHatSrcZ();
	BigTheta 		= GetBigTheta();
	NodeX			= GetNodeX();
	NodeY			= GetNodeY();
	NodeZ			= GetNodeZ();
	BigPhi 			= GetBigPhi();
	BigPsi 			= GetBigPsi();
	FPlus 			= GetFPlus();
	FCross 			= GetFCross();


//This is a list of all the key variables that are in the function and that are shown in the console.	
	if (DEBUG_MODE) {
		console.log(GPSTime);
		console.log(RAseconds);
		console.log(RAPrime);
		console.log(LowerPhi);
		console.log(LowerTheta);
		console.log(alpha);
		console.log(beta);
		console.log(gamma);
		console.log(iHatSrcX);
		console.log(iHatSrcY);
		console.log(iHatSrcZ);
		console.log(kHatSrcX);
		console.log(kHatSrcY);
		console.log(kHatSrcZ);
		console.log(BigTheta);
		console.log(NodeX);
		console.log(NodeY);
		console.log(NodeZ);
		console.log(BigPhi);
		console.log(BigPsi);
		console.log(FPlus);
		console.log(FCross);
	}
	
}

//This function converts UTC to GPS time by taking the input in UTC or GPS and calculating GPS time.
//The program will void UTC input if the GPS time input has values in it.
//This function works by taking the time in UTC time and converts it using a built in JS function into UNIX time(time since 00:00:00 UTC).
//After calculating UNIX time in milliseconds, the function gets the time in seconds and subtracts a number from the UNIX time to get the GPS time which starts earlier than UNIX time does.
//After that the function adds leap seconds onto the converted UNIX time to account for the difference in time between UTC and GPS time. 
	function ConvertUTCtoGPSTime() {
		var day = $('#UTCDay').val();
		var month = $('#UTCMonth').val();
		var year = $('#UTCYear').val();
		var hour = $('#UTCHour').val();
		var minute = $('#UTCMinute').val();
		var second = $('#UTCSecond').val();
		var Leap = $('#LeapSecond').val();
		var GPSTime = $('#gpsTime').val();
		
		if(GPSTime.length > 0){
			
			return GPSTime;
			
		} else {
			
		var D = new Date(Date.UTC(year, (month -1), day, hour, minute, second));
		var UNIX = (D.getTime() / 1000);
		var GPSTime = UNIX - 315964800 + +Leap;
		return GPSTime;
	}
	
}
//This function takes the Right Ascension given in Hours, Minutes and Seconds and converts it to seconds.
	function GetRAsec() {
		
		var _MAGNETAR_RA_HOURS		=	$('#' + DOM_FieldID_MagnetarRA_Hours).val ();
		var _MAGNETAR_RA_MINUTES	=	$('#' + DOM_FieldID_MagnetarRA_Minutes).val ();
		var _MAGNETAR_RA_SECONDS	=	$('#' + DOM_FieldID_MagnetarRA_Seconds).val ();
	
		var RAseconds = (((+_MAGNETAR_RA_HOURS) + ((+_MAGNETAR_RA_MINUTES)/60) + ((+_MAGNETAR_RA_SECONDS)/3600))*3600);
		
		return RAseconds;
	}
	
//This function calculates the new Right Ascension of the star at a given time from the epoch J2000.
//The function here subtracts the seconds that has elapse since the beginning of GPS time to find the time in seconds from GPS time 0.
//Then, the function adds the Right Ascension in seconds and takes the remainder and converts it to hours to find the magnetar's new position.
	function GetRAPrime() {
		
		var RAPrime = (((RAseconds + (GPSTime - 630763148.816)) % 86400) / 3600);
	
		return RAPrime;
	}

//This function gets one of the angles that is required for the rotational matrix(a matrix used to convert other positions in other coordinate systems to the detector's coordinate system).
//Here the new Right Ascension is multiplied by 15 because it calculates the amount of degrees that has been rotated for a given amount of time. 
//Also, the answer is converted to radians to fit the JavaScript trigonometry functions. 	
	function GetLowerPhi () {
		
		var LowerPhi = ((RAPrime * 15) * (Math.PI / 180));
		
		return LowerPhi;
	}

//This function does almost the same thing, but converts DMS to decimal degrees and convert that into another angle to be used for the transformation.
//The lower theta is used to find the celestial latitude relative to the detector.	
	function GetLowerTheta () {
		var _MAGNETAR_DEC_DEGREES	=	$('#' + DOM_FieldID_MagnetarDEC_Degrees).val ();
		var _MAGNETAR_DEC_MINUTES	=	$('#' + DOM_FieldID_MagnetarDEC_Minutes).val ();
		var _MAGNETAR_DEC_SECONDS	=	$('#' + DOM_FieldID_MagnetarDEC_Seconds).val ();
		
		var DecDegrees = ((+_MAGNETAR_DEC_DEGREES) + ((((+_MAGNETAR_DEC_MINUTES) * 60) + (+_MAGNETAR_DEC_SECONDS)) / 3600));
		var LowerTheta = ((DecDegrees + 90) * (Math.PI / 180));

		return LowerTheta;
	}

//This function calculates the alpha values for the rotational matrix.
	function GetAlphaValue() {
		var _DETECTOR_LNG	=	$('#' + DOM_FieldID_DetectorLng).val ();	
			
		var alpha = ((+_DETECTOR_LNG + 90) * (Math.PI / 180));

		return alpha;
	}

//This function calculates the beta values for the rotational matrix.
	function GetBetaValue() {
		var _DETECTOR_LAT	=	$('#' + DOM_FieldID_DetectorLat).val ();
		
		var beta = ((90 - (+_DETECTOR_LAT)) * (Math.PI / 180));
		
		return beta;
	}
//This function calculates the gamma values for the rotational matrix.
	function GetGammaValue() {
		var _DETECTOR_ORIENTATION	=	$('#' + DOM_FieldID_DetectorOrientation).val ();

		var gamma = (((+_DETECTOR_ORIENTATION) - 45) * (Math.PI / 180));
		
		return gamma;
	}

//This function calculates the x-component of the x-component of the source.
	function GetiHatSrcX() {
		
		var iHatSrcX = Math.cos(LowerPhi)*(Math.cos(gamma)*Math.cos(alpha) - Math.cos(beta)*Math.sin(gamma)*Math.sin(alpha)) + Math.sin(LowerPhi)*(Math.cos(gamma)*Math.sin(alpha) + Math.cos(beta)*Math.cos(alpha)*Math.sin(gamma));
		
		return iHatSrcX;
	}

//This function calculates the y-component of the x-component of the source.
	function GetiHatSrcY() {
		
		var iHatSrcY = Math.cos(LowerPhi)*(-Math.sin(gamma)*Math.cos(alpha) - Math.cos(beta)*Math.sin(alpha)*Math.cos(gamma)) + Math.sin(LowerPhi)*(-Math.sin(alpha)*Math.sin(gamma) + Math.cos(beta)*Math.cos(alpha)*Math.cos(gamma));
		
		return iHatSrcY;
	}

//This function calculates the z-component of the x-component of the source.
	function GetiHatSrcZ() {

		var iHatSrcZ = Math.cos(LowerPhi)*(Math.sin(beta)*Math.sin(alpha)) + Math.sin(LowerPhi)*(-Math.sin(beta)*Math.cos(alpha));
		
		return iHatSrcZ;
	}

//These functions do exactly what the previous iHatSrc functions do, except these are for the Z-component.
	function GetkHatSrcX() {

		var kHatSrcX = Math.cos(LowerPhi)*Math.sin(LowerTheta)*(Math.cos(gamma)*Math.cos(alpha) - Math.cos(beta)*Math.sin(gamma)*Math.sin(alpha)) + Math.sin(LowerPhi)*Math.sin(LowerTheta)*(Math.cos(gamma)*Math.sin(alpha) + Math.cos(beta)*Math.cos(alpha)*Math.sin(gamma)) + Math.cos(LowerTheta)*(Math.sin(beta)*Math.sin(gamma));
		
		return kHatSrcX;
	}

	function GetkHatSrcY() {

		var kHatSrcY = Math.cos(LowerPhi)*Math.sin(LowerTheta)*(-Math.sin(gamma)*Math.cos(alpha) - Math.cos(beta)*Math.sin(alpha)*Math.cos(gamma)) + Math.sin(LowerPhi)*Math.sin(LowerTheta)*(-Math.sin(alpha)*Math.sin(gamma) + Math.cos(beta)*Math.cos(alpha)*Math.cos(gamma)) + Math.cos(LowerTheta)*(Math.sin(beta)*Math.cos(gamma));
		
		return kHatSrcY;
	}

	function GetkHatSrcZ() {

		var kHatSrcZ = Math.cos(LowerPhi)*Math.sin(LowerTheta)*(Math.sin(beta)*Math.sin(alpha)) + Math.sin(LowerPhi)*Math.sin(LowerTheta)*(-Math.sin(beta)*Math.cos(alpha)) + Math.cos(LowerTheta)*(Math.cos(beta));
		
		return kHatSrcZ;
	}

//This function takes the dot product between the two Z-components of the magnetar source and the detector.
	function GetBigTheta() {
		
		var BigTheta = Math.acos(((0 * kHatSrcX) + (0 * kHatSrcY) + (kHatSrcZ)));
		
		return BigTheta;
	}
	
//This function finds the x-component of a line orthogonal to both z-components of the source and detector.
	function GetNodeX() {

		var CrossX =  ((-1) * (kHatSrcY));
		var NodeX = (CrossX / (Math.sin(BigTheta)));
		
		return NodeX;
	}

//This function finds the y-component of a line orthogonal to both z-components of the source and detector.
	function GetNodeY() {

		var CrossY =  (kHatSrcX);
		var NodeY = (CrossY / (Math.sin(BigTheta)));

		return NodeY;
	}

//This function finds the z-component of a line orthogonal to both z-components of the source and detector.
	function GetNodeZ() {
	 
		var CrossZ =  0;
		var NodeZ = (CrossZ / (Math.sin(BigTheta)));
		
		return NodeZ;
	}

//This function takes the dot product between the x-component of the detector and the orthogonal line.
	function GetBigPhi() {

		var BigPhi = Math.acos(NodeX);

		return BigPhi;
	}

//This function takes the dot product between the x-component of the source and the orthogonal line.
	function GetBigPsi() {
		
		var BigPsi = Math.acos((iHatSrcX*NodeX) + (iHatSrcY*NodeY) + (iHatSrcZ*NodeZ)); 
		
		return BigPsi;
	}

//This function calculates the FPlus antenna factor. It shows how much of a gravitational wave is in the plus configuration.
	function GetFPlus() {

		var FPlus = ((1/2)*(1 + Math.pow(Math.cos(BigTheta),2))*Math.cos(2*BigPhi)*Math.cos(2*BigPsi)) - (Math.cos(BigTheta)*Math.sin(2*BigPhi)*Math.sin(2*BigPsi));
		document.getElementById("FPlus").value = FPlus;

		return FPlus;
	}

//This function calculates the FCross antenna factor. It shows how much of a gravitational wave is in the cross configuration.
	function GetFCross() {
		
		var FCross = ((1/2)*(1 + Math.pow(Math.cos(BigTheta),2))*Math.cos(2*BigPhi)*Math.sin(2*BigPsi)) + (Math.cos(BigTheta)*Math.sin(2*BigPhi)*Math.cos(2*BigPsi));
		document.getElementById("FCross").value = FCross;
		
		return FCross;
	}
	