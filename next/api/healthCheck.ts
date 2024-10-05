import api from './index'

type Endpoints = {
  getHealthCheckResult: () => Promise<{ message: string }>
}

const endpoints: Endpoints = {
  getHealthCheckResult: async () => {
    return await api('health_check')
  },
}

export default endpoints
