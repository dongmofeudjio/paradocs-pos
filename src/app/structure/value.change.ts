/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * structure of some value when changes
 *
 * **/
export interface ValueChange<T>{
    oldValue ?: T,
    newValue : T
}