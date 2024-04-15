function add()
{
    var x=document.getElementById("input1").value
var y=document.getElementById("input2").value
var result=parseInt(x)+parseInt(y)
document.getElementById("output").value=result
}
function sub()
{
    var x=document.getElementById("input1").value
var y=document.getElementById("input2").value
var result=parseInt(x)-parseInt(y)
document.getElementById("output").value=result
}
function div()
{
    var x=document.getElementById("input1").value
var y=document.getElementById("input2").value
var result=parseInt(x)/parseInt(y)
document.getElementById("output").value=result
}
function mul()
{
    var x=document.getElementById("input1").value
var y=document.getElementById("input2").value
var result=parseInt(x)*parseInt(y)
document.getElementById("output").value=result
}
function clr()
{
    var x=document.getElementById("input1").value=null
var y=document.getElementById("input2").value=null

document.getElementById("output").value=null
}