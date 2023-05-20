const render = function (container, component) {
    container.innerHTML = component()
}

export {
    render
}