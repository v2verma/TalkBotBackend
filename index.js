var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

var socketIO = require('socket.io');

var server = require('http').createServer(app);

var solution = [{"id":"mongo",
"value":"After the analysis, I would suggest that, Mongo DB is better suited for your project!"
},{"id":"sql",
"value":"After all the questions, I suggest that SQL is better suited for your application! "}];

var data = [{
    "key":"0",
    "backid":null,
    "next":"1",
    "value":["Great! I will help you decide what kind of database is best suited for your application.",
     "How would you define the size of your application?"],
     "videos":["https://www.youtube.com/embed/rN0FrDpQNUk"],
    "options":[
        {
            "id":"mongo",
            "value":"Large"
        },
        {
            "id":"sql",
            "value":"Small"   
        }]
    },{
    "key":"1",
    "backid":"0",
    "next":"2",
    "value":["Is it a user based application or will it be corporate based?"],
    "videos":["https://www.youtube.com/embed/bGvVxk5xqNQ"],
    "options":[
        {
            "id":"mongo",
            "value":"User Based"
        },
        {
            "id":"sql",
            "value":"Corporate"   
        }]
    },
    {
        "key":"2",
        "backid":"1",
        "next":"3",
        "value":["Do you have a pre-defined structure or set schemas?"],
        "videos":["https://www.youtube.com/embed/bGvVxk5xqNQ"],
        "options":[
            {
                "id":"mongo",
                "value":"No"
            },
            {
                "id":"sql",
                "value":"Yes"   
            }]
        },{
            "key":"3",
            "backid":"2",
            "next":"4",
            "value":["Does your application require multi-row transactions, like accounting systems or systems that monitor inventory structures?"],
            "videos":["https://www.youtube.com/embed/bGvVxk5xqNQ"],
            "options":[
                {
                    "id":"mongo",
                    "value":"No"
                },
                {
                    "id":"sql",
                    "value":"Yes"   
                }]
            },
            {
                "key":"4",
                "backid":"3",
                "next":"5",
                "value":["Will you use your data for analytics?"],
                "videos":["https://www.youtube.com/embed/bGvVxk5xqNQ"],
                "options":[
                    {
                        "id":"mongo",
                        "value":"Yes"
                    },
                    {
                        "id":"sql",
                        "value":"No"   
                    }]
                },{
                    "key":"5",
                    "backid":"4",
                    "next":"6",
                    "value":["What is the cost allowance for the database in your project?"],
                    "videos":["https://www.youtube.com/embed/bGvVxk5xqNQ"],
                    "options":[
                        {
                            "id":"mongo",
                            "value":"Low"
                        },
                        {
                            "id":"sql",
                            "value":"Good"   
                        }]
                    }];
                    // var data = [
                       
//     {
//         "key":"0",
//         "back":"",
//         "value":"Good to hear. So tell me, Is it a new application or you are looking to expand an existing application?",
//         "options":[
//             {
//                 "id":"1",
//                 "value":"Existing"
//             },
//             {
//                 "id":"2",
//                 "value":"New"   
//             }]
//         },{
//             "key":"01",
//             "value":"So tell me, Is it a new application or you are looking to expand an existing application?",
//             "options":[
//                 {
//                     "id":"1",
//                     "value":"Existing"
//                 },
//                 {
//                     "id":"2",
//                     "value":"New"   
//                 }]
//             },{
//         "key":"1",
//         "back":"0",
//         "value":"Are there any existing JS technologies adopted and is there a preference to use the same?",
//         "options":[
//             {
//                 "id":"11",
//                 "value":"Yes, there is a preference!"
//             },
//             {
//                 "id":"2",
//                 "value":"No, its a new application"
//             }]
//         },{
//         "key":"2",
//         "value":"Which technologies do you want to implemented?",
//         "options":[
//             {
//                 "id":"21",
//                 "value":"JS Library",
//                 "back":"1"
//             },
//             {
//                 "id":"22",
//                 "value":"Full FrameWork",
//                 "back":"1"   
//             }]
//         },{
//         "key":"11",
//         "value":"Let me know, wheather to leverage JS Library or Full FrameWork?",
//         "options":[
//             {
//                 "id":"22",
//                 "value":"Full FrameWork",
//                 "back":"2"
//             },
//             {
//                 "id":"21",
//                 "value":"JS Library",
//                 "back":"2"   
//             }]
//         },{
//         "key":"21",
//         "value":"What is the app/project size?",
//         "options":[
//             {
//                 "id":"small",
//                 "value":"Small",
//                 "back":"11"
//             },
//             {
//                 "id":"large",
//                 "value":"Large",
//                 "back":"11"   
//             }]
//         },{
//         "key":"22",
//         "value":"What is the app/project size?",
//         "options":[
//             {
//                 "id":"small",
//                 "value":"Small",
//                 "back":"11"
//             },
//             {
//                 "id":"large",
//                 "value":"Large",
//                 "back":"11"   
//             }]
//         },{
//         "key":"small",
//         "value":"Great, Tell me your team's skill set?",
//         "options":[
//             {
//                 "id":"1"
//             },
//             {
//                 "id":"2"   
//             }]
//         },{
//         "key":"large",
//         "value":"Great, Tell me your team's skill set?",
//         "options":[
//             {
//                 "id":"1"
//             },
//             {
//                 "id":"2"   
//             }]
//         },{
//         "key":"8",
//         "value":"",
//         "options":[
//             {
//                 "id":"1"
//             },
//             {
//                 "id":"2"   
//             }]
//         },{
//         "key":"9",
//         "value":"",
//         "options":[
//             {
//                 "id":"1"
//             },
//             {
//                 "id":"2"   
//             }]
//         },{
//         "key":"10",
//         "value":"",
//         "options":[
//             {
//                 "id":"1"
//             },
//             {
//                 "id":"2"   
//             }]
//         },{
//         "key":"11",
//         "value":"",
//         "options":[
//             {
//                 "id":"1"
//             },
//             {
//                 "id":"2"   
//             }]
//         },{
//         "key":"12",
//         "value":"",
//         "options":[
//             {
//                 "id":"1"
//             },
//             {
//                 "id":"2"   
//             }]
//         }

