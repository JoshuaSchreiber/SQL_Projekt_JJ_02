let titles = ["0 Notes", "1. SHOW TABLES", "2. SELECT EVERYTHING", "3. SELECT WHERE ...", "4. AND", "5. OR", "6. NOT", "7. LIKE", "8. IN", "9. IS", "10. DISTINCT", "11. AS", "12. ORDER BY", "13. LIMIT",
"14. SUM", "15. COUNT", "16. MAX", "17. AVG", "18. JOINs", "19. Triple INNER JOIN",
    "20. GROUP BY", "21. HAVING", "22. Nested SELECT", "23. INSERT", "24. UPDATE", "25. DELETE"];

let content = [
    "Some rules for the start: SQL can be written both in big and small letters, but it is convention to use capital letters. It doesn’t matter whether you add a “;” at the end of the quarry or not. ",
    "In our databank we have a certain amount of tables. To work with those tables it is important to know their names. To give out the names of all the tables in our databank, we can use the command: show tables. Try it out. If you give in a wrong command, no problem. The databank simply won't answer.",
    "Now that we now which tables there are in our databank, we would like to get the content of those tables. To give out the whole content of one table you use the select term together with the * note and the name from the table. Example: SELECT * from AddsD. Give out the content of the Project Table.",
    "In the last task we learned to give out the whole table, now we wont to give out one line of theat table for that we use the 'where' clause together with the select command. For example one could do 'Select * From Project where ProjektName_pk = 'NextGen Game Engine'. Give out the Project where the name is:HR Management System",
    "Display projects that have more than 100,000 Euros available and require more than 100 hours. To do this, use the SELECT statement with the WHERE clause combined with the AND operator to filter results based on multiple conditions.\n" +
        "\n" +
        "Example: SELECT * FROM Project WHERE ... AND ...;",
    "Display projects that have more than 100,000 Euros available or require more than 1000 hours. To achieve this, use the SELECT statement with the WHERE clause combined with the OR operator to filter results based on multiple conditions.\n" +
        "\n" +
        "Example: SELECT * FROM Project WHERE ... OR ...",
    "Display Leading_Group entries that do not have the depression status 'low'. For this task, use the SELECT statement with the WHERE clause and the != (not equal) operator to exclude specific values from the results.\n" +
        "\n" +
        "Example: SELECT * FROM Leading_Group WHERE ... != ...",
    "Display projects that have 'new' in the name by using the LIKE operator. The LIKE operator allows for pattern matching within the WHERE clause to find specific strings within a column.\n" +
        "\n" +
        "Example: SELECT * FROM Project WHERE ... LIKE '%new%';",
    "Search for the salary of 'Lead Developer', 'Senior Marketer', and 'Financial Analyst' using the IN operator. The IN operator allows you to specify multiple values in the WHERE clause, making it easier to match any of the listed values.\n" +
        "\n" +
        "Example: SELECT Salary FROM Mitarbeiter WHERE ... IN ('...', '...', '...');",
    "Using the IS operator, identify NULL values. Display employees whose Manager_ID is NULL. The IS NULL operator is used to filter rows that contain NULL values in a specified column.\n" +
        "\n" +
        "Example: SELECT * FROM Employees WHERE ... IS ....;\n",
    "Display the possible depression statuses of the Leading_Group without duplicates. Use the DISTINCT keyword in the SELECT statement to remove duplicate values from the result set.\n" +
        "\n" +
        "Example: SELECT DISTINCT ... FROM ...",
    "Projects have a budget ('money') and allocated time in hours. Display the money/time ratio and rename it using the AS operator. The AS keyword allows you to give a column or expression in the result set a new name.\n" +
        "\n" +
        "Example: SELECT ... AS ... FROM Project;",
    "Sort the output of all AddsD attributes by the primary key in descending order using the ORDER BY operator. The ORDER BY clause is used to sort the result set in ascending or descending order based on one or more columns.\n" +
        "\n" +
        "Example: SELECT * FROM ... ORDER BY ...;",
    "Display the first 3 department IDs from AddsD using the LIMIT operator. The LIMIT clause is used to specify the maximum number of rows the result set should include.\n" +
        "\n" +
        "Example: SELECT DepartmentID FROM ... LIMIT ...;",
    "Display the total costs of the projects using SUM(). The SUM function calculates the total sum of a numeric column.\n" +
        "\n" +
        "Example: SELECT SUM(...) AS ... FROM ...;",
    "Check how many Workers there are using COUNT. The COUNT function returns the number of rows that match a specified condition.\n" +
        "\n" +
        "Example: SELECT COUNT(*) AS ... FROM ...;",
    "What is the most expensive project? Use the MAX function to find the maximum value in a column.\n" +
        "\n" +
        "Example: SELECT MAX(...) AS ... FROM ... ;",
    "What are the average costs of the projects? Use the AVG function to calculate the average value of a numeric column.\n" +
        "\n" +
        "Example: SELECT AVG(...) AS ... FROM ...;",
    "Next, we’re going to introduce the concept of JOINs. There are a few different kinds of Joins (INNER, OUTER, LEFT, RIGHT, ...)  but were only going to be looking at the INNER JOIN. JOINs in general, like the name already suggest let two tables join INTO one for the duration of a SQL Query.  \n" +
        "\n" +
        " \n" +
        "\n" +
        "The joining of those two tables is based on the foreign key of the table that has a lesser cardinality. The forgin key as per nature than also can accessed from the other table to use it as a bridge to JOIN. \n" +
        "\n" +
        " \n" +
        "\n" +
        "Foreign keys are referenced with a _fk instead of the _pk of the origninal \n" +
        "\n" +
        " \n" +
        "\n" +
        "An INNER JOIN returns only the rows of the tables where there is a match in both tables.  \n" +
        "\n" +
        " \n" +
        "\n" +
        "Your task is to INNER JOIN AddsD and Mitarbeiter on the Department_ID(_pk/_fk). You should give out the Department_ID, the Studio of the Apartment and the profession of the Mitarbeiter. \n" +
        "\n" +
        " \n" +
        "\n" +
        "Here's an example in SQL: \n" +
        "\n" +
        "Example: \n" +
        "\n" +
        "SELECT employees.name, departments.department_name \n" +
        "FROM employees \n" +
        "INNER JOIN departments \n" +
        "ON employees.department_id = departments.id; ",
    "The INNER JOIN we did in the last task was a so called double JOIN as we joined exactly two tables, now you need to do a triple join to Join three tables. \n" +
        "\n" +
        "The task this time around is to extend the query from last time to include an inner join with Leading Group. You should give out what was said in the last Task, but also the Obsession of the Leading Group. \n" +
        "\n" +
        "Example: \n" +
        "\n" +
        "SELECT employees.name, departments.department_name, projects.project_name \n" +
        "\n" +
        "FROM employees SELECT AddsD.Department_ID_pk, AddsD.Studio, Mitarbeiter.profession FROM AddsD INNER JOIN Mitarbeiter ON AddsD.Department_ID_pk =  \n" +
        "\n" +
        "Mitarbeiter.Department_ID_fk \n" +
        "\n" +
        "INNER JOIN departments \n" +
        "\n" +
        "ON employees.department_id = departments.id \n" +
        "\n" +
        "INNER JOIN projects \n" +
        "\n" +
        "ON employees.project_id = projects.id; ",
    "The GROUP BY clause in SQL is used to arrange identical data into groups. It is often used with aggregate functions like COUNT, SUM, AVG, MAX, and MIN to perform calculations on each group of data. \n" +
        "\n" +
        "You should give out the all the Attributes of Mitarbeiter, grouped by their Department_ID_fk, you should also add the SUM of all the gehalt in one Group as total_gehalt. \n" +
        "\n" +
        "Example: Imagine you have a table named sales with the following columns: id, product_name, and amount. \n" +
        "\n" +
        "SELECT product_name, SUM(amount) as total_sales \n" +
        "FROM sales \n" +
        "GROUP BY product_name; ",
    "The HAVING clause in SQL is used to filter groups of data after they have been grouped by the GROUP BY clause. It is similar to the WHERE clause, but WHERE filters rows before grouping, while HAVING filters groups after grouping. \n" +
        "\n" +
        "You should extend the query from the last task by the clause, having together over 50000. \n" +
        "\n" +
        "Example: \n" +
        "\n" +
        "SELECT product_name, SUM(amount) as total_sales \n" +
        "\n" +
        "FROM sales \n" +
        "\n" +
        "GROUP BY product_name \n" +
        "\n" +
        "HAVING SUM(amount) > 200; ",
    "Nested SELECT statements, also known as subqueries, are SQL queries within another SQL query. They allow for more complex queries and data extraction. In Essence you simple use the result of one select in onther. \n" +
        "\n" +
        "Create a SQL query to retrieve the Studio name, AddCampaign, Style, and the corresponding Forms and Color from the AddsD and StylesD tables for each marketing studio that has the style 'Modern'. \n" +
        "\n" +
        "Example: \n" +
        "\n" +
        "Goal: Find the highest salary in each department. \n" +
        "\n" +
        "SELECT name, salary, department_id \n" +
        "\n" +
        "FROM employees e1 \n" +
        "\n" +
        "WHERE salary = ( \n" +
        "\n" +
        "    SELECT MAX(salary) \n" +
        "\n" +
        "    FROM employees e2 \n" +
        "\n" +
        "    WHERE e1.department_id = e2.department_id \n" +
        "\n" +
        "); ",
    "The INSERT Query inserts Data into a Table \n" +
        "\n" +
        "You should Insert a new Line by your own Imagination into StylesD. \n" +
        "\n" +
        "Give it out afterwords. \n" +
        "\n" +
        "Example: \n" +
        "\n" +
        "INSERT INTO employees (id, name, salary, department_id) \n" +
        "\n" +
        "VALUES (1, 'John Doe', 50000, 3); ",
    "The UPDATE Table updates an entry in a table. \n" +
        "\n" +
        "You should update the Line you inserted by your own Imagination. \n" +
        "\n" +
        "Give it out afterwords. \n" +
        "\n" +
        "Example: \n" +
        "\n" +
        "UPDATE employees \n" +
        "\n" +
        "SET salary = 55000 \n" +
        "\n" +
        "WHERE ... = 1; ",
    "The DELETE statement can delete a single line or even the whole content of a table. \n" +
        "\n" +
        "You should delete the Line you inserted into the table. \n" +
        "\n" +
        "Example: \n" +
        "\n" +
        "Specific line: \n" +
        "\n" +
        "DELETE FROM employees \n" +
        "\n" +
        "WHERE ... = 1; \n" +
        "\n" +
        "Every line in the table: \n" +
        "\n" +
        "DELETE FROM employees; "

];




function selectOption(headerText, contentText) {
    document.getElementById('textFieldHeader').textContent = headerText;
    document.getElementById('textFieldContent').textContent = contentText;
}

document.addEventListener('DOMContentLoaded', (event) => {
    var dropdown = document.getElementsByClassName('dropdown')[0];
    dropdown.addEventListener('click', function() {
        this.getElementsByClassName('dropdown-content')[0].classList.toggle('show');
    });

    var links = document.querySelectorAll('.dropdown-content a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var index = this.getAttribute('data-index');
            selectOption(titles[index], content[index]);
        });
    });

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    // Show the first task when the page loads
    selectOption(titles[0], content[0]);
});
