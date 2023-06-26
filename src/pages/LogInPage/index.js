import { useState, useEffect } from 'react'
import './loginpage.css'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import {supabase} from '../../Utility/config/index'
import { useNavigate } from 'react-router-dom'
import { fetchProfileInfo } from '../../Utility/fetchProfileInfo'

export default function LogInPage(props) {
    
const {session, setSession, user} = props
  
const navigate = useNavigate();





// when user logs in query the database for their profile info
// if there is no profile info, redirect to account creation page
// if there is profile info, redirect to explore page

  useEffect(() => {
    
    if (session?.user.id) {
      console.log(session.user.id)

     
  async function fetchProfileInfo() {

  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('account_id', session.user.id)


console.log(data)
  if (data.length > 1) {
    alert("There is more than one profile associated with this account. Please contact support.")
  }
  else if (data.length === 1) {
    props.setUser({firstName: data[0].first_name, lastName: data[0].last_name, profilePic: data[0].profile_pic, id: session.user.id})
    navigate('/explore')
  }
  
  if (data.length < 1) {
    navigate('/accountcreation')
  }
}
      fetchProfileInfo()
    }
  }, [session, navigate, user, props])


  if (!session) {
    return (<div id="log-in-page">
    <div id="log-in-section">
      <h1>Log in or Create an Account</h1>
      <Auth supabaseClient={supabase} providers={['google']} appearance={{ theme: ThemeSupa, variables: {
      dark: {
        colors: {
          inputText: 'white',
          inputLabelText: 'white',
        },
      },
    }, }} theme="dark" />
    </div>
  </div>)
  }

}