window.addEventListener('load', function() {

    var coverBox = document.querySelector('.cover-box');
    var login = document.querySelector('.login');

    login.onclick = function() {
        coverBox.style.display = 'block';
    }

    var navMenu = document.querySelector('.nav-menu');
    var dropDown = document.getElementById('dropdown-list');

    var information = document.querySelector('.self-information');
    var myPage = document.querySelector('.myPage');
    var container = document.querySelector('.container');
    var articleContainer = document.querySelector('.article-container');

    navMenu.onclick = function() {
        this.lastElementChild.style.display = 'block';
    }

    myPage.onclick = function() {
        information.style.display = 'block';
        articleContainer.style.display = 'none';
        container.style.display = 'none';
        dropDown.style.opacity = '0';
    }


})