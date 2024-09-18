function addNews() {
    const newsContainer = document.getElementById('news-container');
    const articleTitle = prompt("Enter the title of the news article:");
    const articleContent = prompt("Enter the content of the news article:");

    if (articleTitle && articleContent) {
        const newArticle = document.createElement('div');
        newArticle.classList.add('news-article');
        newArticle.innerHTML = `
            <h3>${articleTitle}</h3>
            <p>${articleContent}</p>
            <small>Published on: ${new Date().toLocaleDateString()}</small>
        `;
        newsContainer.appendChild(newArticle);
    } else {
        alert("Both title and content are required to add a news article.");
    }
}
