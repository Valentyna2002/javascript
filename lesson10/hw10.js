// --- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
    let products = document.getElementsByClassName('products')[0]
    fetch('https://dummyjson.com/carts?limit=50')
        .then(res => res.json())
        .then((response) =>{

            let cartsArr = response.carts
            for (const cart of cartsArr) {
               let cartBlock = document.createElement('div')
                cartBlock.classList.add('cartBlock')
                cartBlock.innerHTML = `<strong> Id: ${cart.id},<br> Products:</strong>`
                let cartList = document.createElement('ul')

                for (const product of cart.products) {
                 let productsDiv = document.createElement('li')
                    productsDiv.innerText = `ID: ${product.id}
                    title: ${product.title}
                    price: ${product.price}
                    quantity: ${product.quantity}
                    total: ${product.total}
                    Discount Percentage: ${product.discountPercentage}
                    Discounted Total: ${product.discountedTotal}`

                 let imgBlock = document.createElement('div')
                    let image = document.createElement('img')
                    image.src = product.thumbnail
                    imgBlock.appendChild(image)

                 cartList.append(productsDiv,imgBlock)
                    cartBlock.appendChild(cartList)
                }


                products.appendChild(cartBlock)

            }
                        })





// --
//     --взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
let recipesContainer = document.getElementsByClassName('recipes')[0]
    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((data)=>{
        let recipesArr = data.recipes
        for (const recipe of recipesArr) {
            let recipeBlock = document.createElement('div')
            recipeBlock.className = 'recipeBlock'
            recipeBlock.innerHTML = `<strong> Id: ${recipe.id} <br> Name: ${recipe.name} </strong>`
            let ingredients = document.createElement('ul')
            ingredients.innerHTML ='<strong>Ingredients:</strong>'
            for (const ingredient of recipe.ingredients) {
                let ingredientsList = document.createElement('li')
                ingredientsList.innerText = ingredient
                ingredients.appendChild(ingredientsList)
            }
            let instructionsBlock = document.createElement('ol')
            instructionsBlock.innerHTML = '<strong>Instructions:</strong>'
            for (const instruction of recipe.instructions) {
                let instructionList = document.createElement('li')
                instructionList.innerText = instruction
                instructionsBlock.appendChild(instructionList)
            }

        let infoRecip = document.createElement('div')
        infoRecip.innerHTML = `<strong>Prep Time Minutes: </strong> ${recipe.prepTimeMinutes} <br>
        <strong>Prep time minutes: </strong> ${recipe.prepTimeMinutes}<br>
        <strong>Cook time minutes: </strong> ${recipe.cookTimeMinutes}<br>
        <strong>Servings: </strong> ${recipe.servings}<br>
        <strong>Difficulty: </strong> ${recipe.difficulty}<br>
        <strong>Cuisine: </strong> ${recipe.cuisine}<br>
        <strong>Calories per serving: </strong> ${recipe.caloriesPerServing}<br>
        <strong>Tags: </strong> ${recipe.tags.join(', ')}  <br>
        <strong>userId: </strong> ${recipe.userId} <br>
        <strong>Rating: </strong> ${recipe.rating}   <br>      
        <strong>Meal type: </strong> ${recipe.mealType.join(', ')} `

            let recipeImg = document.createElement('div')
            let imgRecipes = document.createElement('img')
            imgRecipes.src = recipe.image
            recipeImg.appendChild(imgRecipes)
            recipeBlock.append(ingredients,instructionsBlock,infoRecip,recipeImg)
            recipesContainer.appendChild(recipeBlock)
            }

        }



    );
//     --
//         --- зробити файл users.html
// --з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     --вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// --при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// --отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)


