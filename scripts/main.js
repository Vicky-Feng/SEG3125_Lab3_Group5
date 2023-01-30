openNav();
openInfo(event, 'Client');

// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	// tablinks = document.getElementsByClassName("tablinks");
	// for (i = 0; i < tablinks.length; i++) {
	// 	tablinks[i].className = tablinks[i].className.replace(" active", "");
	// }

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += "active";
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
	var c1 = document.getElementById("choice1");
	var c2 = document.getElementById("choice2");
	var c3 = document.getElementById("choice3");
	var c4 = document.getElementById("choice4");
	var c5 = document.getElementById("choice5");
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray =products;

	if (c1.checked)
		optionArray = restrictListProducts(optionArray, "Vegetarian");
	if (c2.checked)
		optionArray = restrictListProducts(optionArray, "GlutenFree");
	if (c3.checked)
		optionArray = restrictListProducts(optionArray, "ShellfishAllergy");
	if (c4.checked)
		optionArray = restrictListProducts(optionArray, "Organic");
	if (c5.checked)
		optionArray = restrictListProducts(optionArray, "NonOrganic");
	if(!(c1.checked||c2.checked||c3.checked||c4.checked||c5.checked))
		optionArray = restrictListProducts(optionArray, "None");

	optionArray=optionArray.sort(
		(p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	var appended = false;
	var sixDiv = document.createElement("div");
	sixDiv.className = "ib";
	for (i = 0; i < optionArray.length; i++) {
		appended = false;
		var curDiv = document.createElement("div");
		curDiv.className = "itemBlock";
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName.name;
		checkbox.id = productName.price;
		checkbox.alt = productName.img;

		var img = document.createElement('img')
		img.src = './img/'+productName.img;
		curDiv.appendChild(img);
		// create a breakline node and add in HTML DOM
		curDiv.appendChild(document.createElement("br"));   
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName.name;
		curDiv.appendChild(checkbox);
		
		label.appendChild(document.createTextNode(productName.name));
		curDiv.appendChild(label);
		curDiv.appendChild(document.createElement("br"));
		curDiv.appendChild(document.createTextNode("$" + productName.price));
		curDiv.appendChild(document.createElement("br")); 
		sixDiv.appendChild(curDiv);
		//s2.appendChild(curDiv);
		if(i%5==0&&i!=0){
			s2.appendChild(sixDiv);
			sixDiv = document.createElement("div");
			sixDiv.className = "ib";
			alert("change row")
			appended = true;
		}

	}
	if(!appended)
		s2.appendChild(sixDiv);
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	alert("item successfully added!")
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createTextNode(" $"+ele[i].id));
			var img = document.createElement('img')
			img.src = './img/' + ele[i].alt;
			para.appendChild(document.createElement("br"));
			para.appendChild(img);
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}
