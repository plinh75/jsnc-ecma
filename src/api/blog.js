import instance from "./instance";

export const getAll = () => {
    const url = `/blogs`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/blogs/${id}`;
    return instance.get(url);
};
export const add = (post) => {
    const url = `/blogs`;
    return instance.post(url, post);
};
export const remove = (id) => {
    const url = `/blogs/${id}`;
    return instance.delete(url);
};
export const update = (post) => {
    const url = `/blogs/${post.id}`;
    return instance.put(url, post);
};