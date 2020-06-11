const remoteURL = "http://localhost:5002";

const employeeManager = {
  getAll() {
        return fetch(`${remoteURL}/employees/`).then(result => result.json())
    },
    // Gets a single employee with a list of their related animals
   getWithAnimals(id) {
        return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
                .then(result => result.json())
    }
}

export default employeeManager;