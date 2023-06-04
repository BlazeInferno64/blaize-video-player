const video = document.getElementById("video");
const file = document.getElementById("thefile");
const uploadBox = document.querySelector(".upload-box");
const field = document.querySelector(".field");
const btn = document.getElementById("btn");

uploadBox.addEventListener('click',(e)=>{
    file.click();
});

file.onchange = function(){
    var files = this.files;
    video.src = URL.createObjectURL(files[0]);
    video.load();
    video.play();
    var filename = file.files[0].name;
    console.log("Now Playing : "+filename);
}

btn.onclick = function(){
    video.src = `${field.value}`;
    //alert(`${field.value}`);
}