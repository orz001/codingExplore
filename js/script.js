// vue
// main app
var mainApp = new Vue({
    el: 'main-app#main',
    data: {
        lines: 0
    }
})

// custom element
// main-app
class MainApp extends HTMLElement {
    constructor() {
        super()
    }
}
customElements.define('main-app', MainApp)
