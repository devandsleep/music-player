import axios from "axios";

export default class MusicService {

    static async getTrending() {
        const response = await axios.get('http://localhost:3001/music/', { withCredentials: true })
        return response.data;
    }

    static async getRelease(release_id) {
        const release = await axios.get(`http://localhost:3001/releases/release/${release_id + 2}`)
        return release.data;
    }

}