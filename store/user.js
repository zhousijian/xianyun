// state用于存放soter/user用户数据
export const state = {
    userInfo : {}
}

// 给state的数据赋值的方法，mutations第一个参数必须是state
export const mutations = {
    // setUserInfo给serInfo赋值的
    setUserInfo(state,data){
        state.userInfo = data
    }
}