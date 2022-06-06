export class API {
  getResume() {
    fetch("http://127.0.0.1:8000/my_api/resume/").then((resp) => resp.json());
  }
}
