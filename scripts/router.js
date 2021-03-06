export async function router() {
    async function getRoutes() {
        let response = await fetch("routes.json")
        return await response.json()
    }

    const routes = await getRoutes()
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const route_reference = urlParams.get('route')

    let route
    if (route_reference) route = routes[route_reference]
    else route = routes["home"]

    if (!route) {
        route = routes["404"]
    }
    let file = route["file"]

    let title = route["title"]
    if (title) document.title = title + " | " + document.title

    return file
}