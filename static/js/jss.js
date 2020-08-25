
$(document).ready(function anima(){
    $(".flashnews").animate({left:"1500px"},2000);
    $(".flashnews").animate({left:"0px"},2000);
	$(".flashnews").animate({left:"750px"},2000);
	$(".flashnews").promise().done(function(){
	$(".testdrive").animate({opacity:"1"},2000);});
	
});




$(document).ready(function (){$("#price_tag").hide();});
$(document).ready(function(){
	$('#cars').change(function (e) {
		    e.preventDefault();
		    var car_name=this.options[this.selectedIndex].innerHTML;
            $.ajax({ 
            data: {'car_name':car_name},
            type: "POST",
            url:  "car_name", 
            success: function(json) { 
			$("#variants option[value!=0]").each(function() {
			$(this).remove();
			});
             
			for (var key in json){
	
	         $("#variants").append(new Option(json[key].variants,json[key].variants));
	        }
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
});
  
$(document).ready(function(){
	$('#variants').change(function (e) {
		    e.preventDefault();
			var car_name=cars.options[cars.selectedIndex].innerHTML;
		    var variants=$(this).val();
            $.ajax({ 
            data: {'variants':variants,'car_name':car_name},
            type: "POST",
            url:  "variants", 
            success: function(json) { 
			$("#bhp option[value!=0]").each(function() {
			$(this).remove();
			});
            
			for (var key in json){
	         $("#bhp").append(new Option(json[key].bhp,json[key].bhp));
	        }
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
});

$(document).ready(function(){
	$('#bhp').change(function (e) {
		    e.preventDefault();
			var car_name=cars.options[cars.selectedIndex].innerHTML;
		    var variants=$('#variants').val();
			var bhp=$(this).val();
            $.ajax({ 
            data: {'variants':variants,'car_name':car_name,'bhp':bhp},
            type: "POST",
            url:  "bhp", 
            success: function(json) { 
			$("#cc option[value!=0]").each(function() {
			$(this).remove();
			});
             
			for (var key in json){
	         $("#cc").append(new Option(json[key].cc,json[key].cc));
	        }
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
});

$(document).ready(function(){
	$('#cc').change(function (e) {
		    e.preventDefault();
			var car_name=cars.options[cars.selectedIndex].innerHTML;
		    var variants=$('#variants').val();
			var bhp=$('#bhp').val();
			var cc=$(this).val();
            $.ajax({ 
            data: {'variants':variants,'car_name':car_name,'bhp':bhp,'cc':cc},
            type: "POST",
            url:  "cc", 
            success: function(json) { 
			$("#transmission option[value!=0]").each(function() {
			$(this).remove();
			});
             
			for (var key in json){
	         $("#transmission").append(new Option(json[key].transmission,json[key].transmission));
	        }
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
});

$(document).ready(function(){
	$('#transmission').change(function (e) {
		    e.preventDefault();
			var car_name=cars.options[cars.selectedIndex].innerHTML;
		    var variants=$('#variants').val();
			var bhp=$('#bhp').val();
			var cc=$('#cc').val();
			var transmission=$(this).val();
            $.ajax({ 
            data: {'variants':variants,'car_name':car_name,'bhp':bhp,'cc':cc,'transmission':transmission},
            type: "POST",
            url:  "transmission", 
            success: function(json) { 
			$("#fuel option[value!=0]").each(function() {
			$(this).remove();
			});
             
			for (var key in json){
	         $("#fuel").append(new Option(json[key].fuel,json[key].fuel));
	        }
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
});

$(document).ready(function(){
	$('#fuel').change(function (e) {
		    e.preventDefault();
			var car_name=cars.options[cars.selectedIndex].innerHTML;
		    var variants=$('#variants').val();
			var bhp=$('#bhp').val();
			var cc=$('#cc').val();
			var transmission=$('#transmission').val();
			var fuel=$(this).val();
            $.ajax({ 
            data: {'variants':variants,'car_name':car_name,'bhp':bhp,'cc':cc,'transmission':transmission,'fuel':fuel},
            type: "POST",
            url:  "fuel", 
            success: function(json) { 
	        price.innerHTML="Rs"+json['price'].price;
			$("#price_tag").show();
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
});


$(document).ready(function(){
	$('#conf_book').click(function (e) {
		    e.preventDefault();
            $.ajax({ 
            data: {'':''},
            type: "POST",
            url:  "conf_booking", 
            success: function(json) { 
	        conf_book.innerHTML=json.conf;
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
});
var EMAIL_FOR_APPROVAL;
$(document).ready(function(){
	$('#appr').click(function (e) {
		    
		    e.preventDefault();
            $.ajax({ 
            data: {'email_for_approval':EMAIL_FOR_APPROVAL},
            type: "POST",
            url:  "approve", 
            success: function(json) { 
	        approval.innerHTML=json.approve;
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
});

function fun(element){

var x=element.parentNode.parentNode.rowIndex;
Name.innerHTML=document.getElementById("cont").rows[x].cells[1].innerHTML;
email.innerHTML=document.getElementById("cont").rows[x].cells[2].innerHTML;
EMAIL_FOR_APPROVAL=document.getElementById("cont").rows[x].cells[2].innerHTML;
phone.innerHTML=document.getElementById("cont").rows[x].cells[3].innerHTML;
house_name.innerHTML=document.getElementById("cont").rows[x].cells[4].innerHTML;
town.innerHTML=document.getElementById("cont").rows[x].cells[5].innerHTML;
distric.innerHTML=document.getElementById("cont").rows[x].cells[6].innerHTML;
state.innerHTML=document.getElementById("cont").rows[x].cells[7].innerHTML;
booked_car.innerHTML="Booked Car No:"+document.getElementById("cont").rows[x].cells[8].innerHTML;
approval.innerHTML=document.getElementById("cont").rows[x].cells[9].innerHTML;

var tex=document.getElementById("cont").rows[x].cells[8].innerHTML;
if (tex=='not booked'){
    document.getElementById("appr").disabled = true;
}
else{
	document.getElementById("appr").disabled = false;
}
}

function Car_upd(events){
	x=events.parentNode.parentNode.rowIndex;
	car_slno_upd.value=document.getElementById("car_list").rows[x].cells[0].innerHTML;
	car_name_upd.value=document.getElementById("car_list").rows[x].cells[1].innerHTML;
	car_variants_upd.value=document.getElementById("car_list").rows[x].cells[2].innerHTML;
	car_bhp_upd.value=document.getElementById("car_list").rows[x].cells[3].innerHTML;
	car_cc_upd.value=document.getElementById("car_list").rows[x].cells[4].innerHTML;
	car_transmission_upd.value=document.getElementById("car_list").rows[x].cells[5].innerHTML;
	car_fuel_upd.value=document.getElementById("car_list").rows[x].cells[6].innerHTML;
	car_price_upd.value=document.getElementById("car_list").rows[x].cells[7].innerHTML;
	
	$("#car_updation_model").modal('toggle');
}


$(document).ready(function(){
	$('#update_car').submit(function (e) {
		    e.preventDefault();
            var formData = new FormData(this);
			var slno=$("#car_slno_upd").val();
			formData.append('car_slno_upd',slno);
            $.ajax({ 
            data: formData,
            type: "POST",
            url:  "car_updations", 
			cache: false,
            contentType: false,
            processData: false,
            success: function(json) { 
			alert(json.result);
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
	
});


$(document).ready(function(){
	$('#photo_car_update').submit(function (e) {
		    e.preventDefault();
            var formData = new FormData(this);
			var slno=$("#car_slno_upd").val();
			formData.append('car_slno_upd',slno);
            $.ajax({ 
            data: formData,
            type: "POST",
            url:  "car_photo_updation", 
			cache: false,
            contentType: false,
            processData: false,
            success: function(json) { 
			alert(json.result);
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
	
});




function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}





$(document).ready(function(){
	$('#sub_but').click(function (e) {
			var your_name=$("#your_name").val();
			var your_email=$("#your_email").val();
			var contact=$("#contact").val();
			var contact_time=$("#contact_time").val();
			var message=$("#message").val();
		    
            $.ajax({ 
			headers: {'X-CSRFToken': getCookie('csrftoken')},
                
            data: {'your_name':your_name,'your_email':your_email,'contact':contact,'contact_time':contact_time,'message':message},
            type: "POST",
            url:  "contact", 
            success: function(json) { 
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
});

$(document).ready(function(){
	$('#testdrive_form').submit(function (e) {
		    var formData=new FormData(this);
		    e.preventDefault();
            $.ajax({ 
            data: formData,
            type: "POST",
            url:  "testdrive", 
			cache: false,
            contentType: false,
            processData: false,
            success: function(json) { 
			//alert("Thanks!! We will contact you");
			alert(json.update);
			$(location).attr('href','home');
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
});

$(document).ready(function(){
	$('#pswd').focus(function (e) {
			var email=$("#reg_email").val();
		    e.preventDefault();
            $.ajax({ 
			headers: {'X-CSRFToken': getCookie('csrftoken')},   
            data: {'email':email,},
            type: "POST",
            url:  "duplicate_checker", 
            success: function(json) { 
			if (json.result=='exist'){
			//alert("email id already exist");
		    email_validation.innerHTML="Email already registered";
			document.getElementById("email_validation").style.color="red";
            document.getElementById("reg_submit").disabled=true;
			}
			else{
			email_validation.innerHTML="Valid";
			document.getElementById("email_validation").style.color="green";
            document.getElementById("reg_submit").disabled=false;
				
			}
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
});

$(document).ready(function(){
	$('#uploadData').submit(function (e) {
		    e.preventDefault();
            var formData = new FormData(this);
            $.ajax({ 
            data: formData,
            type: "POST",
            url:  "admin_entry", 
			cache: false,
            contentType: false,
            processData: false,
            success: function(json) { 
			alert(json.update);
			},
            error: function(json) {  alert("Connection Error"); }
			});         
	
	    
	});
	
});


function rowDelete(e){
	if (confirm('Are you sure you want to delete this ?')) {
        var x=e.parentNode.parentNode.rowIndex;
        var txt=document.getElementById("testdrive_list").rows[x].cells[2].innerHTML;
        document.getElementById("testdrive_list").deleteRow(x);
        email={'email':txt,'table':'Testdrive'}
        deletion_from_db(email)

        } 

}


function Contact_Del(e){
	if (confirm('Are you sure you want to delete this ?')) {
        var x=e.parentNode.parentNode.rowIndex;
        var txt=document.getElementById("contact_list").rows[x].cells[2].innerHTML;
        document.getElementById("contact_list").deleteRow(x);
        email={'email':txt,'table':'Contact'}
        deletion_from_db(email)
}
}

function Reg_Del(e){
	if (confirm('Are you sure you want to delete this ?')) {
        var x=e.parentNode.parentNode.rowIndex;
        var txt=document.getElementById("cont").rows[x].cells[2].innerHTML;
        document.getElementById("cont").deleteRow(x);
        email={'email':txt,'table':'Register'}
        deletion_from_db(email)
}
}
var ROWINDEX;
var ROWTEXT;

function Car_del(e){
ROWINDEX=e.parentNode.parentNode.rowIndex;
ROWTEXT=document.getElementById("car_list").rows[ROWINDEX].cells[0].innerHTML;
$('#warning').modal('toggle');
}

function CAR_DEL(req){
    if(req=='YES'){
	 email={'email':ROWTEXT,'table':'Cars'}
	 document.getElementById("car_list").deleteRow(ROWINDEX);
	 deletion_from_db(email);
	}
}


function deletion_from_db(email){
	

            $.ajax({ 
			headers: {'X-CSRFToken': getCookie('csrftoken')},
            data: email,
            type: "POST",
            url:  "data_delete", 
            success: function(json) { 
			alert(json.result);
			},
            error: function(json) {  alert("Connection Error"); }
			});    
	
	
}

function start_testdrive(){
	$('#testdrive_modal').modal('toggle');
	
};


function UpdateMyprofile(){
	var update_detail=new Array(6);
	email=document.getElementById("emailfield").innerHTML;
	$('#profileUpdation').each(function () {
		  var fields = $(this).find(":text");
		  for (i=0;i<6;i++){
		  update_detail[i]=fields.eq(i).val();
		  }
    });
	datas={'name':update_detail[0],'email':email,'phone':update_detail[1],'house_name':update_detail[2],'town':update_detail[3],'distric':update_detail[4],'state':update_detail[5]};
	UPDATE_PROFILE(datas);
};


function UpdateMyprofileNormalUser(){
	var update_detail=new Array(6);
	email=document.getElementById("emailfieldNormalUser").innerHTML;
	$('#profileUpdationNormalUser').each(function () {
		  var fields = $(this).find(":text");
		  for (i=0;i<6;i++){
		  update_detail[i]=fields.eq(i).val();
		  }
    });
	datas={'name':update_detail[0],'email':email,'phone':update_detail[1],'house_name':update_detail[2],'town':update_detail[3],'distric':update_detail[4],'state':update_detail[5]};
	//alert(datas.name);
	UPDATE_PROFILE(datas);
	
}


function UPDATE_PROFILE(datas){

		  $.ajax({ 
			headers: {'X-CSRFToken': getCookie('csrftoken')},
            data: datas,
            type: "POST",
            url:  "profile_updation", 
            success: function(json) { 
			location.reload();
			alert(json.result);
			
			},
            error: function(json) {  alert("Connection Error"); }
			}); 	
	
};

/* MAGNIFIER*/



function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}


