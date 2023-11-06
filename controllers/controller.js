/*$(document).ready(function() {
    $('.profile-image').hover(
        function() {
            // Когда курсор наведен на .profile-image
            $('.professional').hide();
            $('.personal').show();
        },
        function() {
            // Когда курсор больше не наведен на .profile-image
            $('.professional').show();
            $('.personal').hide();
        }
    );
});

 */

$(document).ready(function() {
    $('.profile-image').click(function() {
        // При клике на .profile-image переключает отображение .professional и .personal
        $('.professional').toggle();
        $('.personal').toggle();
    });
});