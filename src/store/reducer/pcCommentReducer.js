const data = {
    list: [],
    total: 0,
    loading:false
}
function pcCommentReducer(state=data, action) {
    switch (action.type) {
        case 'LIST_LOAD':
            return {
                ...state,
                ...action.data,
                loading:true
            }
        case 'LIST_LOADING':
            return {
                ...state,
                list: [],
                total: 0,
                loading:false
            }
    }
    return state
}

export {pcCommentReducer}
