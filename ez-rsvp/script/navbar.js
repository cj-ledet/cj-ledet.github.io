html =
    "<div id=\"navDiv\">" +
    "<nav class=\"navbar navbar-expand navbar-dark bg-dark\" id=\"navSpacing\">\n" +
    "    <a href=\"home.html\" class=\"navbar-brand\">EZ-RSVP</a>\n" +
    "    <div class=\"navbar-nav mr-auto\">\n" +
    "        <li class=\"nav-item\">\n" +
    "            <a href=\"home.html\" class=\"nav-link\">\n" +
    "                <i class=\"fa-solid fa-house\"></i> Home" +
    "            </a>\n" +
    "        </li>\n" +
    "        <li class=\"nav-item\">\n" +
    "            <a href=\"about.html\" class=\"nav-link\">About</a>\n" +
    "        </li>\n" +
    "        <li class=\"nav-item\">\n" +
    "            <a href=\"user_dashboard.html\" class=\"nav-link\">\n" +
    "                <i class=\"fa-solid fa-table-columns\"></i> Dashboard" +
    "            </a>\n" +
    "        </li>\n" +
    "    </div>\n" +
    "    <div class=\"navbar-nav ms-auto\">\n" +
    "        <li class=\"nav-item\">\n" +
    "            <a href=\"user_login.html\" class=\"nav-link\">\n" +
    "                <i class=\"fa-solid fa-right-to-bracket\"></i> Login" +
    "            </a>\n" +
    "        </li>\n" +
    "        <li class=\"nav-item\">\n" +
    "            <a href=\"user_register.html\" class=\"nav-link\">\n" +
    "                <i class=\"fa-solid fa-user-plus\"></i> Sign Up" +
    "            </a>\n" +
    "        </li>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "</div>";

if (!document.body.innerHTML.includes('<nav class=')) {
    document.body.innerHTML = html + '\n' + document.body.innerHTML;
}



