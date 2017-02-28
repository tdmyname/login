/**
 * Created by tanDong on 2017/2/28.
 */
const cluster=require("cluster")
const http=require("http")
const numcpus=require("os").cpus().length

console.log(numcpus)


if(cluster.isMaster){
    console.log(`master ${process.pid} is running`)
    for(let i=0;i<numcpus;i++){
        cluster.fork()
    }
    cluster.on("exit",(worker,code,signal)=>{
        console.log(`work ${worker.process.pid} died`)
    })
}else {
    http.createServer((req,res)=>{
        res.writeHead(200)
        res.end("hello word\n")
    }).listen(8000)
    console.log(`work ${process.pid} started`)
}
