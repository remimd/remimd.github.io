import { router } from './router.js'

async function load() {
    const content = document.querySelector("div#content")

    async function getHtml(input) {
        let response = await fetch(input)
        return await response.text()
    }

    const header = "<header>" + await getHtml("layout/header.html") + "</header>"
    const main = "<main>" + await getHtml(await router()) + "</main>"
    const footer = "<footer>" + await getHtml("layout/footer.html") + "</footer>"

    content.innerHTML = header + main + footer
}

load()