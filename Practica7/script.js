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

function leerCafe(texto) {
  try {
    return JSON.parse(texto);
  } catch (error) {
    console.error("No se ha podido interpretar el JSON:", error.message);
    return null;
  }
}

const cafe = leerCafe(textoCafe);

console.log(typeof cafe);
console.log(cafe);


console.log(cafe.title);
console.log(cafe.ingredients);
console.log(cafe.description);
console.log(cafe.image);
console.log(cafe.id);

const fichaCafe = {
  title : cafe.title,
  ingredients : cafe.ingredients,
  image : cafe.image,
  id : cafe.id
};

console.log(fichaCafe);

const fichaCafeJson = JSON.stringify(fichaCafe,null,2)



document.body.innerHTML+=(
    '<img height="300" src="' + cafe.image + '">'
    +"<pre>"+fichaCafeJson);

const fichaCafe2 = {
  title : cafe.title,
  ingredients : cafe.ingredients,
  id : cafe.id,
};


const fichaCafe2Json = JSON.stringify(fichaCafe2,["nombre","ingredientes","id"],2)