friends-- 1. What query would you run to get all the countries that speak Slovene? 
-- Your query should return the name of the country, language and language percentage. 
-- Your query should arrange the result by language percentage in descending order. (1)

SELECT * FROM languages
ORDER BY language ASC;

SELECT country_code, language, percentage 
FROM languages 
WHERE language = 'Slovene' ORDER BY percentage DESC;

-- 2. What query would you run to display the total number of cities for each country? 
-- Your query should return the name of the country and the total number of cities. 
-- Your query should arrange the result by the number of cities in descending order. (3)

SELECT * FROM cities;
SELECT * FROM countries;

SELECT countries.name, COUNT(cities.id) AS cities
FROM cities
JOIN countries 
ON countries.id = cities.country_id
GROUP BY countries.id
ORDER BY cities DESC;

