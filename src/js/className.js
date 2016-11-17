function addClass(el, newClass) {
	if(el.className.indexOf(newClass) !== -1) {
		return;
	}

	if(el.className !== ''){
		newClass = ' ' + newClass;
	}

	el.className += newClass;
}

function getDate() {
	var data = null;
	$.ajax({
        url: 'https://cms.ppmoney.com/json/57b02395f3aa26a91a218637.json',
        type: 'get',
        dataType: 'jsonp',
        jsonpCallback: 'fn_activityGetData_57b02395f3aa26a91a218637',
        success: function (data) {
        	data = data;
        },
        timeout: 5000,
        error: function (data) {}
    });
    return data;
}