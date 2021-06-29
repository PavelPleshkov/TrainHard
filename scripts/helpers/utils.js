export const parseRequestURL = () => {
    const url = location.hash.slice(2),
        request = {};

    // [request.resource, request.id, request.action] = url.split('/');
    [request.resource, request.workout, request.action] = url.split('/');


    return request;
};

// export const generateID = () => {
//     return Math.random().toString(36).substr(2, 10);
// };

export const generateID = () => {
    return localStorage.getItem('way');
};