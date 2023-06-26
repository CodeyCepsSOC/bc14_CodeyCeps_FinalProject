import {supabase} from './config/index'

export async function handleLogOut(setUser){
    setUser(null)
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error logging out:', error.message)
  }