import { createContext, useContext, useReducer, useMemo } from 'react';

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            const exists = state.items.find(item => item.id === action.payload.id);
            if (exists) {
                return state;
            }
            return {
                ...state,
                items: [...state.items, action.payload]
            };

        case 'REMOVE_FAVORITE':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };

        case 'TOGGLE_FAVORITE':
            const isFavorite = state.items.find(item => item.id === action.payload.id);
            if (isFavorite) {
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload.id)
                };
            }
            return {
                ...state,
                items: [...state.items, action.payload]
            };

        default:
            return state;
    }
};

export const FavoritesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(favoritesReducer, { items: [] });

    const contextValue = useMemo(() => ({
        favorites: state,
        dispatch,
        addFavorite: (product) => dispatch({ type: 'ADD_FAVORITE', payload: product }),
        removeFavorite: (productId) => dispatch({ type: 'REMOVE_FAVORITE', payload: { id: productId } }),
        toggleFavorite: (product) => dispatch({ type: 'TOGGLE_FAVORITE', payload: product }),
        isFavorite: (productId) => state.items.some(item => item.id === productId),
        getFavoriteCount: () => state.items.length
    }), [state]);

    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within FavoritesProvider');
    }
    return context;
};