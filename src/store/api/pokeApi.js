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
        getPokemon: builder.query({
            /* Practicamentem, tomamos la baseURL y concatenamos /pokemonList */
            query: () => '/pokemon'
        })
    })

})

/* Lo que estamos regresando */
export const { useGetPokemonQuery } = pokeApi