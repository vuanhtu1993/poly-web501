const AdminLayout = function (component) {
    return /*html*/`
        <div>
            <h1>Dashboard</h1>
            ${component()}
        </div>
    `
}

export default AdminLayout