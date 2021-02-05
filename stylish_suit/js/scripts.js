$(document).ready(function() {

    /* lazy load */
    var blazy = new Blazy();

    /* scroll */

    $("a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        if (_href == "#order_form") {
            var product = $(this).parent().find("h4").text();
            $("#order_form select[name='comment'] option[value='" + product + "']").prop("selected", true);
        }
        return false;
    });


    //product_item open form
    $(".product_item .content .button").click(function() {
        $(".product_item").removeClass("active");
        $(this).parent().parent(".product_item").addClass("active");
    });
    $(".product_item .close").click(function() {
        $(".product_item").removeClass("active");
    });

    //модель в форму
    $('.product_item .content .button').on('click', function() {
        var prodName = $(this).parent().parent().find('.hidden .vendor_code').text();
        $("input[name='comment']").val(prodName);
    });

    $("img.panorama").panorama();
});


