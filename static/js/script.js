const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    const inputSearch = document.querySelector(".search-box > input");
    const inputText = inputSearch.value;
    const filteredCards = getFilteredCards(cardArray, inputText);
    if (inputText.length > 0) {
        renderCards(filteredCards);
    }
});

function getFilteredCards(cards, text) {
    const fields = ["title", "address"];
    return cards.filter((card) => {
        return fields.some((field) => {
            return card[field]
                .toLocaleLowerCase()
                .includes(text.toLocaleLowerCase());
        });
    });
}

const cardArray = [
    {
        id: 1,
        title: "Первый товар",
        price: "171 Р",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "static/img/card-img.jpg",
    },
    {
        id: 2,
        title: "Второй товар",
        price: "172 Р",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "static/img/card-img.jpg",
    },
    {
        id: 3,
        title: "Третий товар",
        price: "173 Р",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "static/img/card-img.jpg",
    },
    {
        id: 4,
        title: "Четвертый товар",
        price: "174 Р",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "static/img/card-img.jpg",
    },
    {
        id: 5,
        title: "Пятый товар",
        price: "175 Р",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "static/img/card-img.jpg",
    },
    {
        id: 62,
        title: "Шестой товар",
        price: "176 Р",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        image: "static/img/card-img.jpg",
    },
];

const cardWrapper = document.querySelector(".content-main .card-list");

const renderCards = (cardList) => {
    cardWrapper.innerHTML = ""; // clear cardWrapper
    cardList.forEach((card) => {
        cardWrapper.insertAdjacentHTML(
            "beforeend",
            `<a href="/single.html" class="card">
                <img
                    src = "${card.image}"
                    alt = "card image"
                    class= "card--image"
                />

                <div class="card-info">
                    <h5 class="card-list__card--title">
                        ${card.title}
                    </h5>

                    <span class="card-price"> ${card.price} </span>

                    <div class="card-footer">
                        <span class="card-address">
                            ${card.address}
                        </span>

                        <span class="card-time">
                            ${card.date}
                        </span>
                    </div>
                </div>
            </a>`
        );
    });
};

cardWrapper.style.justifyContent = "flex-start";
cardWrapper.style.rowGap = "none";
cardWrapper.style.gap = "30px";

renderCards(cardArray);
