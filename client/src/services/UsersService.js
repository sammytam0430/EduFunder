import Api from "@/services/Api";

export default {
  // send post request to validate user email and password
  authenticateUser(data) {
    return Api().post("/login", data);
  },
  createUser(data) {
    return Api().post("/users", data);
  },
  // send patch request to update a user
  updateUser(id, data) {
    return Api().patch("/users/" + id, data);
  },
  // send delete request to delete a user
  deleteUser(id) {
    return Api().delete("/users/" + id);
  }
};