// ]


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","HEAD,GET,POST,PATCH,OPTIONS,PUT,DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  var io = socketIO.listen(server);
  io.sockets.on('connection', function(socket) {
  
    // convenience function to log server messages on the client
    function log() {
      var array = ['Message from server:'];
      array.push.apply(array, arguments);
      socket.emit('log', array);
    }
  
    socket.on('message', function(message) {
      log('Client said: ', message);
      // for a real app, would be room-only (not broadcast)
      socket.broadcast.emit('message', message);
    });
  
    socket.on('create or join', function(room) {
      log('Received request to create or join room ' + room);
  
      var clientsInRoom = io.sockets.adapter.rooms[room];
      var numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;
      log('Room ' + room + ' now has ' + numClients + ' client(s)');
  
      if (numClients === 0) {
        socket.join(room);
        log('Client ID ' + socket.id + ' created room ' + room);
        socket.emit('created', room, socket.id);
  
      } else if (numClients === 1) {
        log('Client ID ' + socket.id + ' joined room ' + room);
        io.sockets.in(room).emit('join', room);
        socket.join(room);
        socket.emit('joined', room, socket.id);
        io.sockets.in(room).emit('ready');
      } else { // max two clients
        socket.emit('full', room);
      }
    });
  
    socket.on('ipaddr', function() {
      var ifaces = os.networkInterfaces();
      for (var dev in ifaces) {
        ifaces[dev].forEach(function(details) {
          if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
            socket.emit('ipaddr', details.address);
          }
        });
      }
    });
  
    socket.on('bye', function(){
      console.log('received bye');
    });
  
  });
  


// app.get('/botroute', function(req, res){
//   res.send("You are at right place, let me help you !");
// });

app.post('/dataSolution',function(req,res){
    // console.log(req.body)
    if(req.body.value.mongo>=req.body.value.sql){
        res.send(solution[0])
    }
    else if(req.body.value.sql>req.body.value.mongo){
        res.send(solution[1])
    }
        
})

app.post('/botroute',function(req,res){
    var flag = 0;
    data.map((content)=>{
        if(flag == 0){
            if(content.key == req.body.id ){
                var frontdata = {value:[],options:"",backid:"",next:""}
                frontdata.value = content.value;
                frontdata.videos = content.videos;
                frontdata.backid = content.backid;
                // console.log(content.next)
                frontdata.next = content.next;
                // console.log(frontdata.value.length)
                frontdata.options = content.options;
                res.send(frontdata);
                flag = 1;
            }
            if(content.key == req.body.backid){
                var frontdata = {value:"",options:"",backid:"",next:""}
                frontdata.value = content.value;
                frontdata.backid = content.backid;
                frontdata.videos = content.videos;
                // console.log(content.next)
                frontdata.next = content.next;
                frontdata.options = content.options;
                res.send(frontdata);
                flag = 1; 
            }
        }
        
    })
    if(flag == 0){
        var frontdata = {value:"",options:""}
        frontdata.value = "Solution";
        res.send(frontdata);
    }
})

server.listen(4000, function(){
    console.log("Server Running on port 4000....")
});