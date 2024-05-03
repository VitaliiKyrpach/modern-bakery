console.log('hello')
$(function(){
    $('.modal-open').on('click',modalOpen);
    $('.modal-close').on('click', modalClose);
    $(".menu-open").on('click',handleMenu);
    $(".menu-close").on('click',handleMenu);
    $('.form').on('submit',handleSubmit)
})

function modalOpen (){
    $('.backdrop').removeClass("is-hidden");
        $('body').addClass('no-scroll')
}

function modalClose (){
    $('.backdrop').addClass("is-hidden");
    $('body').removeClass('no-scroll');
}

function handleMenu (){
    $(".mobile-menu").toggleClass("is-open");
    $('body').toggleClass('no-scroll')
}
function handleSubmit(e){
    e.preventDefault()
    var name = $('#user-name').val()
    alert(`${name}, дякуємо за ваше звернення! Будь-ласка очікуйте,скоро з вами зв'яжеться оператор.`);
    $('.form')[0].reset()
}