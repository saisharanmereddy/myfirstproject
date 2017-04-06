function updatecoffee()
{
	const taxPrice=0.06;
	const mochPrice=7;
	const icoffeePrice=5.50;
	const frapPrice=6;
	const carmachPrice=7.50;
	let mochQuant=document.getElementById("moch").value;
	let icoffeeQuant=document.getElementById("icoffee").value;
	let frapQuant=document.getElementById("frap").value;
	let carmachQuant=document.getElementById("carmach").value;
	let subTotal=(mochQuant*mochPrice)+(icoffeeQuant*icoffeePrice)+(frapQuant*frapPrice)+(carmachQuant*carmachPrice);
	let Tax=(subTotal*taxPrice);
	let Total=subTotal+Tax;
	document.getElementById("subtotal").value="$"+subTotal.toFixed(2);
	document.getElementById("tax").value="$"+Tax.toFixed(2);
	document.getElementById("total").value="$"+Total.toFixed(2);
}
