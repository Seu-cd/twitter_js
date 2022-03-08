function mySleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    })
}
var j = 0;
var interval_id = setInterval(
    function () {

        // フォローの要素を取得
        var elems = document.querySelectorAll('*[data-testid$="-follow"]')
        var last = elems[elems.length - 1];
        console.log({
            j,
            last
        })


        // 取得できたフォローの要素の回数分実行
        elems.forEach(like => {
            mySleep(2000)
            like.click()});
        last.scrollIntoView(true)
        // 現在位置＋3000pxに縦スクロール
        window.scroll(0, window.scrollY + 60);
        if (j == 1) {
            clearInterval(interval_id)
        } else {
            j++
            console.log("countup")
        }

    }, 30000);
