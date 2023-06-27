import './App.css';
import Header from './Global-Components/Header';
import Footer from './Global-Components/Footer';
import ExplorePage from './pages/ExplorePage';
import LandingPage from './pages/LandingPage';
import CommunityPage from './pages/CommunityPage';
import { supabase } from './Utility/config';
import LogInPage from './pages/LogInPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import ScrollToHashElement from './Global-Components/Scroll to hash element/ScrollToHashElement';
import { handleLogOut } from './Utility/logout';
import AccountCreation from './pages/LogInPage/AccountCreation';

//establishes connection to supabase by providing it with our database url and public key

function App() {

  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)

  useEffect(() => {
    if (session) return;
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    

    return () => subscription.unsubscribe()
  }, [session])

  useEffect(() => {
    if (session?.user.id && !user) {
      async function fetchProfileInfo() {
        
        const { data, error } = await supabase
          .from('profiles')
          .select()
          .eq('account_id', session.user.id)
        if (data.length > 1) {
          alert("There is more than one profile associated with this account. Please contact support.")
        }
        else if (data.length === 1) {
          setUser({firstName: data[0].first_name, lastName: data[0].last_name, profilePic: data[0].profile_pic, id: session.user.id})
        }
   
      }
      fetchProfileInfo()
    }
  }, [session, user])


  return (
    /*We wrap our content first with <BrowserRouter>.
Then we define our <Routes>. An application can have multiple <Routes>. 
Layout is used as an example here- will be replaced by header with different route paths.
<Route>s can be nested. The first <Route> has a path of / and renders the Layout component.
The nested <Route>s inherit and add to the parent route. So the explore path is combined with the parent and becomes /explore.
The Landingpage component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.-- will come back to this !
    */
    <BrowserRouter>
    <ScrollToHashElement/>
      <Header user={user} setSession={setSession} setUser={setUser}/>
        <Routes>
          <Route path="/"> 
            <Route index element={<LandingPage/>}/>
            <Route path="explore" element={<ExplorePage/>}/>
            <Route path="community" element={<CommunityPage user={user}/>}/>
            <Route path="loginpage" element={<LogInPage session={session} setSession={setSession} user={user} setUser={setUser}/>}/>
            <Route path="accountcreation" element={<AccountCreation user={user} setUser={setUser} session={session} />}/>
          </Route>
        </Routes>
        <Footer/>
        
    </BrowserRouter>
  );
}

export default App;
