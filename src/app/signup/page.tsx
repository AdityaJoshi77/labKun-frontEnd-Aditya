'use client'
import { useEffect, useState } from 'react'
import LeftPanel from '../components/LeftPanel'
import EmailVerification from '../components/EmailVerification'
import SignupForm from '../components/SignUpForm'
import { useRouter, useSearchParams } from 'next/navigation'

const SignUp = () => {
  const [email, setEmail] = useState<string>('')
  const [emailVerified, setEmailVerified] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    if (searchParams.get('verified') === 'true') {
      setEmailVerified(true)
      router.push('/signup')
    }
  }, [searchParams, router])

  return (
    <div className='flex min-h-screen bg-gray-100'>
      <LeftPanel />

      <div className='w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 p-8'>
        <h2 className='text-3xl font-bold mb-4'>Create an Account</h2>
        <p className='text-sm text-gray-600 mb-6'>
          Already have an account?{' '}
          <a href='/loginpage' className='text-blue-500 hover:underline'>
            Log in
          </a>
        </p>

        {emailVerified ? (
          <SignupForm email={email} isVerified={true} />
        ) : (
          <EmailVerification
            onEmailVerified={(verifiedEmail: string) => {
              setEmail(verifiedEmail)
              setEmailVerified(true)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default SignUp
