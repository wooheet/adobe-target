<script>
    showLearnMore()

    document.querySelectorAll('.pagination')[0].querySelector('.prev').addEventListener("click", pagination);
    document.querySelectorAll('.pagination')[0].querySelector('.next').addEventListener("click", pagination);
    document.querySelectorAll('.pagination')[0].querySelector('ul').addEventListener("click", pagination);

    function showLearnMore() {
        var wtb_emt = document.querySelectorAll('a.btn.btn-outline-secondary.btn-sm.where-to-buy.active');
        for (var i = 0; i < wtb_emt.length; i++) {
            wtb_emt[i].innerText = "learn more"
            wtb_emt[i].href = document.querySelectorAll('p.model-name a')[i].href
        }
    }

    function pagination() {
        var i = 0;
        var wtb_emt = document.querySelectorAll('a.btn.btn-outline-secondary.btn-sm.where-to-buy.active');
        while (i < wtb_emt.length) {
            if (wtb_emt[wtb_emt.length].innerText !== "learn more".toUpperCase()) {
            break;
        }
            wtb_emt[i].innerText = "learn more"
            wtb_emt[i].href = document.querySelectorAll('p.model-name a')[i].href
            i++;
        }
    }
</script>


