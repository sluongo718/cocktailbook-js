class Cocktial{

    static allCocktails = []

    constructor(cocktail){
        this.id = cocktail.id
        this.name = cocktail.attributes.name
        this.image = cocktail.attributes.image
        this.instructions = cocktail.attributes.instructions
        this.ingredients = cocktail.attributes.ingredients 

        Cocktial.allCocktails.push(this)
        
    }



    static fetchCocktails() {
        fetch(cocktailURL)
        .then(response => response.json())
        .then(cocktails => {
            for(let cocktail of cocktail.data) {
                let newCocktailList = new Cocktial(cocktail)
            }
        })
    }

}