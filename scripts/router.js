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
    else route = Object.values(routes)[0]

    let title = route["title"]
    if (title) document.title = title

    return route["file"]
}