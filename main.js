const abc=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","U","V","W","X","Y","Z"];
const n=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let position=0;
let codeList=[];
let codeListInLetters=[];
let message="";
let encryptedMessage="";
const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const hasNumber = /\d/;

function code(type) {
	initialPosition=parseInt(document.getElementById("movements").value);
	position=initialPosition;
	encryptedMessage="";

	for(i=0;i<n.length;i++){
		if (position>n.length-1) {
			position=0;
			codeList[i]=n[position];
			position++;
		}
		else{
			codeList[i]=n[position];
			position++;
		}
	}

	for(i=0;i<codeList.length;i++){
		codeListInLetters[i]=abc[codeList[i]];
	}

	message=document.getElementById("message").value;

	message=message.toUpperCase();

	for(letter in message){
		
		if (message.charAt(letter)==" " || hasSymbol.test(message.charAt(letter))==true || hasNumber.test(message.charAt(letter))==true){
			encryptedMessage=encryptedMessage+message.charAt(letter);
		}
		else{
			if (type=="cypher") {
				for (i=0;i<codeListInLetters.length;i++){
					if (message.charAt(letter)==abc[i]) {
						encryptedMessage=encryptedMessage+codeListInLetters[i];
					}
				}
			} 
			else if(type=="decypher"){
				for(i=0;i<codeList.length;i++){
					if(message.charAt(letter)==codeListInLetters[i]){
						encryptedMessage=encryptedMessage+abc[i];
					}
				}
			}		
		}
		
	}

	document.getElementById("result").innerHTML='<b style="text-weight:bold;font-size:1.5em;display:block;margin-bottom:0.25em;margin-top:0.25em;">SU MENSAJE ES:</b><br><p id="resultMessage">'+encryptedMessage+'</p>';
}