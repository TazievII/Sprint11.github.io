export default class UserInfo {
    constructor(firstname, about) {
        this.firstname = firstname;
        this.about = about;
    }

    setUserInfo() {
        this.firstname = document.forms.edit.elements.firstname.value;
        this.about = document.forms.edit.elements.about.value;
    }

    updateUserInfo() {
        document.querySelector('.user-info__name').textContent = this.firstname;
        document.querySelector('.user-info__job').textContent = this.about;
    }
    
}