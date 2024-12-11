document.getElementById("button").addEventListener('click',()=>{
    const n=document.getElementById('name').value.trim();
    if(n.length>25)
    {
        alert("enter correct");
        return;
        
    }
    alert("succsful");
}
);