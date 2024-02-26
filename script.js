const strongTags = [...document.getElementsByTagName ('strong')];

function highlight() {
	strongTags.forEach(function(element) {
            element.classList.add('green');
        });
}


function return_normal() {
    //Write your code here
strongTags.forEach(function(element) {
            element.classList.remove('green');
        });
    
}
