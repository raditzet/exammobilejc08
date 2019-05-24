import { ADD_PLACE, DELETE_PLACE, EDIT_PLACE, CREATE_DATA } from './actionTypes'

export const addPlace = placeName => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
}

// export const editPlace = (key) => {
//     return {
//         type: EDIT_PLACE,
//         placeKey: key
//     }
// }

export const createData = (items, uid) => {
    var arrData = []
        var rawData = items.val()

        Object.keys(rawData).forEach(id => {
            if(uid === rawData[id].uid) {
                arrData.push({
                    key: id,
                    value: rawData[id].name,
                    usia: rawData[id].usia,
                    jabatan: rawData[id].jabatan,
                    image: {
                        uri: "https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg"
                    }
                })
            }
        })

    return {
        type: CREATE_DATA,
        payload: arrData
    }
}





















