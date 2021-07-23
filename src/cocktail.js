class Cocktail{

    static allCocktails = []

    constructor(cocktail){
        this.id = cocktail.id
        this.name = cocktail.attributes.name
        this.image = cocktail.attributes.image
        this.instructions = cocktail.attributes.instructions
        this.ingredients = cocktail.attributes.ingredients 

        Cocktail.allCocktails.push(this)
       
    }



    static fetchCocktails() {
        fetch(cocktailURL)
        .then(response => response.json())
        .then(cocktails => {
            for(let cocktail of cocktails.data) {
                let newCocktailList = new Cocktail(cocktail)
            }
        })
    }

    static submitCocktail(ct) {
        ct.preventDefault()
        fetch(cocktailURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                image: imageInput.value,
                name: cocktailNameInput.value,
                instructions: instructionsInput.value
            })
        })
        .then(response => response.json())
        .then(cocktail => {
            let newCocktail = new Cocktail(cocktail.data)
            cocktailForm.reset()
        })
    }

}