let titles = ["1. Showing Tables", "2. Select Everything", "Select where ..."];
let content = [
    "In our databank we have a certain amount of tables. To work with those tables it is important to know their names. To give out the names of all the tables in our databank, we can use the command: show tables. Try it out. If you give in a wrong command, no problem. The databank simply won't answer.",
    "Now that we now which tables there are in our databank, we would like to get the content of those tables. To give out the whole content of one table you use the select term together with the * note and the name from the table. Example: SELECT * from AddsD. Give out the content of the Project Table.",
    "In the last task we learned to give out the whole table, now we wont to give out one line of theat table for that we use the 'where' clause together with the select command. For example one could do 'Select * From Project where ProjektName_pk = 'NextGen Game Engine'. Give out the Project where the name is:HR Management System"
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
