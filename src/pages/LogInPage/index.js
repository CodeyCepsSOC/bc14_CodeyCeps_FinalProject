import { useState, useEffect } from 'react'
import './loginpage.css'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import {supabase} from '../../Utility/config/index'
import { useNavigate } from 'react-router-dom'
export default function LogInPage(props) {
    
const {session, setSession} = props
  
const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [setSession])

     //handle function for the logout button
     
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
  else {
    goBack()
  }
}