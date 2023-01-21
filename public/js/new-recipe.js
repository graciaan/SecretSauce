const newRecipeHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector(`#recipe-title`).value.trim();
    const description = document.querySelector(`#recipe-description`).value.trim();
    const ingredients = document.querySelector(`#recipe-ingredients`).value.trim();
    const instructions = document.querySelector(`#recipe-instructions`).value.trim();


    if (title && description && ingredients && instructions) {
        const response = await fetch(`/api/recipes`, {
            method: 'POST',
            body: JSON.stringify({ title, description, ingredients, instructions }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            alert(`New recipe for ${title} created successfully!`);
            document.location.replace('/post');
        } else {
            alert('Failed to add recipe');
        }
    }
};

document
    .querySelector('#postonebtn')
    .addEventListener('click', newRecipeHandler);