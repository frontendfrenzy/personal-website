const emailcontent = document.getElementById('emailcontent');
emailcontent.addEventListener('click',function(event){
    if( event.target !== "string"){
        alert('Email was succesfully submitted');
    }
})