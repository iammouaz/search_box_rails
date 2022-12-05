import ApplicationController from './application_controller'

export default class extends ApplicationController {
  search(event) {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.stimulate('ArticleSearch#search', event.target.value)
    }, 200)
  }

  reset(event) {
    event.preventDefault()
    this.stimulate('ArticleSearch#search')
  }

  beforeSearch() {
    this.articleList.animate(
      this.fadeIn,
      this.fadeInTiming
    )
  }

  get fadeIn() {
    return [
      { opacity: 0 },
      { opacity: 1 }
    ]
  }

  get fadeInTiming() {
    return { duration: 300 }
  }

  get articleList() {
    return document.getElementById('articles-list')
  }
}
