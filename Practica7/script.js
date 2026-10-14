const textoCafe = `{
  "title": "Latte",
  "description": "As the most popular coffee  drink out there, the latte is made with a shot of espresso and steamed milk, with just a touch of foam. It can be ordered plain or flavored with everything from vanilla to pumpkin spice.",
  "ingredients": [
    "Espresso",
    "Steamed milk"
  ],
  "image": "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
  "id": 2
}`;

console.log(textoCafe);

//Lo convierto en objeto
function leerCafe(texto) {
  try {
    return JSON.parse(texto);
  } catch (error) {
    console.error("No se ha podido interpretar el JSON:", error.message);
    return null;
  }
}

const cafe = leerCafe(textoCafe);

console.log("Tipo de dato de cafe : " + typeof cafe);
console.log(cafe);

//Propiedades de cafe
console.log(cafe.title);
console.log(cafe.ingredients);
console.log(cafe.description);
console.log(cafe.image);
console.log(cafe.id);

//Primera ficha
const fichaCafe = {
  nombre : cafe.title,
  ingredientes : cafe.ingredients,
  imagen : cafe.image,
  id : cafe.id
};

console.log(fichaCafe);

//Primera ficha a JSON
const fichaCafeJson = JSON.stringify(fichaCafe,null,2)

console.log("FichaCafeJSON : " + fichaCafeJson);

//Titulo e imagen
document.body.innerHTML+=("<h1>"+fichaCafe.nombre + "<br>" +
    '<img height="300" src="' + fichaCafe.imagen + '">');


//Segunda ficha
const fichaCafe2 = {
  nombre : cafe.title,
  ingredientes : cafe.ingredients,
  id : cafe.id,
};

//Segunda ficha a JSON
const fichaCafe2Json = JSON.stringify(fichaCafe2,["id","nombre","ingredientes"],2)

document.body.innerHTML+=("Ficha en formato JSON : <br>" + "<pre>"+fichaCafe2Json);

//JSON a objeto
const cafe2 = leerCafe(fichaCafe2Json);
console.log(cafe2);