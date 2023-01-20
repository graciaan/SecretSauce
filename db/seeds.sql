-- run this in workbench to seed users
insert into users (username, password)
values ("roger104", "abcd123456"),
("jondoe", "abcd123456"),
("janedow", "abcd123456"),
("fred",  "abcd123456");

-- run this in workbench to seed categories
insert into categories (category)
values ("dessert"),
("pasta"),
("smoothie"),
("entree"),
("cocktail");

-- run this in workbench to seed recipes
insert into recipes (title, description, ingredients, instructions, user_id, category_id, filename)
values ("Shrimp Scampi", "Marinated lemon and herb shrimp in a scampi sauce.", "shrimp, lemon, herb, scampi", "add the stuff and stir", 1, 4, "05-shrimpscampi.png"),
("Lasagna", "Homemade lasagna.", "noodles, sauce, cheese", "add the stuff and bake", 2, 2, "06-lasagna.png"),
("Chicken Fajitas", "Flavorful grilled chicken fajitas with cheddar cheese, guacamole, sour cream, and vegetables.", "chicken, cheese, guac, tortillas", "cook it then eat it", 3, 4, "07-chickenfajitas.png"),
("Jambalaya", "Bring the kitchen sink and spice it up in this jambalaya dish.", "beans, rice, other stuff", "cook it", 3, 4, "08-jambalaya.png'"),
("Egg Roll Noodle Bowl", "Asian dish incorporating egg roll ingredients with flavorful noodles.", "egg roll, noodle, bowl", "heat up and enjoy", 4, 1, "09-eggrollnoodle.png"),
("Chocolate Cake", "Freshly baked chocolate cake.", "cake mix, egg, water", "mix it all together and bake for a while", 1, 1, "10-chocolatecake.png");

-- run this in workbench to seed reviews
insert into reviews (review, recipe_id, user_id, date_created, rating)
values ("the best", 1, 2, current_timestamp(), 4),
("the worst", 2, 1, current_timestamp(), 1),
("fine", 3, 4, current_timestamp(), 3),
("great!", 4, 4, current_timestamp(), 5),
("delicious", 5, 4, current_timestamp(), 4),
("terrible", 6, 1, current_timestamp(), 4);

-- run this in workbench to seed favorites
insert into favorites (recipe_id, user_id)
values (1, 4),
(1, 2),
(3, 2),
(2, 4);