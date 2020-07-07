export default function reducer(state, action) {
    
        switch (action.type) {
            case "FETCH_SUCCESS":
                return {
                    isLoading: false, currentF: action.payload[0],
                    FiveDayF: action.payload[1], error: ""
                };
            case "FETCH_ERROR":
                return { ...state, error: "Fail to get data" };
            
            default:
                return state;
        }
    };
    