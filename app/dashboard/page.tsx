'use client'

import MainContent from '@/components/dashboard/MainContent'
import React from 'react'
import AppWrapper from './AppWrapper'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Page: React.FC = () => {
  const { data: session } = useSession()
  const router = useRouter()

  // If session is not available, redirect to the homepage
  if (!session) {
    router.push('/')
    return null; // Returning null to prevent further rendering
  }

  return (
    <AppWrapper>
      <MainContent />
    </AppWrapper>
  )
}

export default Page
