// $(document).ready(function() {
//     $("ul li").click(function() {
//         $("nav ul li a").removeClass();
//         $(this).children("a").addClass("action");
//     });
// });

function handleMenu() {
    const showBtn = document.getElementById("btn-bars");
    const header_menu = document.getElementById("header-bars");
    header_menu.classList.toggle("show-bars");
    if (header_menu.classList.contains('show-bars')) {
        header_menu.style.display = 'block'
        showBtn.classList.add('fa-x');
    } else {
        header_menu.style.display = 'none'
        showBtn.classList.remove('fa-x');
    }

}