import ApplicationController from "./application_controller";
import _debounce from "lodash/debounce";

export default class extends ApplicationController {
  debounce = _debounce((value) => {
    const user = document.getElementById("user_id");
    this.stimulate("ArticleSearch#search", {
      value: value,
      user_id: user.value,
    });
  }, 1500);

  search(event) {
    this.debounce(event.target.value);
  }

  reset(event) {
    event.preventDefault();
    this.stimulate("ArticleSearch#search");
  }

  beforeSearch() {
    this.articleList.animate(this.fadeIn, this.fadeInTiming);
  }

  get fadeIn() {
    return [{ opacity: 0 }, { opacity: 1 }];
  }

  get fadeInTiming() {
    return { duration: 300 };
  }

  get articleList() {
    return document.getElementById("articles-list");
  }
}
