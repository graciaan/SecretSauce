-- run this in workbench to seed users
insert into users (username, email, password)
values ("roger104", "test@test.com", "abcd123456"),
("jondoe", "jon@test.com", "abcd123456"),
("janedow", "jane@test.com", "abcd123456"),
("fred", "fred@test.com", "abcd123456");

-- run this in workbench to seed categories
insert into categories (category)
values ("dessert"),
("pasta"),
("smoothie"),
("cocktail");

-- run this in workbench to seed recipes
insert into recipes (title, description, ingredients, filename, instructions, user_id, category_id,)
values ("Shrimp Scampi", "Marinated lemon and herb shrimp in a scampi sauce", "", "add the stuff and stir", 1, 3),
("PBJ", "peanut butter and jelly", "peanut butter, jelly, bread", "add the stuff and eat", 2, 1),
("ice cream sundae", "vanill ice cream with hot fudget", "vanilla ice cream, hot fudge", "add the stuff and eat", 3, 1);

-- run this in workbench to seed reviews
insert into reviews (review, recipe_id, user_id, date_created, rating)
values ("the best", 1, 2, current_timestamp(), 4),
("the worst", 2, 1, current_timestamp(), 1),
("fine", 3, 4, current_timestamp(), 3);

-- run this in workbench to seed favorites
insert into favorites (recipe_id, user_id)
values (1, 4),
(1, 2),
(3, 2),
(2, 4);