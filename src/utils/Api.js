
class Api {
  constructor(options) {
    this.options = options;
  }

  getInitialCards() {
    return this.request("/cards");
  }

  getUserInfo() {
    return this.request("/users/me");
  }

  getAppInfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  addLike(cardId) {
    return this.nrequest(`/cards/likes/${cardId}`, "PUT");
  }

  removeLike(cardId) {
    return this.request(`/cards/likes/${cardId}`, "DELETE");
  }

  delCard(cardId) {
    return this.request(`/cards/${cardId}`, "DELETE");
  }

  updateUserInfo(formData) {
    return this.request(
      "/users/me",
      "PATCH",
      JSON.stringify({
        name: formData.name,
        about: formData.about,
      })
    );
  }

  updateAvatar(formData) {
    return this.request(
      "/users/me/avatar",
      "PATCH",
      JSON.stringify({ avatar: formData.avatar })
    );
  }

  postNewCard(formData) {
    return this.request(
      "/cards/",
      "POST",
      JSON.stringify({
        name: formData.name,
        link: formData.link,
      })
    );
  }

  request(api, method, body) {
    return fetch(`${this.options.baseUrl}${api}`, {
      headers: {
        "Authorization" : '2ea24103-3839-4671-8e47-57675e6fba9c',
        "Content-Type": "application/json",
      },
      method,
      body,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
  }
}
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-2",
});

export default api;