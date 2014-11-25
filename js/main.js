function sendSMS(num, msg,id)
{
	var URL = "https://post.chikka.com/smsapi/request"; // link
	var sCode = ""; // Short code
	var cID = ""; // Client ID
	var sKey = "" // Secret Key
	var mID = id;

var http = new XMLHttpRequest({mozSystem: true});
http.open("POST", URL, true);
data = "message_type=SEND" + "&mobile_number=" + String(num) + "&shortcode=" + sCode + "&message_id=" + mID + "&message=" + msg + "&client_id=" + cID + "&secret_key=" + sKey;

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", data.length);
http.setRequestHeader("Connection", "close");
http.send(data);

// old code
/*	
	$.ajaxSetup( {
	  xhr: function() {
		return new window.XMLHttpRequest( {
		  mozSystem: true
		} );
	  }
	});
	$.ajax({
    type: "POST",
	url: URL,
	dataType: "json",
	data: 
	{
		message_type : "SEND",
		mobile_number : num,
		shortcode: sCode,
		message_id : "1",
		message : msg,
		client_id : cID,
		secret_key : sKey
	},
    success: function (result) {
		onSuccess();
       console.log(result);
    },
	fail: function(result)
	{
		onFail();
		console.log(result);
	}	
});
*/
}

function IsEmpty(id)
{
	var field = document.getElementById(id).value;
	if(field == '')
		{
			return true;
		}
		else
			{
				return false;
			}
}


$('#submit').click(function()
{
	if(IsEmpty('mobileNumber') == true)
	{
		swal('Whoa...','Mobile number is blank.');
		return false;
	}
	else if(IsEmpty('id') == true)
	{
		swal('Whoa...','You cannot send an empty ID');
		return false;
	}
	else if(IsEmpty('message') == true)
	{
		swal('Whoa...','You cannot send an empty message');
		return false;
	}
	else
	{
		var num = document.getElementById('mobileNumber').value;
		var id = document.getElementById('id').value;
		var msg = document.getElementById('message').value;
		sendSMS(num, msg,id);
	}
});


function onSuccess()
{
	document.getElementById('mobileNumber').value = "";
	document.getElementById('message').value = "";
	swal('Yay!','Message sent.','success');
}

function onFail()
{
	document.getElementById('mobileNumber').value = "";
	document.getElementById('message').value = "";
	swal('Meh.','There was an error sending your request.');
}