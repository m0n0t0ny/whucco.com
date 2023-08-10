function performWebSearch() {
    console.log("Started: performWebSearch")
    var searchQuery = document.getElementById("searchQuery").value;
    console.log("Started: searchQuery" + searchQuery)
    var countryCode = document.querySelector(".active > span.dial-code").innerText;
    console.log("Started: countryCode" + countryCode)
    var searchUrl = "https://wa.me/" + countryCode + encodeURIComponent(searchQuery);
    console.log("Started: search url" + searchUrl)

    window.open(searchUrl, "_blank");
    console.log("Special thanks to Angelo Callari ❤")
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        performWebSearch();
    }
}