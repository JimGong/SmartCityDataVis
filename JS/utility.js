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

function getY(x, x1,y1,x2,y2){
	var slop =  (y2-y1)/(x2-x1);
	var y= slop*(x-x1)+y1;
	return y;
}

function drawDots(sp, ep, map, geojson, speedFactor,interval){
	for(var i=0;i<speedFactor;i++){
		var x=sp[0]+ i*interval;
		var y= getY(x,sp[0], sp[1],ep[0],ep[1]);
		console.log(x,y);
		geojson.features[0].geometry.coordinates.push([x,y]);
		map.getSource('route').setData(geojson);
	}

}