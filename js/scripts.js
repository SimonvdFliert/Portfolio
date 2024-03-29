/*!
* Start Bootstrap - Agency v7.0.7 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const download = document.getElementById("fileRequest");

download.addEventListener('click', request);

function request() {
    window.location = 'CV.pdf';
}

window.addEventListener('load', function () {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
});

function Thesis_Code(){
    window.open('https://github.com/SimonvdFliert/MscThesis')
}

function LungCancer_Code(){
    window.open('https://github.com/SimonvdFliert/Lung-Cancer-Prediction/blob/main/Lung%20Cancer%20Prediction.ipynb')
}

function Restaurant_Code(){
    window.open('https://github.com/DavidNP96/Chatbot_group_13')
}

function Advanced_Machine_Learning_Code(){
    window.open('https://github.com/SimonvdFliert/Advanced-ML/tree/main')
}

function Pattern_Recognition_Assignment_Code(){
    window.open('https://github.com/SimonvdFliert/Pattern_Recognition_Assignment')
}

function Computer_Vision_Voxels_Assignment_Code(){
    window.open('https://github.com/SimonvdFliert/Computer-vision-UU')
}

function Computer_Vision_Video(){
    window.open('https://youtu.be/vg7X3mC8JY8')
}