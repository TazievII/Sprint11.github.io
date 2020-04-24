export const profile = document.querySelector('.profile');
export const openClose = document.querySelector('.root');
export const cardContainer = document.querySelector('.places-list');
export const form = document.forms.new;
export const formEdit = document.forms.edit;
const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort9' : 'https://praktikum.tk/cohort9'

export const config = {
  baseUrl: serverUrl,
  headers: {
    authorization: '2ca8c5d8-d8f7-4c26-befb-2dabe82c5f13',
    'Content-Type': 'application/json'
  }};
