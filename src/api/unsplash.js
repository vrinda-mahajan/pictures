import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:"Client-ID fSRrEBgb8YpedcSyjjL1aOKRsVCu4KjqATuGSNwsDoc" 
    }
})