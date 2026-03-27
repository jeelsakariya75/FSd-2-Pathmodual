path=require("path")
a=path.dirname("D:5019/modual/pathmodual/abc.html")
console.log(a)
b=path.basename("D:5019/modual/pathmodual/abc.html")
console.log(b)
c=path.extname("D:5019/modual/pathmodual/abc.html")
console.log(c)
d=path.parse("D:5019/modual/pathmodual/abc.html")
console.log(d)
if(d.ext==".html")
    {console.log("F is html")}
else
{
    console.log("file is not html")
}