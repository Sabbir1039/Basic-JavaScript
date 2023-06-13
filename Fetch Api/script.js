let pTag = document.getElementById("intro");
let imgTag = document.getElementById("img1");
let errorP = document.getElementById("error");


async function callFetch(url) {
    try {
        let response = await fetch(url);

        console.table(response.status); // response status for testing

        let jsonData = await response.json();

        pTag.innerHTML += jsonData.brand; //Showing data in web page from json file
        imgTag.src = jsonData.images[0]; //Showing image in web page from json file
    } catch(err) {
        errorP.innerHTML = "Error: " + err;
    }
    
}

const url = 'https://dummyjson.com/products/3'; //fakse json data from dummyJSON.com

callFetch(url);

