var passport=require("passport");module.exports={login:function(e,s){s.view()},process:function(e,s){passport.authenticate("local",function(o,n,t){if(o||!n){return s.send({message:"login failed"});s.send(o)}e.logIn(n,function(o){return o&&s.send(o),console.log(e.session.passport.user),s.view("index")})})(e,s)},logout:function(e,s){e.logout(),s.send("logout successful")},create:function(e,s){console.log("User created",e.session),s.redirect("/")}},module.exports.blueprints={actions:!0,rest:!0,shortcuts:!0};