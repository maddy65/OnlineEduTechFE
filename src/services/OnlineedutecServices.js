import axios from 'axios';

const USERLIST_API_BASE_URL = "http://localhost:8080//clinckk/v1/userlist";
const COURSE_API_BASE_URL = "http://localhost:8080//api/v1/courseList";

class OnlineedutecServices{

    getUsers(){
        return axios.get(USERLIST_API_BASE_URL);
    }

    getCourses(){
        return axios.get(COURSE_API_BASE_URL);
    }

    
}

export default new OnlineedutecServices();