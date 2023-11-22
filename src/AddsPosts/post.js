let liElements = document.getElementsByTagName('li')


let image = document.getElementById('image')
let input = document.getElementById('upload-files')

input.onchange = function(){
    image.src = URL.createObjectURL(input.files[0])
}
    


 function hideLi(){
    
 }