
import { app,conn } from "./bootstrap/index";
import { env } from "./config/index";
import router from "./router/api";


// route injection
app.use('/api/v1/', router);

app.get('/ping', function(req,res){
  res.send("pong");
});

// 404 route
app.use(function(req, res, next){
    res.error("path not found","path not found",404);
});

app.listen(env.PORT, () => {
  console.clear();
  console.log(`application running on PORT > ${env.PORT} \n`);
});