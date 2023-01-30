	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		shellfish: false,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		shellfish: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		shellfish: false,
		price: 10.00
	},
	{
		name: "blueberry",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		shellfish: false,
		price: 5.00
	},
	{
		name: "beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 12.00
	},
	{
		name: "mushroom",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		shellfish: false,
		price: 6.00
	},
	{
		name: "egg",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		shellfish: false,
		price: 6.00
	},
	{
		name: "shrimp",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		shellfish: true,
		price: 11.00
	},
	{
		name: "zucchini",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		shellfish: false,
		price: 5.00
	},
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		shellfish: false,
		price: 3.00
	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		shellfish: false,
		price: 2.00
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		shellfish: false,
		price: 7.00
	},
	{
		name: "noodle",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		shellfish: false,
		price: 4.50
	},
	{
		name: "snow crab",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		shellfish: true,
		price: 29.50
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "ShellfishAllergy") && (prods[i].shellfish == false)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "NonOrganic") && (prods[i].organic == false)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
