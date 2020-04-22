export default class Card {
    constructor () {
        this.listeners();
    }
    getTemplate (name, link) {
        const template = 
      `<div class="place-card">
        <div class="place-card__image" style="background: url(${link})">
          <button class="place-card__delete-icon"></button>
        </div>
        <div class="place-card__description">
          <h3 class="place-card__name">${name}</h3>
          <div class="place-card__button-counter">
          <button class="place-card__like-icon"></button>
          <p class="place-card__like-counter">0</p>
          </div>
        </div>
        </div>`;
      return template;
}
    createCard(name, link) {
      document.querySelector('.places-list').insertAdjacentHTML('beforeend', this.getTemplate(name, link));
    }

    like(event) {
        if (event.target.classList.contains('place-card__like-icon')) {
            event.target.classList.toggle('place-card__like-icon_liked');
        }
    }

    removeCard(event) {
        if (event.target.classList.contains('place-card__delete-icon')) {
            event.target.closest('.places-list').removeChild(event.target.closest('.place-card'));
        }
    }

    listeners() {
        document.querySelector('.places-list').addEventListener('click', this.like);
        document.querySelector('.places-list').addEventListener('click', this.removeCard);
    }

    
}