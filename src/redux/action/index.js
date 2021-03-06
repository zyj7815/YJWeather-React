import * as types from './action-type'

export function setWeatherData (dataSource) {
    return {
        type: types.WEATHER_DATA,
        dataSource
    }
}

export function setAirData (air) {
    return {
        type: types.AIR_DATA,
        air
    }
}