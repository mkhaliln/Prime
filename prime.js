
number = 100;
var check = false;
for(i = 2; i <= number; i++){
	for(j = 2; j < i; j++){
		if (i%j == 0){
			check = false;
			break;
		}else{
			check = true;	
		}

	}
		if (check == true){
			 console.log(i);
		}
}
