'use client'
import { supabase } from '@/lib/supabaseClient'
import { useEffect, useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [user, setUser] = useState<any>(null)
  const [message, setMessage] = useState('')
useEffect(() => {
  supabase.auth.getSession().then(({ data }) => {
    setUser(data.session?.user ?? null)
  })
}, [])

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) setMessage(error.message)
    else setMessage('✅ Check your email for the login link.')
  }

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Sign in to Trisha AI</h1>
      <input
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full border rounded px-3 py-2 mb-4"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-orange-600 text-white rounded py-2"
      >
        Send me a magic link
      </button>
        {message && <p className="mt-4">{message}</p>}
  {user && (
    <p className="mt-4 text-sm text-gray-700">
      ✅ Signed in as <strong>{user.email}</strong>
    </p>
  )}
</div>
+  )      // close the JSX return
+}       // close the Home function
