let apiUrl
const apiUrls = {
    production: 'https://ny-knickstory.herokuapp.com//',
    // development: 'http://localhost:3000/api/v1'
    development: '/'
}
if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}
export default apiUrl