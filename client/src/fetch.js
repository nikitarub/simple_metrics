export const serverUrl = "http://0.0.0.0:9000"


export class fetchModule {
	static _ajax ({ method = 'GET', path = '/', body, headers } = {}) {
		let theUrl = serverUrl;
		const url = theUrl + path;

		const options = {
			mode: 'cors',
			credentials: 'include',
			// credentials: 'same-origin',
			method: method,
			headers: {}
		}
		if (headers) {
			options.headers = headers;
		}

		if (body) {
			// console.log("body: ", body);
			options.headers['Content-Type'] = 'application/json; charset=utf-8' ;
			options.body = JSON.stringify(body);
		}
		return fetch(url, options);
	}

	static doGet (params = {}) {
        // console.log("Doing get")
		return this._ajax({ ...params, method: 'GET' });
	}

	static doPost (params = {}) {
		// console.log("do post ", params);
		return this._ajax({ ...params, method: 'POST' });
	}

	static doDelete (params = {}) {
		return this._ajax({ ...params, method: 'DELETE' });
	}

	static doPut (params = {}) {
		return this._ajax({ ...params, method: 'PUT' });
	}
	static doPatch (params = {}) {
		return this._ajax({ ...params, method: 'PATCH' });
	}

	static serverUrl () {
		return serverUrl;
	}
}