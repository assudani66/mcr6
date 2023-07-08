"use client"

import { restaurantsData } from "@/data"
import React, { PropsWithChildren, createContext, useContext, useReducer } from "react"


    type stateType = typeof restaurantsData

    type actionType = {
        type : 'ADD_REVIEW'
        payload : {
            resturantId : number
            rating: {
                rating: number;
                comment: string;
                revName: string;
                pp: string;
            };
        }
    }

    type contextProp = {   
        foodState:stateType;
        foodDataDispatch: React.Dispatch<actionType>
    }

export const foodDataContext = createContext<contextProp>({} as contextProp)

export const FoodDataContextProvider = ({children}:PropsWithChildren) => {

    const foodDataReducer = (state:stateType,action:actionType) => {
        switch (action.type) {
            case 'ADD_REVIEW':
               const updatedState:stateType = state.map((resturantInfo)=>resturantInfo.id === action.payload.resturantId ? {...resturantInfo,ratings:[...resturantInfo.ratings,action.payload.rating]}: resturantInfo)
                return updatedState
            default:
                return state
        }
    }

    const [foodState,foodDataDispatch] = useReducer(foodDataReducer,restaurantsData)

    return<foodDataContext.Provider value={{foodState,foodDataDispatch}}>
        {children}
    </foodDataContext.Provider>
}


export const useFoodData = () => useContext(foodDataContext)