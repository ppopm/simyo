-- Opdracht 1
SELECT name, COUNT(name) amount
FROM employees 
GROUP BY name 
HAVING COUNT(name) > 1;

-- Opdracht 2
SELECT e.name, e.city, ft.title 
FROM employees e, functionTitles ft 
WHERE e.id = ft.employee_id 
AND ft.title = 'Engineer';