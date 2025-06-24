const form=document.getElementById("Searchid")

form.addEventListener("submit",async(e)=>{
    e.preventDefault()
    let search=e.target.children[0].value

    let result = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=e60404aa`)
    console.log(result.data) 
    createCard(result.data.Search)
})

const container=document.getElementById("container")


function createCard(movies){
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