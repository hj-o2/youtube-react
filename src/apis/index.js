import axios from "axios";

const KEY = "AIzaSyBJA5-YGG25-CzV6n7LnuyuMuJCcsBMBNg";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export const fetchPopularData = async () => {
    return await youtube.get('/videos',{
        paras: {
            part: 'snippet',
            maxResults: 40,
            key:KEY,
            type: 'video',
            chart: 'mostPopular'
        }
    })
}