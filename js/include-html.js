$(function () {
    var title = "<title>" + $("title").html() + "</title>";
    $("head").load("inc/head.html", function () {
        $("head").append(title);
    });
    $("#header").load("inc/header.html");
    $("#footer").load("inc/footer.html");
});