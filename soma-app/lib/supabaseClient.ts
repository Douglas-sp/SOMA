// This file allows our app to talk to our database
import { createClient } from '@supabase/supabase-js'

// These lines pull the secret keys we put in the .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// This creates the "messenger" that will carry data back and forth
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
