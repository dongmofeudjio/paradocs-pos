/**
 * @author : Dongmo Feudjio
 * 
 * @description
 * utility to provide random string
 *
 * **/
export class RandomStringGenerator{

     /** la liste des lettres de l'alphabet **/
	protected static alphabet : string [] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","y","w","x","z","0","1","2","3","4","5","6","7","8","9"];
	
    /** pour avoir un string aléatoire **/
	static getRandomString(length : number) : string{
		let string = "";
		if(length>0){
			for(var i=1; i<=length; i++){
				var letter = this.alphabet[Math.floor(Math.random() * 35)] ; 
				var upper = Math.floor(Math.random() * 35);
				if(upper % 2 == 0) letter = letter.toUpperCase();
				string += letter ;   
			}
		}
		return string;
	}
}