export class API {
  static getResume(toRetrieve) {
    return fetch(`http://127.0.0.1:8000/my_api/${toRetrieve}/`).then((resp) =>
      resp.json(),
    );
  }
}
