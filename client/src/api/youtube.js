import axios from "axios";


const Key = 'AIzaSyCXT0zHegNhSLlxXw_vNcZjg_QyEZmpOzg';


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: Key
    }
});

