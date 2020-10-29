// const darkModeToggler = document.getElementById('darkmode');
// const bodyTag = document.getElementsByTagName('body');


// darkModeToggler.addEventListener('click', function() {
//     document.body.classList.toggle('darkmode');
// });

//jquery version
//DARKMODE SWITCH
$('#darkmode').click(function() {
    $('body').toggleClass('darkmode');
})

//EMAIL CHECKER
const $email = $('#email');

$email.focusout(function() {
    if (!$('#email')[0].checkValidity()) {
        $email.css({
            borderColor: 'red',
        });
    }
    if ($('#email')[0].checkValidity()) {
        $email.css({
            borderColor: '',
        });
    }
})