import axios from "axios";

export default class SearchService {

    static async getSearchTracks(title) {
        if (title !== '') {
            const response = await axios.get('http://localhost:3001/music/search/' + title, { withCredentials: true })
            return response.data;
        }
    }

    static async getSearchAuthors(name) {
        if (name !== '') {
            const response = await axios.get('http://localhost:3001/authors/search/' + name, { withCredentials: true })
            return response.data;
        }
    }

}