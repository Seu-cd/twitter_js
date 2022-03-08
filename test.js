function mySleep(time) {
        return new Promise((resolve) => {
            setTimeout(resolve, time)
        })
    }
    var j = 0;
    var interval_id = setInterval(
        function () {

            // いいね！の要素を取得
            var elems = document.querySelectorAll('*[data-testid="like"]')
            var last = elems[elems.length - 1];
            console.log({
                j,
                last
            })


            // 取得できたいいね！の要素の回数分実行
            elems.forEach(like => {
                mySleep(2000)
                console.log("like")
                like.click()});
            last.scrollIntoView(true)
            // 現在位置＋3000pxに縦スクロール
            window.scroll(0, window.scrollY + 60);
            if (j == 5) {
                clearInterval(interval_id)
            } else {
                j++
                console.log("countup")
            }

        }, 10000);
