fs=require("fs")
path=require("path")

let a="FSD-mern/path.txt"
b=path.dirname(a)
c=path.basename(a)
fs.mkdir(b,function()
{
    console.log("Folder crated")
})
fs.writeFile(a,"Hello",function()
{
    console.log("File Write")
})
fs.copyFile(a,b+"/pqr.txt",function()
{
    console.log("File copy")
})
fs.unlink(a,function()
{
    console.log("file Remove")
})