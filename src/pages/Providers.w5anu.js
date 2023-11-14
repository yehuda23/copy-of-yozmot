// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
import wixData from 'wix-data';
$w.onReady(function () {
    resetBtn()
    totalCount()

    $w('#dropdown1').onChange(() => {
        setTimeout(() => {
            let count = $w("#dataset3").getTotalCount(); // 23
            console.log("ON CHANGE", count)
            $w('#text280').text = `נמצאו ${count} עסקים`
            $w('#resetBtn').expand()
        }, 1500);

    });
    $w('#dropdown2').onChange(() => {
        setTimeout(() => {
            let count = $w("#dataset3").getTotalCount(); // 23
            console.log("ON CHANGE", count)
            $w('#text280').text = `נמצאו ${count} עסקים`
            $w('#resetBtn').expand()
        }, 1500);

    });

    $w('#dropdown3').onChange(() => {
        setTimeout(() => {
            let count = $w("#dataset3").getTotalCount(); // 23
            console.log("ON CHANGE", count)
            $w('#text280').text = `נמצאו ${count} עסקים`
            $w('#resetBtn').expand()
        }, 1500);

    });

})

function resetBtn() {
    let filter = wixData.filter();
    $w('#resetBtn').onClick(() => {
        $w('#dropdown1, #dropdown2, #dropdown3').selectedIndex = 0;
    
        $w('#dataset3').setFilter(filter);
        $w('#resetBtn').collapse()
        totalCount()
    })

}

function totalCount() {
    $w("#dataset3").onReady(() => {
        let count = $w("#dataset3").getTotalCount(); // 23
        console.log("ON LOAD", count)
        $w('#counterText').text = `לאתר התווספו עד כה ${count} עסקים`
        $w('#text280').text = `נמצאו ${count} עסקים`
    });
}
