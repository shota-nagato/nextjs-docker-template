'use client'

import apiRouter from '@/api/router'
import { useQuery } from '@tanstack/react-query'

export default function Home() {
  const { data } = useQuery({
    queryKey: ['getHealthCheckResult'],
    queryFn: apiRouter.healthCheck.getHealthCheckResult,
  })

  return (
    <div>
      <div>{data?.message}</div>
    </div>
  )
}
