// Search Funtion
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