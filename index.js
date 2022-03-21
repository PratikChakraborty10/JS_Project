var div = document.getElementById("inside_div");
var f1=function(){
    console.log("Booking Confirmed!!");
    cancel_btn.disabled=true;
    update_btn.disabled=true;
    pending_btn.disabled=true;
    div.style.backgroundColor="green";
}

var f2=function(){
    console.log("Booking Cancelled!!");
    confirm_btn.disabled=true;
    update_btn.disabled=true;
    pending_btn.disabled=true;
    div.style.backgroundColor="green";
}

var f3=function(){
    console.log("Booking Updated!!");
    cancel_btn.disabled=true;
    confirm_btn.disabled=true;
    pending_btn.disabled=true;
    div.style.backgroundColor="green";
}

var f4=function(){
    console.log("Booking Pending!!");
    cancel_btn.disabled=true;
    update_btn.disabled=true;
    confirm_btn.disabled=true;
    div.style.backgroundColor="green";
}
var confirm_btn=document.getElementById("confirm_btn");
var cancel_btn=document.getElementById("cancel_btn");
var update_btn=document.getElementById("update_btn");
var pending_btn=document.getElementById("pending_btn");
confirm_btn.onclick=f1;
cancel_btn.onclick=f2;
update_btn.onclick=f3;
pending_btn.onclick=f4;

confirm_btn.addEventListener("clicked for Exp.",f1);
cancel_btn.addEventListener("clicked for Exp.",f2);
update_btn.addEventListener("clicked for Exp.",f3);
pending_btn.addEventListener("clicked for Exp.",f4);
