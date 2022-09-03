var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {  //descarta pizzas com Castanhas
            hasMushrooms = false;                 //descarta pizzas com Cogumelos
            for (j = 0; j < products[i].ingredients.length; j+=1) { //esse for procura as pizzas que tem Cogumelos
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]); //Se não tiver Cogumelos, adiciona as pizzas que eu posso comer
        }
    }

    expect(productsICanEat.length).toBe(1);  //Variedade de pizzas que posso comer  
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      var containsMushrooms = function(product) {
        return _(product.ingredients).any(function(ingredient) { return ingredient === 'mushrooms' })
      }

      productsICanEat = _(products).filter(function(x) { return !(containsMushrooms(x) || x.containsNuts) })



      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    
    /* try chaining range() and reduce() */
    var sum = 0;

    var multiplos = _.range(0, 1000).filter(i => { //faz um array de 0 a 1000
      if (i % 3 == 0 || i % 5 == 0) {  //seleciona no array de cima só os multiplos de 3 e 5 
         return i; // retorna todos os multiplos de 3 e 5
    }
  });
         
         sum = multiplos.reduce(function (acum, atual) { //somo todos os multiplos de 3 e 5 e joga na variável sum
          return acum + atual;  
         });

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    /* chain() together map(), flatten() and reduce() */
    _(products).chain()
    .map(function(product) {return product.ingredients}) //pega os ingredientes no array principal
    .flatten() //junta os arrays
    .reduce(function(_a,b) {return ingredientCount[b] = (ingredientCount[b] || 0) + 1}) //soma os valores de um array em um só
    .value();


    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT 
  
  
  
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
  });
