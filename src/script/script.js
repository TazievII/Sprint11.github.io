import '../pages/index.css';
import Api from './Api';
import Card from './Card';
import CardList from './CardList';
import FormValidator from './FormValidator';
import Popup from './Popup';
import Profile from './Profile';
import UserInfo from './UserInfo';

/* Переменные */
import {profile, openClose, cardContainer, form, formEdit, config} from './consts';
const cardElement = new Card();
const api = new Api(config, cardContainer);
const cardList = new CardList(cardContainer, api);
const profileInfo = new Profile(profile, api);
const popup = new Popup(document.querySelectorAll('.popup'));
const userInfo = new UserInfo(formEdit.elements.firstname.value, formEdit.elements.about.value);
const formValidator = new FormValidator(formEdit.elements.firstname.value, formEdit.elements.about.value);



api.getInitialCards();
api.getProfileInfo();
cardList.render();
profileInfo.renderProfile();




/* Валидация на добавление карточки */
function setSubmitButtonStateCard() {
  const name = event.currentTarget.elements.name;
  const link = event.currentTarget.elements.link;
  const saveButton = document.querySelector('.popup__button');

  if (name.value.length === 0 || link.value.length === 0) {
    saveButton.setAttribute('disabled', true);
    saveButton.classList.add('popup__button_disabled');
  } else {
    saveButton.removeAttribute('disabled');
    saveButton.classList.remove('popup__button_disabled');
  }
}




/* Слушатели событий */
openClose.addEventListener('click', (event) => {
  popup.open(event);
  popup.close(event);
});
form.addEventListener('submit', () => {
  event.preventDefault();
  let name = document.querySelector('.popup__input_type_name').value;
  let link = document.querySelector('.popup__input_type_link-url').value;
  const saveButton = document.querySelector('.popup__button');
  //api.addCardToServer();
  cardElement.createCard(name, link);
  form.reset();
  let close = document.querySelector('#popup2');
  close.classList.remove('popup_is-opened');
  saveButton.setAttribute('disabled', true);
  saveButton.classList.add('popup__button_disabled');
});
form.addEventListener('input', setSubmitButtonStateCard);
formEdit.addEventListener('submit', (event) => {
  event.preventDefault();
  api.updateProfile();
  userInfo.setUserInfo();
  userInfo.updateUserInfo();
  event.target.closest('.popup').classList.remove('popup_is-opened');
formEdit.addEventListener('input', () => {
  formValidator.checkInputValidity(event);
  formValidator.setSubmitButtonState(event);
});
});