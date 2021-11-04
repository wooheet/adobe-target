<script>
    showLearnMore()

    document.querySelectorAll('.pagination')[0].querySelector('.prev').addEventListener("click", showLearnMore);
    document.querySelectorAll('.pagination')[0].querySelector('.next').addEventListener("click", showLearnMore);
    document.querySelectorAll('.pagination')[0].querySelector('ul').addEventListener("click", showLearnMore);

    function showLearnMore() {
        var wtb_emt = document.querySelectorAll('a.btn.btn-outline-secondary.btn-sm.where-to-buy.active');
        for (var i = 0; i < wtb_emt.length; i++) {
            wtb_emt[i].innerText = "learn more"
            wtb_emt[i].href = document.querySelectorAll('p.model-name a')[i].href
        }
    }


    (function($) {
        $(document).ajaxSuccess(function( event, xhr, settings ) {
            showLearnMore();
            console.log({
                'event': 'ajaxSuccess',
                'eventCategory': 'AJAX ' + settings.type,
                'eventAction': settings.url + (settings.type == 'POST' && settings.data ? ';' + settings.data : ''),
                'eventLabel': xhr.responseText
            });
        });
    })(jQuery);
</script>
