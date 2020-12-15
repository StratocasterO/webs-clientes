$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
    
    $('#video-link').on('click',function(){
        $('#sidebar').toggleClass('active');
        $('#sidebarCollapse').toggleClass('active');
    });

    $('#comment-link').on('click',function(){
        $('#sidebar').toggleClass('active');
        $('#sidebarCollapse').toggleClass('active');
    });

    $('#best-link').on('click',function(){
        $('#sidebar').toggleClass('active');
        $('#sidebarCollapse').toggleClass('active');
    });
});