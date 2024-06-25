

console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let searchButton = document.querySelector("#submitSearch");
let searchInput = document.querySelector("#inputContainer");
let image = document.querySelector("img");
let para = document.createElement("p");
document.body.append(para);
let searchWord = document.querySelector("#searchWord");

searchButton.addEventListener("click", () => {
    fetch(`https://api.giphy.com/v1/gifs/translate?apiKey=HjTm6SNTrffuPdwrfl7ZWXC0CcrZNZwe&s=${searchWord.value}`)
.then((response) => {
    console.log(response);
    return response.json();

})

.then((res) => {
    console.log(res);

    image.src = res.data.images.original.url;
    searchInput.value = "";
     para.textContent = "";

})

.catch((err) =>{
console.error(err);
para.textContent = err.message;
});

})

