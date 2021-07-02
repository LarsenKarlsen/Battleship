const Ship = (length, orientation) => {
    let shipState = new Array(length).fill('s')
    orientation = 'horizontal'
    
    const sunk = (shipState)=>{
        return !shipState.includes('s')
    }
    
    const hit = (index) => {
        shipState[index] = 'x'
    }

    const changeOrientation = () => {
        if (orientation === 'horizontal'){
            orientation = 'vertical'
        } else {
            orientation = 'horizontal'
        }
    }

    const getState = () => {
        return {"length": length,
                "shipState": shipState,
                "orientation": orientation,
                "sunk": sunk(shipState)}
    }

    return {getState, hit, changeOrientation}
}

module.exports = Ship