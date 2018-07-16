import { actions, CounterActionType} from './contador.actions';

export function contadorReducer( state: number = 10, action: actions) {
    switch ( action.type ) {
        case CounterActionType.INCREMENTAR:
            return state + 1;
        case CounterActionType.DECREMENTAR:
            return state - 1;
        case CounterActionType.MULTIPLICAR:
            return state * action.payload;
        case CounterActionType.DIVIDIR:
            return state   / action.payload;
        case CounterActionType.RESET:
            return state = 0;
        default:
            return state;
    }
}
