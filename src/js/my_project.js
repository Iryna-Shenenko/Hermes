const images = [
    {
        picture: "/img/my-projects/myprojects-1.jpg",
        text: "power pulse webservice",
    },
    {
        picture: "/img/my-projects/myprojects-2.jpg",
        text: "mimino website",
    },
    {
        picture: "/img/my-projects/myprojects-3.jpg",
        text: "vyshyvanka vibes Landing",
    },
    {
        picture: "/img/my-projects/myprojects-4.jpg",
        text: "green harvest online store",
    },
    {
        picture: "/img/my-projects/myprojects-5.jpg",
        text: "wallet webservice",
    },
    {
        picture: "/img/my-projects/myprojects-6.jpg",
        text: "chego jewelry website",
    },
    {
        picture: "/img/my-projects/myprojects-7.jpg",
        text: "energy flow webservice",
    },
    {
        picture: "/img/my-projects/myprojects-8.jpg",
        text: "fruitbox online store",
    },
    {
        picture: "/img/my-projects/myprojects-9.jpg",
        text: "English excellence webservice",
    },
    {
        picture: "/img/my-projects/myprojects-10.jpg",
        text: "starlight studio landing page",
    },
];

const listEl = document.querySelector(".myprojects-list-galery");
const buttonLoad = document.querySelector(".myprojects-button-load");
const BASE_URL = "https://github.com/Iryna-Shenenko/Hermes";

let visibleImages = 3;

function createImageCards(images) {
    return images.map(image => `
    <li class="myprojects-gallery-item">
            <img class="myprojects-photo-card" src="${image.picture}" alt="${image.text}" />
        <div class="myprojects-subtitle">
          <p class="myprojects-subtitle-text">React, JavaScript, Node JS, Git</p></div>
          <div class="myprojects-info">
            <h3 class="myprojects-info-title">${image.text}</h3>
            <div class="project-btn-container">
            
            <button type="button" class="myprojects-info-button" target="_blank"><a href="${BASE_URL}">visit
                <svg width="24" height="24">
                        <use href="/img/my-projects/myprojects.svg#icon-visit"></use>
                </svg></a>
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
    const remainingImages = images.length - visibleImages;
    
    const loadCount = remainingImages >= 3 ? 3 : remainingImages;
    visibleImages += loadCount;

    const newImages = images.slice(visibleImages - loadCount, visibleImages);
    listEl.insertAdjacentHTML('beforeend', createImageCards(newImages));

    if (originalButtonText) {
      originalButtonText.textContent = "Load More";
    }

    buttonLoad.disabled = false;

    if (visibleImages >= images.length) {
      buttonLoad.style.display = 'none'; 
    }
  }, 1000);
}

renderInitialImages();

buttonLoad.addEventListener("click", loadMoreImages);
