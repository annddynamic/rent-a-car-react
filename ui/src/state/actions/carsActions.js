export const setCars = (cars) =>{
    return {
        type:'SETCARS',
        payload: cars
    }
}

export const unsetCars = () =>{
    return {
        type:'UNSETCARS',
    }
}