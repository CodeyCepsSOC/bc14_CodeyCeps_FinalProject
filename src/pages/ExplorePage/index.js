// page file for the route detail dropdown
import "./explorepage.css"
import MapDisplay from './MapDisplay';
import RouteDetailCard from './RouteDetailCard';
import { useState, useEffect } from "react";
import Search from './Search';
import RouteDetailDropdown from './RouteDetailDropDown';

export default function ExplorePage() {

 const [location, setLocation] = useState("")
 const [activeRoute, setActiveRoute] = useState(0)
 
let routeDetailArray = [
        {
            name: "Hildas Walk",
            difficulty:'Beginner',
            time: "1 hour",
            icons: ["dog-friendly", "coffee-shop", "toilets"],
            description: "This is a route description",
            map: './walk1.jpeg',
            img: './walk1.jpeg',
            id: 'kjhkj41kj34hk1j32',
            distance: 5,
            index: 0,
            center: [-0.08781973470775029, 50.88061850335157],
            coordinateArray: [  [-0.087305, 50.861966],
            [-0.087767, 50.862192],
            [-0.088406, 50.863388],
            [-0.090415, 50.86353],
            [-0.09382, 50.86191],
            [-0.094887, 50.863522],
            [-0.097866, 50.865077],
            [-0.101194, 50.866847],
            [-0.101251, 50.869075],
            [-0.102085, 50.870559],
            [-0.102396, 50.873806],
            [-0.100748, 50.881361],
            [-0.100148, 50.884316],
            [-0.095066, 50.887123],
            [-0.09071, 50.891505],
            [-0.097029, 50.898539],
            [-0.10414, 50.900723],
            [-0.106738, 50.901782],
            [-0.105025, 50.900991],
            [-0.09976, 50.899455],
            [-0.091236, 50.899715],
            [-0.078377, 50.898458],
            [-0.069848, 50.897245],
            [-0.072141, 50.881828],
            [-0.077448, 50.877548],
            [-0.081315, 50.869934],
            [-0.076902, 50.865718],
            [-0.081207, 50.864111],
            [-0.08328, 50.863654],
            [-0.08615, 50.863442],
            [-0.088025, 50.86223],
            [-0.087305, 50.861966],
            ]
         },
         {
            name: "Isaacs Walk",
            time: "3 hour",
            icons: ["viewpoint", "coffee-shop", "dog-friendly"],
            description: "This is a route description",
            map: './walk2.jpeg',
            img: './walk2.jpeg',
            id:'1nkhkjh1324',
            index: 1,
            center: [-0.0476734070070961, 50.846183163603456],
            distance: 10,
            coordinateArray: [[-0.07111, 50.840358],
            [-0.075121, 50.840251],
            [-0.064682, 50.847759],
            [-0.053361, 50.850427],
            [-0.042812, 50.854196],
            [-0.039294, 50.855327],
            [-0.035777, 50.855919],
            [-0.029601, 50.858949],
            [-0.024713, 50.85624],
            [-0.022427, 50.856823],
            [-0.023965, 50.856087],
            [-0.028397, 50.857842],
            [-0.034037, 50.856623],
            [-0.035392, 50.855004],
            [-0.034141, 50.852739],
            [-0.031348, 50.850585],
            [-0.034275, 50.84951],
            [-0.036711, 50.846782],
            [-0.039016, 50.844792],
            [-0.038035, 50.842752],
            [-0.043029, 50.838316],
            [-0.045507, 50.835336],
            [-0.050338, 50.83342],
            [-0.053225, 50.834549],
            [-0.052652, 50.83566],
            [-0.047568, 50.83785],
            [-0.051146, 50.840347],
            [-0.055415, 50.841772],
            [-0.065335, 50.840973],
            [-0.06985, 50.841218],
            [-0.075121, 50.840251],
            [-0.07111, 50.840358]]
         },
         {
            name: "Samis Walk",
            time: "2 hour",
            icons: ["dog-friendly", "viewpoint", "toilets"],
            description: "This is a route description",
            map: './walk3.jpeg',
            img: './walk3.jpeg',
            highlightimages: ['./walk4', './walk4'],
            id: 'kh4kj132hk4jh12k41',
            distance: 21,
            index: 2,
            coordinateArray: [ [ -0.11938, 50.873169 ], [ -0.119358, 50.873362 ], [ -0.11929, 50.873521 ], [ -0.119366, 50.873581 ], [ -0.11932, 50.873679 ], [ -0.119329, 50.873751 ], [ -0.118883, 50.874165 ], [ -0.118708, 50.874287 ], [ -0.118576, 50.874313 ], [ -0.118312, 50.874175 ], [ -0.11825, 50.874235 ], [ -0.118357, 50.875227 ], [ -0.118425, 50.875522 ], [ -0.118512, 50.875897 ], [ -0.118684, 50.87632 ], [ -0.118841, 50.87663 ], [ -0.118985, 50.877086 ], [ -0.119195, 50.877453 ], [ -0.119252, 50.877475 ], [ -0.119359, 50.87763 ], [ -0.119387, 50.877699 ], [ -0.119401, 50.87774 ], [ -0.119642, 50.877858 ], [ -0.119877, 50.878217 ], [ -0.119941, 50.878461 ], [ -0.120274, 50.879571 ], [ -0.120853, 50.881277 ], [ -0.121401, 50.881541 ], [ -0.121592, 50.881559 ], [ -0.12155, 50.881272 ], [ -0.121592, 50.881559 ], [ -0.121657, 50.881549 ], [ -0.121657, 50.881549 ], [ -0.124341, 50.881161 ], [ -0.125586, 50.88103 ], [ -0.125746, 50.881041 ], [ -0.126165, 50.881269 ], [ -0.126507, 50.881623 ], [ -0.126701, 50.882013 ], [ -0.126771, 50.88231 ], [ -0.126809, 50.882981 ], [ -0.126777, 50.883833 ], [ -0.126777, 50.883833 ], [ -0.126779, 50.883891 ], [ -0.127013, 50.884132 ], [ -0.130049, 50.884928 ], [ -0.130687, 50.884958 ], [ -0.13022, 50.885483 ], [ -0.130092, 50.885709 ], [ -0.130015, 50.886561 ], [ -0.129942, 50.887374 ], [ -0.129964, 50.887442 ], [ -0.130027, 50.887638 ], [ -0.130778, 50.888213 ], [ -0.130993, 50.888293 ], [ -0.13139, 50.888345 ], [ -0.131846, 50.888437 ], [ -0.131897, 50.888447 ], [ -0.132416, 50.888604 ], [ -0.132804, 50.888732 ], [ -0.132942, 50.888762 ], [ -0.133762, 50.888791 ], [ -0.133918, 50.888802 ], [ -0.133975, 50.888805 ], [ -0.134532, 50.888844 ], [ -0.136274, 50.889177 ], [ -0.136505, 50.889277 ], [ -0.136623, 50.889412 ], [ -0.137255, 50.890061 ], [ -0.137205, 50.89021 ], [ -0.137288, 50.890273 ], [ -0.137386, 50.890276 ], [ -0.137582, 50.890176 ], [ -0.13831, 50.889966 ], [ -0.138749, 50.889881 ], [ -0.138887, 50.889924 ], [ -0.139765, 50.890503 ], [ -0.14102, 50.891447 ], [ -0.139982, 50.893076 ], [ -0.140055, 50.893155 ], [ -0.142561, 50.89361 ], [ -0.14259, 50.89414 ], [ -0.142396, 50.895267 ], [ -0.142442, 50.895539 ], [ -0.142309, 50.895784 ], [ -0.141066, 50.89702 ], [ -0.140723, 50.897444 ], [ -0.140719, 50.897567 ], [ -0.14079, 50.897695 ], [ -0.14086, 50.897748 ], [ -0.141953, 50.898203 ], [ -0.143428, 50.899111 ], [ -0.144276, 50.899741 ], [ -0.14457, 50.89996 ], [ -0.1448, 50.900444 ], [ -0.142145, 50.900456 ], [ -0.139403, 50.900497 ], [ -0.137212, 50.900574 ], [ -0.137127, 50.900593 ], [ -0.137113, 50.90105 ], [ -0.136921, 50.901442 ], [ -0.136876, 50.901467 ], [ -0.136261, 50.901315 ], [ -0.134753, 50.900882 ], [ -0.133867, 50.900672 ], [ -0.131957, 50.900402 ], [ -0.131736, 50.900377 ], [ -0.131233, 50.900396 ], [ -0.130982, 50.900433 ], [ -0.13087, 50.900453 ], [ -0.130788, 50.900469 ], [ -0.130673, 50.900472 ], [ -0.129784, 50.900576 ], [ -0.129348, 50.900627 ], [ -0.128402, 50.900776 ], [ -0.127018, 50.901103 ], [ -0.125707, 50.901452 ], [ -0.124759, 50.901797 ], [ -0.123535, 50.902195 ], [ -0.122771, 50.902384 ], [ -0.122303, 50.902409 ], [ -0.121533, 50.902449 ], [ -0.120742, 50.902425 ], [ -0.120189, 50.902311 ], [ -0.119687, 50.902265 ], [ -0.119489, 50.902307 ], [ -0.119322, 50.902386 ], [ -0.116836, 50.902814 ], [ -0.115661, 50.902996 ], [ -0.114317, 50.903092 ], [ -0.113175, 50.903081 ], [ -0.112322, 50.90329 ], [ -0.111192, 50.903497 ], [ -0.110262, 50.903617 ], [ -0.110461, 50.903746 ], [ -0.110798, 50.903833 ], [ -0.1113, 50.903857 ], [ -0.110798, 50.903833 ], [ -0.110461, 50.903746 ], [ -0.110262, 50.903617 ], [ -0.110248, 50.903575 ], [ -0.109384, 50.903239 ], [ -0.109167, 50.902824 ], [ -0.109312, 50.902654 ], [ -0.10845, 50.902485 ], [ -0.108089, 50.902374 ], [ -0.107406, 50.902097 ], [ -0.107627, 50.901716 ], [ -0.107568, 50.901705 ], [ -0.107455, 50.901715 ], [ -0.106876, 50.901769 ], [ -0.106738, 50.901782 ], [ -0.106481, 50.901643 ], [ -0.106197, 50.901497 ], [ -0.105874, 50.901448 ], [ -0.105269, 50.901201 ], [ -0.104765, 50.900998 ], [ -0.104698, 50.900925 ], [ -0.104737, 50.900849 ], [ -0.104738, 50.900808 ], [ -0.104614, 50.900737 ], [ -0.1045, 50.900739 ], [ -0.10414, 50.900723 ], [ -0.103726, 50.900653 ], [ -0.103466, 50.900564 ], [ -0.102816, 50.900314 ], [ -0.09976, 50.899455 ], [ -0.098636, 50.899287 ], [ -0.097995, 50.899246 ], [ -0.097828, 50.899233 ], [ -0.09762, 50.899178 ], [ -0.097668, 50.898963 ], [ -0.097432, 50.898838 ], [ -0.097029, 50.898539 ], [ -0.095861, 50.897595 ], [ -0.095713, 50.897476 ], [ -0.095119, 50.896927 ], [ -0.093873, 50.89594 ], [ -0.093592, 50.895596 ], [ -0.092905, 50.894301 ], [ -0.092245, 50.893563 ], [ -0.091117, 50.892362 ], [ -0.090759, 50.891907 ], [ -0.090702, 50.891715 ], [ -0.09071, 50.891505 ], [ -0.090752, 50.891313 ], [ -0.090948, 50.890809 ], [ -0.091247, 50.890307 ], [ -0.091313, 50.890088 ], [ -0.09135, 50.889555 ], [ -0.092259, 50.888956 ], [ -0.092746, 50.888574 ], [ -0.09339, 50.887985 ], [ -0.093646, 50.887803 ], [ -0.094626, 50.887284 ], [ -0.095066, 50.887123 ], [ -0.095895, 50.887036 ], [ -0.096749, 50.88699 ], [ -0.097144, 50.886903 ], [ -0.0974, 50.886778 ], [ -0.097913, 50.886467 ], [ -0.098404, 50.886087 ], [ -0.09861, 50.886036 ], [ -0.099877, 50.884705 ], [ -0.099961, 50.884572 ], [ -0.099995, 50.884399 ], [ -0.100148, 50.884316 ], [ -0.100202, 50.884159 ], [ -0.100425, 50.88391 ], [ -0.100744, 50.88346 ], [ -0.10091, 50.883153 ], [ -0.100937, 50.882964 ], [ -0.100765, 50.882473 ], [ -0.100773, 50.882365 ], [ -0.100759, 50.882317 ], [ -0.100557, 50.88165 ], [ -0.100689, 50.881398 ], [ -0.100748, 50.881361 ], [ -0.100781, 50.881249 ], [ -0.100893, 50.881149 ], [ -0.101038, 50.881084 ], [ -0.101238, 50.880971 ], [ -0.101473, 50.880779 ], [ -0.101418, 50.880734 ], [ -0.101418, 50.880734 ], [ -0.101993, 50.880064 ], [ -0.103023, 50.879002 ], [ -0.103406, 50.878561 ], [ -0.103527, 50.875543 ], [ -0.103627, 50.875454 ], [ -0.103234, 50.874986 ], [ -0.102396, 50.873806 ], [ -0.101936, 50.873162 ], [ -0.101871, 50.873008 ], [ -0.101906, 50.872944 ], [ -0.102424, 50.87298 ], [ -0.102923, 50.872935 ], [ -0.103403, 50.872819 ], [ -0.10353, 50.872796 ], [ -0.1047, 50.872453 ], [ -0.105154, 50.87241 ], [ -0.105738, 50.87241 ], [ -0.106123, 50.872443 ], [ -0.106674, 50.872491 ], [ -0.107612, 50.87266 ], [ -0.108613, 50.8728 ], [ -0.1112, 50.873211 ], [ -0.11123, 50.873066 ], [ -0.111469, 50.873104 ], [ -0.112232, 50.873313 ], [ -0.112922, 50.873602 ], [ -0.113167, 50.873669 ], [ -0.113239, 50.87383 ], [ -0.113239, 50.87383 ], [ -0.113248, 50.873851 ], [ -0.113387, 50.873896 ], [ -0.113432, 50.87386 ], [ -0.114138, 50.874 ], [ -0.11499, 50.874131 ], [ -0.115168, 50.874123 ], [ -0.115524, 50.874149 ], [ -0.115741, 50.87415 ], [ -0.115903, 50.874102 ], [ -0.115995, 50.874109 ], [ -0.116456, 50.874043 ], [ -0.116613, 50.873967 ], [ -0.116644, 50.873977 ], [ -0.116644, 50.873977 ], [ -0.116746, 50.874011 ], [ -0.116793, 50.874026 ], [ -0.116875, 50.873984 ], [ -0.117792, 50.87348 ], [ -0.118122, 50.873342 ], [ -0.118282, 50.873331 ], [ -0.118768, 50.873282 ], [ -0.119056, 50.873208 ], [ -0.119348, 50.873061 ], [ -0.119391, 50.873078 ], [ -0.11938, 50.873169 ] ],
            location: 'Hackney',
            center: [-0.11496219739061075, 50.89077919647434]
         }
    ]


    function onClickSetRoute(id) {
        setActiveRoute(id)
    }

    /*useEffect(() => {
        const fetchRoutes = async () => {
    
          const { data, error } = await supabase
            .from('walks')
            .select()
          
          if (data) {
            console.table(data)
            setAllRoutes(data)
          }
        }
    
        fetchRoutes()
    
      }, [])*/

    useEffect(() => {
        console.log(location);

    },[location]
    )

    return (
        <div className="explore-page">
            <div className="map-section">
                <div className="left-hand-map-panel"> 
                    <Search setLocation={setLocation}/>
                    <div className="route-cards">
                    {routeDetailArray.map((route)=> <RouteDetailCard onClick={onClickSetRoute} key={route.id} {...route}/>)}
                    </div>
                </div>
                <MapDisplay routeDetailArray={routeDetailArray} activeRoute={activeRoute} />
            </div>
            <RouteDetailDropdown {...routeDetailArray[activeRoute]}/>
        </div>
    )
}

/* 
This is the main page for the explore page. 
It contains the search bar and the route cards in a panel on the left hand side. 
Then it shows the map display on the right hand side.
*/