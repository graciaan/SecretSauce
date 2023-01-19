const newRecipeHandler = async (event) => {
    event.preventDefault();

    const recipeTitle = document.querySelector(`#recipe-title`).value.trim();
    const recipeDescription = document.querySelector(`#recipe-description`).value.trim();
    const recipeIngredients = document.querySelector(`#recipe-ingredients`).value.trim();
    const recipeInstructions = document.querySelector(`#recipe-instructions`).value.trim();


    if(recipeTitle && recipeDescription && recipeIngredients && recipeInstructions) {
        const response = await fetch(`/api/recipes`, {
            method: 'POST',
            body: JSON.stringify({ recipeTitle, recipeDescription, recipeIngredients, recipeInstructions }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            document.location.replace('/saved-page');
        } else {
            alert('Failed to add recipe');
        }
    }
};
