// ===========================================================================================================
// Search article
function postSearchFunction() {
    let value = document.getElementById("post-search-input").value;
    let ul = document.querySelector(".post-article-list");
    let li = ul.getElementsByTagName("li");

    for( let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        
        if(a.innerHTML.toUpperCase().indexOf(value.toUpperCase()) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
// ===========================================================================================================
// post article 1
const articleItemLink1 = document.getElementById ("article-item-link1");
articleItemLink1.textContent = "Aplikasi untuk membuka aplikasi Lainnya";
articleItemLink1.setAttribute ("href", "/page/aplikasi-untuk-membuka-aplikasi-lainnya.html");

const articleItemPreview1 = document.getElementById ("article-item-preview1");
articleItemPreview1.textContent = "Kumpulan aplikasi untuk membuka aplikasi di perangkat Lainnya dan dapat "
+"melihat izin dan beberapa manager di perangkat yang di install";

// ===========================================================================================================
// post article 2
const articleItemLink2 = document.getElementById ("article-item-link2");
articleItemLink2.textContent = "lorem akkakka akakkaka kakka kakka ";
articleItemLink2.setAttribute ("href", "/page/page-content.html");

const articleItemPreview2 = document.getElementById ("article-item-preview2");
articleItemPreview2.textContent = "Kumpulan aplikasi untuk membuka aplikasi di perangkat Lainnya dan dapat "
+"melihat izin dan beberapa manager di perangkat yang di install";

// ===========================================================================================================



