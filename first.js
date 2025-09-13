const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('section');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(sec => sec.classList.remove('active'));

        button.classList.add('active');
        const targetSectionId = button.id.replace('-btn', '');
        document.getElementById(targetSectionId).classList.add('active');
    });
});

const mainSearchBox = document.getElementById("mainSearchBox");
const searchBox = document.getElementById("searchBox");
const genreFilter = document.getElementById("genreFilter");
const bookCards = document.querySelectorAll(".book-card");

function filterBooks() {
    const currentSearchText = searchBox.value.toLowerCase() || mainSearchBox.value.toLowerCase();
    const currentGenre = genreFilter.value;

    bookCards.forEach(card => {
        const title = card.querySelector("h4").textContent.toLowerCase();
        const author = card.querySelector(".author").textContent.toLowerCase();
        const bookGenres = card.getAttribute("data-genre").split(' ');

        const matchesSearch = title.includes(currentSearchText) || author.includes(currentSearchText);
        const matchesGenre = (currentGenre === "all" || bookGenres.includes(currentGenre));

        card.style.display = (matchesSearch && matchesGenre) ? "flex" : "none";
    });
}

mainSearchBox.addEventListener("input", () => {
    searchBox.value = "";
    filterBooks();
});
searchBox.addEventListener("input", () => {
    mainSearchBox.value = "";
    filterBooks();
});
genreFilter.addEventListener("change", filterBooks);

filterBooks();

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login functionality to be implemented! For now, you can enjoy browsing.');
});

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const bookTitle = button.closest('.book-card').querySelector('h4').textContent;
        alert(`${bookTitle} has been added to your cart!`);
    });
});