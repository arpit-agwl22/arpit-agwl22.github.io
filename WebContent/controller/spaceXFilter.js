let filterVal1, filterVal2, filterVal3;
function onClickYear(data){
	filterVal1 = event.target.innerText; 	
	var xmlhttp = new XMLHttpRequest();
	var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+filterVal.toLowerCase() ;
	let spaceXdata;
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	     spaceXdata = JSON.parse(this.responseText);
	    loadSpaceXData(spaceXdata,"true");
	  }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
};

function onClickLaunch(){
	filterVal2 = event.target.innerText; 	
	var xmlhttp = new XMLHttpRequest();
	var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+filterVal.toLowerCase() ;
	let spaceXdata;
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	     spaceXdata = JSON.parse(this.responseText);
	    loadSpaceXData(spaceXdata,"true");
	  }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
};

function onClickLand(){
	filterVal3 = event.target.innerText; 	
	var xmlhttp = new XMLHttpRequest();
	var url = "https://api.spaceXdata.com/v3/launches?limit=100&land_success="+filterVal.toLowerCase() ;
	let spaceXdata;
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	     spaceXdata = JSON.parse(this.responseText);
	    loadSpaceXData(spaceXdata,"true");
	  }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

