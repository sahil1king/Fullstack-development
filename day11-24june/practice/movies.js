//to keep the movies on webpage even after refresh, we can use localStorage and its functions
//it is 23rd june 10th lecture's code but we did some changes to it for the non-removing of movies from page after refresh
const form=document.getElementById("Searchid")

form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let search=e.target.children[0].value

    let result = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=e60404aa`)

    localStorage.setItem("movies",JSON.stringify(result.data.Search))
    createCard()

})

const container=document.getElementById("container")

function createCard(){
    let movies=JSON.parse(localStorage.getItem("movies"))

    container.innerHTML=""

    movies.forEach(movie => {
        const div=document.createElement("div")
        const img=document.createElement("img")
        img.src=movie.Poster
        img.class="movie-banner"
        div.innerHTML=`<h2>${movie.Title}</h2> <span>${movie.Year}</span>`
        div.prepend(img)
        
        container.append(div)
    });
}


if(localStorage.getItem("movies")){
    createCard()
}