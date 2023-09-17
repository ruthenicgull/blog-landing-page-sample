const searchBar = document.querySelector(".search-wrapper")
const searchButton = document.querySelector(".search-icon-button")
const newsButton = document.querySelector(".news-button")
const updatesButton = document.querySelector(".updates-button")
const jobsButton = document.querySelector(".jobs-button")
const newsBody = document.querySelector(".news-body")
const updatesBody = document.querySelector(".updates-body")
const jobsBody = document.querySelector(".jobs-body")
const navBar = document.querySelector(".nav-bar-container")

function onNewsButtonClick(){
    const currentActiveButton = document.querySelector("[data-active]")
    const currentActiveBody = document.querySelector("[data-body]")


    delete currentActiveButton.dataset.active
    newsButton.dataset.active = true

    delete currentActiveBody.dataset.body
    newsBody.dataset.body = true
}

function onUpdatesButtonClick(){
    const currentActiveButton = document.querySelector("[data-active]")
    const currentActiveBody = document.querySelector("[data-body]")

    delete currentActiveButton.dataset.active
    updatesButton.dataset.active = true

    delete currentActiveBody.dataset.body
    updatesBody.dataset.body = true
}

function onJobsButtonClick(){
    const currentActiveButton = document.querySelector("[data-active]")
    const currentActiveBody = document.querySelector("[data-body]")

    delete currentActiveButton.dataset.active
    jobsButton.dataset.active = true

    delete currentActiveBody.dataset.body
    jobsBody.dataset.body = true
}

let flag = 0;
function onSearchButtonClick(){
    if(flag == 0){
        flag++
        onSearchButtonClick()
    }
    if(searchBar.style.display == "none")
        searchBar.style.display = "flex"
    else
        searchBar.style.display = "none"
}

searchButton.addEventListener("click",() => {
    onSearchButtonClick()
})

newsButton.addEventListener("click", () => {
    onNewsButtonClick();
})

updatesButton.addEventListener("click", () => {
    onUpdatesButtonClick();
})

jobsButton.addEventListener("click", () => {
    onJobsButtonClick();
})


// SEARCH FUNCTIONALITY ************************
const blogCardTemplate = document.querySelector("[data-blog-card-template]")
const blogCardsContainer = document.querySelector("[data-blog-cards-container]")
const searchInput = document.querySelector("[data-search]")

let blogs = []

searchInput.addEventListener("input", (e) => {

    const value = e.target.value.toLowerCase();
    blogs.forEach(blog => {
        const isVisible = blog.title.toLowerCase().includes(value)
        console.log(isVisible);
        if(!isVisible)
            blog.element.style.display = "none"
        else blog.element.style.display = "block"
    })
})

fetch("blogs.json")
    .then(res => res.json())
    .then(data => {
        blogs = data.map(blog => {
            const card = blogCardTemplate.content.cloneNode(true).children[0]
            const blogTitle = card.querySelector("[data-blog-title]")
            blogTitle.textContent = blog.title
            card.href = blog.link
            blogCardsContainer.append(card)
            return  { 
                        title: blog.title, 
                        content: blog.content,  
                        element: card
                    }
        })
    })
//**********************************************
