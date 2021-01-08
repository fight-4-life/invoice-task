const getBuyer = (id) => ({type: GET_BUYER, id})
const GET_BUYER = 'GET_BUYER';
export const getBuyerPage = (id) => {
    return (dispatch) => {
        dispatch(getBuyer(id))
    }
}
const initialState = {
    buyers: [
        {
            key: '1',
            id: 1,
            name: 'John Brown',
            average: 983,
            count: 6,
            total: 7026,
        },
        {
            key: '2',
            id: 2,
            name: 'Jim Green',
            average: 986,
            count: 26,
            total: 8962,
        },
        {
            key: '3',
            id: 3,
            name: 'Joe Black',
            average: 9822,
            count: 9,
            total: 70262,
        },
        {
            key: '4',
            id: 4,
            name: 'Jim Red',
            average: 828,
            count: 29,
            total: 8962,
        },
        {
            key: '5',
            id: 5,
            name: 'John MacGregor',
            average: 982,
            count: 4,
            total: 70262,
        },
        {
            key: '6',
            id: 6,
            name: 'Jim Green',
            average: 982,
            count: 33,
            total: 89626,
        },
        {
            key: '7',
            id: 7,
            name: 'Joe Salam',
            average: 984,
            count: 11,
            total: 7026,
        },
        {
            key: '8',
            id: 8,
            name: 'Jim Red',
            average: 882,
            count: 59,
            total: 8943,
        },
        {
            key: '9',
            id: 9,
            name: 'John Petrosyan',
            average: 9875,
            count: 60,
            total: 7075,
        },
        {
            key: '10',
            id: 10,
            name: 'Jim Green',
            average: 982,
            count: 6,
            total: 8923,
        },
        {
            key: '11',
            id: 11,
            name: 'Joe Yakuza',
            average: 98,
            count: 9,
            total: 705,
        },
        {
            key: '12',
            id: 12,
            name: 'Jim Red',
            average: 8832,
            count: 3,
            total: 8964,
        },
        {
            key: '13',
            id: 13,
            name: 'John Tyson',
            average: 978,
            count: 2,
            total: 12370,
        },
        {
            key: '14',
            id: 14,
            name: 'Jim Dick',
            average: 298,
            count: 77,
            total: 3389,
        },
        {
            key: '15',
            id: 15,
            name: 'Jim Green',
            average: 198,
            count: 88,
            total: 989,
        },
        {
            key: '16',
            id: 16,
            name: 'Joe Black',
            average: 598,
            count: 90,
            total: 6570,
        },
        {
            key: '17',
            id: 17,
            name: 'Jim Red',
            average: 3488,
            count: 94,
            total: 4389,
        },
        {
            key: '18',
            id: 18,
            name: 'John Brown',
            average: 398,
            count: 62,
            total: 870,
        },
    ],
    buyer: {}
}

const buyersReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_BUYER:
            return {
                ...state,
                buyer: state.buyers.find(b => {
                        if (b.id === action.id) {
                            return {...b}
                        }
                    }
                )
            }
        default:
            return state
    }
}

export default buyersReducer