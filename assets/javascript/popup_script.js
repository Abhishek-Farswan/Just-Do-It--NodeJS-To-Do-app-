
//Event listener for Add button in homepage to open popup screen
document.querySelector("#head-addTask-button").addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

//Event listener to close popup screen
document.querySelector("#icon-close").addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

