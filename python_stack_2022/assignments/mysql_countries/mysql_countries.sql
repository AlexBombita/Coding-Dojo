-- 1. What query would you run to get all the countries that speak Slovene? 
-- Your query should return the name of the country, language and language percentage. 
-- Your query should arrange the result by language percentage in descending order. (1)

SELECT * FROM languages
ORDER BY language ASC;

SELECT country_code, 
language, percentage 
FROM languages 
WHERE language = 'Slovene' 
ORDER BY percentage DESC;

-- 2. What query would you run to display the total number of cities for each country? 
-- Your query should return the name of the country and the total number of cities. 
-- Your query should arrange the result by the number of cities in descending order. (3)

SELECT * FROM cities;
SELECT * FROM countries;
SELECT countries.name, COUNT(cities.name) AS total_cities
FROM cities
JOIN countries 
ON countries.id = cities.country_id
GROUP BY countries.id
ORDER BY total_cities DESC;


-- 3. What query would you run to get all the cities in Mexico with a population of greater than 500,000? 
-- Your query should arrange the result by population in descending order. (1)

SELECT * FROM cities;
SELECT * FROM countries;
SELECT cities.name, cities.population 
FROM cities 
JOIN countries ON cities.country_id = countries.id
WHERE countries.code = 'MEX' 
and cities.population > 500000
ORDER BY population desc;


-- 4. What query would you run to get all languages in each country with a percentage greater than 89%? 
-- Your query should arrange the result by percentage in descending order. (1)

SELECT * FROM countries;
SELECT * FROM languages;
SELECT countries.name, languages.percentage 
FROM countries
JOIN languages ON countries.code = languages.country_code 
WHERE languages.percentage > 89
ORDER BY languages.percentage desc;

-- 5. What query would you run to get all the countries with Surface Area below 501 and Population greater than 100,000? (2)

SELECT * FROM countries;
SELECT name
FROM countries
WHERE surface_area < 501.00
and population > 100000;

-- 6. What query would you run to get countries with only Constitutional Monarchy with a capital 
-- greater than 200 and a life expectancy greater than 75 years? (1)

SELECT * FROM countries;
SELECT name
FROM countries
WHERE government_form = 'Constitutional Monarchy'
and capital > 200
and life_expectancy > 75;


-- 7. What query would you run to get all the cities of Argentina inside the Buenos Aires district 
-- and have the population greater than 500, 000? The query should return the Country Name, City Name, 
-- District and Population. (2)

SELECT * FROM cities;
SELECT country_code, name, district, population
FROM cities
WHERE country_code = 'ARG'
and district = 'Buenos Aires'
and population > 500000;

-- 8. What query would you run to summarize the number of countries in each region? The query should display 
-- the name of the region and the number of countries. Also, the query should arrange the result by the number of 
-- countries in descending order. (2)

SELECT * FROM countries;
SELECT region, COUNT(name) AS total_countries
FROM countries
GROUP BY region 
ORDER BY total_countries desc;

SELECT * FROM countries
WHERE region = 'North America';
