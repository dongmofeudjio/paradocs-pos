/**
 * @author : Dongmo Feudjio
 * 
 * application environment model
 *
 * **/
 export interface PosEnvironment {
    production: boolean
    api : {
        url : {
            category : string
            product : string
        }
    }
}