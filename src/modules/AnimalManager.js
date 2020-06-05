const remoteURL = "http://localhost:5002";

const AnimalManager = {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then((result) => result.json());
  },
  getAll() {
    // Refactor this fetch call to ask for animals that match the logged in user's id
    return fetch(`${remoteURL}/animals`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newAnimal) {
    // refactor this fetch call to make sure that the new animal has the employeeId of the logged in user
    return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAnimal),
    }).then((data) => data.json());
  },
  update(editedAnimal) {
    // refactor this fetch call as well to make sure that the edited animal retains the logged in user's id
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedAnimal),
    }).then((data) => data.json());
  },
};

export default AnimalManager;
