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
        getPokemonList: builder.query({
            /* Prácticamente, tomamos la baseURL y concatenamos /pokemonList */
            query: () => 'pokemon?limit=20&offset=0'
        }),
        getPokemonById: builder.query({
            /* Prácticamente, tomamos la baseURL y concatenamos /pokemonList */
            query: (pokemonId) => `pokemon/${pokemonId}`
        }),
    })

})

/* Lo que estamos regresando */
export const { useGetPokemonListQuery, useGetPokemonByIdQuery } = pokeApi