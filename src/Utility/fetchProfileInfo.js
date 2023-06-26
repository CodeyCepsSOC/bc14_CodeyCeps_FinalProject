// import { supabase } from './config'
// import { useNavigate } from 'react-router-dom'

// export async function fetchProfileInfo(session) {
//     const { data, error } = await supabase
//       .from('profiles')
//       .select()
//       .eq('account_id', session.user.id)

//   console.log(data)
//     if (data.length > 1) {
//       alert("There is more than one profile associated with this account. Please contact support.")
//     }
//     else if (data.length === 1) {
//       props.setUser({firstName: data[0].first_name, lastName: data[0].last_name, profilePic: data[0].profile_pic, id: session.user.id})
//       navigate('/explore')
//     }
    
//     if (data.length < 1) {
//       navigate('/accountcreation')
//     }
//   }