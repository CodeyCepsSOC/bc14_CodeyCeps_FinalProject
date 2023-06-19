import { createClient } from '@supabase/supabase-js'

const supabaseURL = process.env.REACT_APP_SUPABASE_DB_CONNECTION
const supabaseKey = process.env.REACT_APP_SUPABASE_PUBLIC
export const supabase = createClient(supabaseURL, supabaseKey);
