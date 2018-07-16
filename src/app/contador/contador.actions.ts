import { Action } from '@ngrx/store';

export enum CounterActionType {
    INCREMENTAR = '[Contador] Incrementar',
    DECREMENTAR = '[Contador] Decrementar',
    MULTIPLICAR = '[Contador] Multiplicar',
    DIVIDIR = '[Contador] Dividir',
    RESET = '[Contador] Reset'
}

export class IncrementarAction implements Action {
    readonly type = CounterActionType.INCREMENTAR;
}

export class DecrementarAction implements Action {
    readonly type = CounterActionType.DECREMENTAR;
}

export class MultiplicarAction implements Action {
    readonly type = CounterActionType.MULTIPLICAR;

    constructor( public payload: number) {}
}

export class DividirAction implements Action {
    readonly type = CounterActionType.DIVIDIR;

    constructor( public payload: number) {}
}

export class ResetAction implements Action {
    readonly type = CounterActionType.RESET;
}

export type actions =   IncrementarAction   |
                        DecrementarAction   |
                        MultiplicarAction   |
                        DividirAction       |
                        ResetAction;

