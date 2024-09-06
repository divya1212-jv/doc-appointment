const firebaseConfig = {
    apiKey: "AIzaSyDGQEkabBRIbfg4b_QmAczsaAsqpqAtxQw",
    authDomain: "hmsback-72e85.firebaseapp.com",
    databaseURL: "https://hmsback-72e85-default-rtdb.firebaseio.com",
    projectId: "hmsback-72e85",
    storageBucket: "hmsback-72e85.appspot.com",
    messagingSenderId: "911520391009",
    appId: "1:911520391009:web:fb972180d8fed29e24af20"
  };
  firebase.initializeApp(firebaseConfig);
  var hmsbackDB=firebase.database().ref("contactform");
  document.getElementById('contactform').addEventListener("submit",submitform);

  function submitform(e){
   e.preventDefault();

   var name=getElementVal('name');
   var name=getElementVal('gender');      
   var name=getElementVal('address');    
   var name=getElementVal('number');       
   var name=getElementVal('docu-id');      
   
   console.log(name,gender,address,number,docu-id);
  }
  const getElementVal=(id)=>{
    return document.getElementById(id).value;

  };