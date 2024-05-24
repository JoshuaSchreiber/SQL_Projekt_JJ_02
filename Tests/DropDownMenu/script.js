function selectOption(option) {
    document.getElementById('textField').value = option;
}

document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementsByClassName('dropdown')[0];
    dropdown.addEventListener('click', function() {
        this.getElementsByClassName('dropdown-content')[0].classList.toggle('show');
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
});
