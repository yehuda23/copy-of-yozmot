// yuda bayana // API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world doesn't close
import wixData from 'wix-data';

const defaultCategory = 'כל הקטגוריות';
const defaultSubCategory = 'כל תתי הקטגוריות';

const defaultSubCategoryObject = {
    title: defaultSubCategory,
    parent: defaultCategory
}


$w.onReady(function () {
    initialize(true)
    resetBtn()

    $w('#dropdown1').onChange(() => {
        areaDropdownChange()
    });

    $w('#dropdown2').onChange((e) => {
        mainCategoryDropdownChange();
    });

    $w('#dropdown3').onChange(() => {
        subCategoryDropdownChange();
    });

})

function resetBtn() {
    $w('#resetBtn').onClick(() => {
        $w('#dropdown1, #dropdown2, #dropdown3').selectedIndex = 0;
        $w('#dataset3').setFilter(wixData.filter());
        $w('#dataset5').setFilter(wixData.filter());
        initialize(false);
    })

}

function totalCount(initial = false) {
    $w("#dataset3").onReady(() => {
        let count = $w("#dataset3").getTotalCount(); // 23
        console.log("ON LOAD", count)
        $w('#text280').text = `נמצאו ${count} עסקים`;

        if (initial) {
            $w('#counterText').text = `לאתר התווספו עד כה ${count} עסקים`;
        }
    });
}

function initialize(initial = false) {
    $w("#dataset3").onReady(() => {
        $w('#dropdown2').value = defaultCategory;
        $w('#dropdown3').value = defaultSubCategory;

        $w('#resetBtn').collapse();
        $w('#dropdown3').disable();

        updateFilteredBusinesses();
        totalCount(initial);
    });
}

function updateFilteredBusinesses() {
    setTimeout(() => {
        let count = $w("#dataset3").getTotalCount(); // 23     
        console.log("ON CHANGE", count)
        $w('#text280').text = `נמצאו ${count} עסקים`
    }, 1500);
}

function setFilter(dataset, field, value) {
    const filter = wixData.filter()
        .eq(field, value);
    $w(dataset).setFilter(filter);
}

function mainCategoryDropdownChange() {
    const category = $w('#dropdown2').value;
        if (category === defaultCategory) {
            initialize()
        } else {
            setFilter("#dataset3", "text2", category);
            $w('#dropdown3').enable();
            $w('#dropdown3').value = defaultSubCategory;
            // note for Yuval/Amit: do the next part on the areaDropdownChange() function as well(in order to make the area filter be based on previous choises), make sure to adjust the fields keys
            // ---------- start copy
            setFilter("#dataset5", "parent", category);
            setTimeout(() => {
                $w("#dataset5").getItems(0, 100)
                    .then((result) => {
                        console.log("results ", result);
                        $w('#dropdown3').options = result.items.map(item => ({ label: item.title, value: item.title }));
                    }).catch((err) => {
                        console.error("err ", err);
                    });
            }, 500);
            // ------ end copy

            updateFilteredBusinesses();
            $w('#resetBtn').expand()
        }
}

function subCategoryDropdownChange() {
    const subCategory = $w('#dropdown3').value;

        if (subCategory === defaultSubCategory) {
            initialize()
        } else {
            setFilter("#dataset3", "newField1", subCategory);
            updateFilteredBusinesses();
            $w('#resetBtn').expand()
        }
}

function areaDropdownChange() {
    const area = $w('#dropdown1').value;
        if (area === defaultSubCategory) {
            initialize()
        } else {
            setFilter("#dataset3", "text3", area);
            updateFilteredBusinesses();
            $w('#resetBtn').expand()
        }
}



////
// // API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// // “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
// import wixData from 'wix-data';

// const defaultCategory = 'כל הקטגוריות';
// const defaultSubCategory = 'כל תתי הקטגוריות';

// const defaultSubCategoryObject = {
//     title: defaultSubCategory,
//     parent: defaultCategory 
// }


// $w.onReady(function () {
//     initialize(true)
//     resetBtn()

//     $w('#dropdown1').onChange(() => {
//         updateFilteredBusinesses();
//         $w('#resetBtn').expand()
//     });

//     $w('#dropdown2').onChange(() => {
//         const category = $w('#dropdown2').value;

//         if (category === defaultCategory){
//             initialize()
//         } else {
//             setFilter("#dataset3", "text2", category);
//             $w('#dropdown3').enable();
//             $w('#dropdown3').value = defaultSubCategory;


//             updateFilteredBusinesses();
//             $w('#resetBtn').expand()
//         }
//     });

//     $w('#dropdown3').onClick(() => {
//         const category = $w('#dropdown2').value;
//         setFilter("#dataset5", "parent", category);
//             $w("#dataset5").getItems(0, 100)
//         .then( (result) =>  {
//             $w('#dropdown3').options = result.items;
//         }).catch( (err) => {} );
//     });

//     $w('#dropdown3').onChange(() => {
//         const subCategory = $w('#dropdown3').value;

//         if (subCategory === defaultSubCategory) {
//             initialize()
//         } else {
//             setFilter("#dataset3", "newField1", subCategory);
//             updateFilteredBusinesses();
//             $w('#resetBtn').expand()
//         }
//     });

// })

// function resetBtn() {
//     $w('#resetBtn').onClick(() => {
//         $w('#dropdown1, #dropdown2, #dropdown3').selectedIndex = 0;
//         $w('#dataset3').setFilter(wixData.filter());
//         $w('#dataset5').setFilter(wixData.filter());
//         initialize(false);
//     })

// }

// function totalCount(initial = false) {
//     $w("#dataset3").onReady(() => {
//         let count = $w("#dataset3").getTotalCount(); // 23
//         console.log("ON LOAD", count)
//         $w('#text280').text = `נמצאו ${count} עסקים`;
        
//         if (initial) {
//             $w('#counterText').text = `לאתר התווספו עד כה ${count} עסקים`;
//         }
//     });
// }

// function initialize(initial = false) {
//     $w("#dataset3").onReady(() => {
//         $w('#dropdown2').value = defaultCategory;
//         $w('#dropdown3').value = defaultSubCategory;

//         $w('#resetBtn').collapse();
//         $w('#dropdown3').disable();

//         updateFilteredBusinesses();
//         totalCount(initial);
//     });
// }

// function updateFilteredBusinesses() {
//     setTimeout(() => {
//         let count = $w("#dataset3").getTotalCount(); // 23     
//         console.log("ON CHANGE", count)
//         $w('#text280').text = `נמצאו ${count} עסקים`
//     }, 1500);
// }

// function setFilter(dataset, field, value) {
//     const filter = wixData.filter()
//         .eq(field, value);
//     $w(dataset).setFilter(filter);
// }

