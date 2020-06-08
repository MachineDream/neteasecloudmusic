import http from '../http/http'

export default {
    test(url,data){
        return http.get(url,data)
    }
}