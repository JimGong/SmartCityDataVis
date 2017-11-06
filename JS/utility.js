function parseDate(stringDate){
	var momentDate= moment(stringDate, "MM/DD/YY H:m")
	return momentDate.toDate();
}

function getLat(roadId, stationId, stationData){
	for(var i=0; i<stationData.length; i++){
		var curRow=stationData[i];
		if(curRow["Road_Id"] == roadId && curRow["Station_Id"] == stationId){
			return curRow["Lat"];
		}
	}
}
function getLon(roadId, stationId, stationData){
	for(var i=0; i<stationData.length; i++){
		var curRow=stationData[i];
		if(curRow["Road_Id"] == roadId && curRow["Station_Id"] == stationId){
			return curRow["Lon"];
		}
	}
}