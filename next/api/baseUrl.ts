const baseUrls = {
  production: '',
  development: 'http://localhost:3000/api/v1/',
  test: '',
}

const baseUrl = baseUrls[process.env.NODE_ENV || 'development']

export default baseUrl
