// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
import wixData from 'wix-data';

$w.onReady(function () {
    $w('#dropdown4').onChange(() => {
        const category = $w('#dropdown4').value;
        console.log("category ", category)
        const filter = wixData.filter()
            .eq("parent", category);
        $w("#dataset5").setFilter(filter);
    })
});
