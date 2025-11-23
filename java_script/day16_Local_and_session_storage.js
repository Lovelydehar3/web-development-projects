//////local storage -> browser ke andar data store krna broswer ke band honepe delete nhi hota
//////sesssion storage->temprary data store krta hai broswer band data gaya bhai 
//////cookies -> ye vi store krta hai data broswer ke andar cookies ke andar hota hai data
//////cookies only soft ja khe chotta data store krta hai 



// /////localStorage
//////how  to store
///// how to fetch
/////remove kaise kre
/////update kaise kre 
localStorage.setItem("Procoderr","LovelyDehar");
let loc1=localStorage.getItem("Procoder");
// localStorage.removeItem("Procoder","LovelyDehar")
localStorage.setItem("Procoder","Lovely___Dehar");
let loc2=localStorage.getItem("Procoder");

////its only save string baby by default
///// so we use Json

/////// so we can change arrray into string
localStorage.setItem("Friends",JSON.stringify(["lovely","pendulam","The A.D.3","Procoder"]));
let var1=localStorage.getItem("Friends");
var1
'["lovely","pendulam","The A.D.3","Procoder"]'
JSON.parse(var1);
localStorage.setItem("Friendship",JSON.stringify(["lovely","pendulam","The A.D.3","Procoder"]))

let fr = JSON.parse(localStorage.getItem("Friendship"));
console.log(fr);


/////// sessionStorage(for browser)
// ///sessionStorage.setItem("its me ","pendulam");
// ///////undefined
////////////// sessionStorage
// Storage {"its me ": 'pendulam', __darkreader__wasEnabledForHost: 'true', length: 2}
// ///////let vr=sessionStorage.getItem("its me ","pendulam");
// ///////undefined
// ///////vr
// ///////'pendulam'

///////////sessionStorage
///////////Storage {"its me ": 'pendulam', __darkreader__wasEnabledForHost: 'true', length: 2}
///////////sessionStorage.removeItemItem("its me ","pendulam");
///////////u
///////////VM1318:1 Uncaught TypeError: sessionStorage.removeItemItem is not a function
    ///////////at <anonymous>:1:16
///////////(anonymous) @ VM1318:1Understand this error
///////////sessionStorage.removeItem("its me ","pendulam");

///////////undefined
///////////sessionStorage

/////for  example
////////cookies~ 4kb
//////local and session5 mb
/////////document.cookie="age=26"
///////////'age=26'
