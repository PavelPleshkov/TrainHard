export const parseRequestURL = () => {
    const url = location.hash.slice(2);
    const request = {};

    [request.resource, request.action] = url.split('/');

    return request;
};