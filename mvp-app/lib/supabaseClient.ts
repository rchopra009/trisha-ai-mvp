// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl   = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnon  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnon) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY env vars')
}

export const supabase = createClient(supabaseUrl, supabaseAnon)
