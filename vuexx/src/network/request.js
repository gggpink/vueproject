import axios from "axios"
//封装

export function request(config, success, failure) {
    const instance1 = axios.create({
        baseURL: "https://www.easy-mock.com/mock/5d2add1f96e5313657587c41/mianshui/",
        timeout: 5000
    });


    instance1.interceptors.request.use(function (config) {
        // console.log(config);
        return config
    }, function (err) {

    })

    instance1.interceptors.response.use(function (res) {
        console.log(res.data)
        return res.data
    }, function (err) {

    })

    instance1(config).then(function (res) {
        success(res)
    }).catch(function (err) {
        failure(err)
    })
}
// export function request2(){
//     const instance1 = axios.create({
//         baseURL:" https://www.easy-mock.com/mock/5d25683113ccb16c52fa94f2/getmovie/",
//         timeout:5000
//     })

//     instance1({
//         url:"top"
//     }).then(function(res){
//         console.log(res)
//     }).catch(function(err){
//         console.log(err)
//     })
// }
// export function request3(){
//     const instance1 = axios.create({
//         baseURL:" https://www.easy-mock.com/mock/5d25683113ccb16c52fa94f2/getmovie/",
//         timeout:5000
//     })

//     instance1({
//         url:"reying"
//     }).then(function(res){
//         console.log(res)
//     }).catch(function(err){
//         console.log(err)
//     })
// }

