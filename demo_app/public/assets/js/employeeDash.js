window.onload=function(){
	var myObj={name:"hello"} ;
	document.getElementById("fill_attendance").addEventListener("submit", function(e){
		
		e.preventDefault();
	//sample status variable --will be replaced with the html select option
	var select = document.getElementById('attendance_status');
	var value = select.options[select.selectedIndex].value;
	console.log(value); 

		makecall();
		return true;
	});
	let makecall = async()=>{
		// post to API
			let res = await jQuery.ajax({
				url: '/api/method/demo_app.api.fill_attendance',
				method: 'POST',
				data:myObj,
				headers: {
					'Content-Type': 'application/json',
					'X-Frappe-CSRF-Token': frappe.csrf_token
				},
			})
			console.log(res);
			
		}	  
}


/*
window.onload=function(){
	
		
	document.getElementById("fill_attendance").addEventListener("submit", function(e){
		
		e.preventDefault();
	
		//sample status variable --will be replaced with the html select option
		var select = document.getElementById('attendance_status');
		value = select.options[select.selectedIndex].value;
		console.log(value); 
	
		var value;
		var myObj;
		frappe.call({ method: "frappe.client.get_value", 
		async:false, 
		args:{ doctype:'Employee', filters:{ name:frm.doc.owner }, fieldname:['employee','company'] }, 
		callback:function (r) { if(r.message != undefined){
	
			myObj = {status:value,employee: r.message.employee,company:r.message.company};
			console.log(myObj) } } }); 
	
		 
	
	
	// post to API
		let res = await $.ajax({
			url: '/api/method/demo_app.api.fill_attendance',
			method: 'POST',
			data:myObj,
			headers: {
				'Content-Type': 'application/json',
				'X-Frappe-CSRF-Token': frappe.csrf_token
			},
		});
		console.log(res);
		return false;
		
	});
	}
	
	
	*/