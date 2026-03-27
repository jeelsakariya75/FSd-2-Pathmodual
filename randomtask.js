// fs=require("fs")
// fs.writeFileSync("hello.txt","Good day")
// fs.appendFileSync("hello.txt","IS it?")
// fs.copyFileSync("hello.txt","hi.txt")
// a=fs.readFileSync("hi.txt","utf-8")
// console.log(a)

fs=require("fs")

fs.writeFile("h1.txt","Good day",function(err)
{
    if(err) throw err
    console.log("write file")
})
fs.appendFile("h1.txt","Is It?",function(err)
{
    if(err) throw err
    console.log("append file")
})
fs.copyFile("h1.txt","h2.txt",function(err)
{
    if(err) throw err
    console.log("copy file")
})
fs.readFile("h2.txt",function(err)
{
    if(err) throw err
    console.log("Read File")
})