import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeApi = createApi({

    /* Nombre */
    reducerPath: 'pokeApi',

    /* BaseURL */
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),

    /* Endpoints (actions) */
    endpoints: (builder) => ({
        getPokemonById: builder.query({
            /* Prácticamente, tomamos la baseURL y concatenamos /pokemon/${id} */
            query: (pokemonId) => `pokemon/${pokemonId}`
        })
    })

})

/* Lo que estamos regresando */
export const { useGetPokemonByIdQuery } = pokeApi