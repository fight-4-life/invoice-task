export const getAvatar = (state) => {
    return state.auth.avatar_url
}

export const getLogin = (state) => {
    return state.auth.login
}

export const getBuyerData = (state) => {
    return state.buyers.buyer
}
