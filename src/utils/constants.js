const GOOGLE_API_KEY = "AIzaSyA_qNJqUWUY1JP3zrHTmJvdMqRHC6vIhrY";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
