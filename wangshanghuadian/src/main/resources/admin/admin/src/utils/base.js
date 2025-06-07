const base = {
    get() {
        return {
            url : "http://localhost:8080/wangshanghuadian/",
            name: "wangshanghuadian",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/wangshanghuadian/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "网上花店微信小程序"
        } 
    }
}
export default base
