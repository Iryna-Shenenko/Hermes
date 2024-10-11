const images = [
    {
        picture: "../img/myprojects-1.png",
        text: "power pulse webservice",
    },
    {
        picture: "../img/myprojects-2.png",
        text: "mimino website",
    },
    {
        picture: "../img/myprojects-3.png",
        text: "vyshyvanka vibes Landing",
    },
    {
        picture: "../img/myprojects-4.png",
        text: "green harvest online store",
    },
    {
        picture: "../img/myprojects-5.png",
        text: "wallet webservice",
    },
    {
        picture: "../img/myprojects-6.png",
        text: "chego jewelry website",
    },
    {
        picture: "../img/myprojects-7.png",
        text: "energy flow webservice",
    },
    {
        picture: "../img/myprojects-8.png",
        text: "fruitbox online store",
    },
    {
        picture: "../img/myprojects-9.png",
        text: "English excellence webservice",
    },
    {
        picture: "../img/myprojects-10.png",
        text: "starlight studio landing page",
    },
];

const listEl = document.querySelector(".myprojects-list-galery");
const buttonLoad = document.querySelector(".myprojects-button-load");

let visibleImages = 3;

function createImageCards(images) {
    return images.map(image => `
    <li class="myprojects-gallery-item">
    <div>
          <img class="myprojects-photo-card" src="${image.picture}" alt="${image.text}" />
        </div>
        <div class="myprojects-subtitle">
          <p class="myprojects-subtitle-text">React, JavaScript, Node JS, Git</p>
          <div class="myprojects-info">
            <h3 class="myprojects-info-title">${image.text}</h3>
            <button class="myprojects-info-button">visit
                <svg width="24" height="24">
                        <use href="../img/myprojects.svg#icon-visit"></use>
                </svg>
            </button>
        </div>
    </div>
    </li>
  `).join('');
};

function renderInitialImages() {
    const initialImages = images.slice(0, visibleImages);
    listEl.innerHTML = createImageCards(initialImages);
}


function loadMoreImages() {
  const originalButtonText = buttonLoad.querySelector('span');
  if (originalButtonText) {
    originalButtonText.textContent = "Loading...";
  }

  buttonLoad.disabled = true;

  setTimeout(() => {
    visibleImages += 3;
    const newImages = images.slice(visibleImages - 3, visibleImages);
    
    listEl.insertAdjacentHTML('beforeend', createImageCards(newImages));

    if (originalButtonText) {
      originalButtonText.textContent = "Load More";
    }

    buttonLoad.disabled = false;

    if (visibleImages >= images.length) {
      buttonLoad.classList.add("load-hide");
    }
  }, 1000);
}

renderInitialImages();

buttonLoad.addEventListener("click", loadMoreImages);
