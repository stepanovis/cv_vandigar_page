$(document).ready(function() {
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