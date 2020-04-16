let apiUrl
const apiUrls = {
    production: 'https://ny-knickstory-back-end.herokuapp.com/',
    // development: 'http://localhost:3000/api/v1'
    development: 'https://ny-knickstory-back-end.herokuapp.com/'
}
if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}
export default apiUrl