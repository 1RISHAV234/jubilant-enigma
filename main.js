menu_list_array = ["Veg Margherita Pizza",
                   "Chicken Tandoori Pizza",
                   "Veg Supreme Pizza",
                   "Paneer Tikka Pizza",
                   "Deluxe Veggie Pizza",
                   "Veg Extravaganza Pizza"];

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    lengthofmla = menu_list_array.length;
        for (x = 0 ; x < lengthofmla ; x++){
            htmldata=htmldata+"<li>"+menu_list_array[x]+"</li>"
        }
    htmldata=htmldata+"</ol>";
    document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var a = 0;a<menu_list_array.length; a++) {
    htmldata="<div class='card'>"+"<img src='pizzaImg.png'/>"+menu_list_array[a]+"</div>"
}
htmldata="</section>"
document.getElementById("display_addmenu").innerHTML=htmldata;

}

function add_top(){
    var ToPpInG = document.getElementById("add_item").value;
    menu_list_array.push(ToPpInG);
    add_item();
}