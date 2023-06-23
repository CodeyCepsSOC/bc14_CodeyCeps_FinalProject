import {supabase} from './config/index'

export async function handleLogOut(){
    const { error } = await supabase.auth.signOut()
    if (error) console.log('Error logging out:', error.message)
  }