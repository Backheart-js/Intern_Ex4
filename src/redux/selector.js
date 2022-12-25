export const dataSelector = (state) => {
    return state.data;
}

export const locationSelector = (state) => {
    return state.data.location;
}

export const forecastSelector = (state) => {
    return state.data.forecast;
}

export const currentforecastSelector = (state) => {
    return state.data.current;
}

export const filterSelector = (state) => {
    return state.filter;
}