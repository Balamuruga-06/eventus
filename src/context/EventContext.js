import React,{useState,useContext,useEffect} from 'react';
import axios from 'axios'
import {AuthContext} from './AuthContext'

export const EventContext = React.createContext();


export default EventProvider =  ({children}) => {

    const baseURL = "https://api.predicthq.com/v1/events/"

    const {ngrokURL,mail} = useContext(AuthContext);

    const name ="bala"

    const Events = []

    const [EventDetails,setEventDetails] = useState([]);

    const [wishDetails,setwishDetails] = useState([]);

    

    const getEvents = () => {
        axios.get(`${baseURL}`,{
            headers:{
                Authorization : "Bearer U-ONAz9SMBXj05ceXcKBkbVRp9yQp8AY9VXUMa3c"
            },
            params:{
                "place.scope":"CJB",
                
                //"category":"conferences"
            }
            })
            .then((response)=>{                
                const data = response.data.results
                data.map((item) => {
                    const id = item.id;
                    const title = item.title;
                    const description = item.description;
                    const location = item.location;
                    const date = item.start;
                    
                    const EventData = {
                        id,
                        title,
                        description,
                        location,
                        date
                    }
                    Events.push(EventData);

                })
                                
                setEventDetails(Events);

                // console.log('event array: ', Events)
            })
            .catch(err => {
                console.log("--------------------------------------------------------------")
                console.log('Event data errors' , err);
            })

            
    }

    const addWish = (data) => {
        axios.post(`${ngrokURL}/wishlist/${mail}`,data)
             .then((res) => {
                 console.log("add wisg",res.data.msg)
                 getWish()
             })
             .catch(err => {
                console.log("--------------------------------------------------------------")
                console.log('add wishlist data errors' , err);
            })
    }

    const getWish = () => {        
        axios.get(`${ngrokURL}/wishlist/${mail}`)
             .then((res) => {                 
                 setwishDetails(res.data.wishlistDetails)
             })
    }

    const delewish = itemid => {
        console.log('itemid: ', itemid)
        console.log('mail: ', mail)
        axios.delete(`${ngrokURL}/delewish/${mail}/${itemid}`)        
             .then((res) => {
                 console.log(res.data.msg)
                 getWish()
             })
             .catch((err) => {
                 console.log('err in delete wish eventconrtext: ', err)
                 console.log('err in delete wish eventconrtext: ', err.msg)
             })

    }

    useEffect(()=>{
        
        getEvents();
        getWish()

    },[])



    return (  
        <EventContext.Provider value={{EventDetails,setEventDetails,getEvents,Events, name,addWish,getWish,wishDetails,setwishDetails,delewish}}>
            {children}
        </EventContext.Provider>
    )
}
