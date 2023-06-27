import {supabase} from './config/index'

export async function handleLogOut(setUser, setSession){
  const { error } = await supabase.auth.signOut()
  
    setUser(null)
    setSession(null)

    if (error) console.log('Error logging out:', error.message)
    
  }