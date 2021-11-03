<script>
    pagination()

    document.querySelectorAll('.pagination')[0].querySelector('.prev').addEventListener("click", showLearnMore);
    document.querySelectorAll('.pagination')[0].querySelector('.next').addEventListener("click", showLearnMore);
    document.querySelectorAll('.pagination')[0].querySelector('ul').addEventListener("click", showLearnMore);

    function pagination() {
        var buynow_emt = document.querySelectorAll('a.btn.btn-outline-secondary.btn-sm.where-to-buy.active');
        window.setTimeout(showLearnMore, 1600);
        for (var i = 0; i < buynow_emt.length; i++) {
            buynow_emt[i].innerText = "Learn More"
            buynow_emt[i].href = document.querySelectorAll('p.model-name a')[i].href
        }
    }

    function showLearnMore() {
        var i = 0;
        var buynow_emt = document.querySelectorAll('a.btn.btn-outline-secondary.btn-sm.where-to-buy.active');
        window.setTimeout(showLearnMore, 1600);
        while (i < buynow_emt.length) {
            if (buynow_emt[buynow.length].innerText == "Learn More") {
                break;
            }
            buynow_emt[i].innerText = "Learn More"
            buynow_emt[i].href = document.querySelectorAll('p.model-name a')[i].href
            i++;
        }
    }
</script>