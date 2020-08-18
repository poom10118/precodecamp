
function changeColor() {
    // alert("alert from changeColor")
    // let acolor = document.getElementById('#in1').value
    let tcolor = document.querySelector('#in1').value
    let bcolor = document.querySelector('#in2').value
    // alert(tcolor + bcolor)
    document.querySelector('h2').style.color = tcolor
    document.querySelector('h2').style.backgroundColor = bcolor

}
