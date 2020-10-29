class AuthApi {
	constructor(options) {
		this.options = options;
	}

	register(credentials) {
		return this.request("/signup", "POST", JSON.stringify(credentials));
	}

	authorize(credentials) {
		return this.request("/signin", "POST", JSON.stringify(credentials))
	}

	getContent(token) {
		return fetch('http://ykhilko.students.nomoreparties.site/users/me', {
			method: 'GET',
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${token}`,
			},
		}).then(async (res) => {
			if (res.ok) {
				return res.json();
			}
			const body = await res.json();
			return Promise.reject(body.error || body.message);
		});
	}
	
	request(authApi, method, body) {
		return fetch(`${this.options.baseUrl}${authApi}`, {
			headers: {
				"Content-Type": "application/json",
			},
			method,
			body,
		}).then(async (res) => {
			if (res.ok) {
				return res.json();
			}
			const body = await res.json();
			return Promise.reject(body.error || body.message);
		});
	}
}
const authApi = new AuthApi({
	baseUrl: "http://ykhilko.students.nomoreparties.site",
});

export default authApi;
