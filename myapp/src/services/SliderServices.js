import httpAxios from "../httpAxios";

function getAll() {
    return httpAxios.get("sliders"); // Updated URL
}

function getById(id) {
    return httpAxios.get(`sliders/${id}`); // Updated URL
}

function create(data) {
    return httpAxios.post("sliders", data); // Updated URL
}

function update(data, id) {
    return httpAxios.put(`sliders/${id}`, data); // Updated URL and method
}

function remove(id) {
    return httpAxios.delete(`sliders/${id}`); // Updated URL
}

function getByPosition(position) {
    // return httpAxios.get(`sliders/image/${position}`); // Updated URL
}

const SliderService = {
    getByPosition: getByPosition,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
};

export default SliderService;
