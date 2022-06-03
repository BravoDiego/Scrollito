var headProfile = document.querySelector('article > a');
var croix = document.querySelector('#croix');
var hide = document.querySelector('#hide');

console.log(hide);

croix.addEventListener("click", function() {
    hide.classList.toggle("active");
    console.log(croix);
    console.log(hide)
});
headProfile.addEventListener("click", function() {
    hide.classList.toggle("active");
});