var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var data = [
    {
        "key":"0",
        "value":"Ok, Tell me is it a new or expanding existing application ?",
        "options":[
            {
                "id":"1",
                "value":"Existing"
            },
            {
                "id":"2",
                "value":"New"   
            }]
        },{
        "key":"1",
        "value":"Are there any existing JS technologies adopted and is there a preference to use the same?",
        "options":[
            {
                "id":"11",
                "value":"Yes, there is a preference!"
            },
            {
                "id":"2",
                "value":"No, its a new application"   
            }]
        },{
        "key":"2",
        "value":"Which technologies do you want to implemented?",
        "options":[
            {
                "id":"21",
                "value":"JS Library"
            },
            {
                "id":"22",
                "value":"Full FrameWork"   
            }]
        },{
        "key":"11",
        "value":"Let me know, wheather to leverage JS Library or Full FrameWork?",
        "options":[
            {
                "id":"22",
                "value":"Full FrameWork"
            },
            {
                "id":"21",
                "value":"JS Library"   
            }]
        },{
        "key":"21",
        "value":"What is the app/project size?",
        "options":[
            {
                "id":"small",
                "value":"Small"
            },
            {
                "id":"large",
                "value":"Large"   
            }]
        },{
        "key":"22",
        "value":"What is the app/project size?",
        "options":[
            {
                "id":"small",
                "value":"Small"
            },
            {
                "id":"large",
                "value":"Large"   
            }]
        },{
        "key":"small",
        "value":"Great, Tell me your team's skill set?",
        "options":[
            {
                "id":"1"
            },
            {
                "id":"2"   
            }]
        },{
        "key":"large",
        "value":"Great, Tell me your team's skill set?",
        "options":[
            {
                "id":"1"
            },
            {
                "id":"2"   
            }]
        },{
        "key":"8",
        "value":"",
        "options":[
            {
                "id":"1"
            },
            {
                "id":"2"   
            }]
        },{
        "key":"9",
        "value":"",
        "options":[
            {
                "id":"1"
            },
            {
                "id":"2"   
            }]
        },{
        "key":"10",
        "value":"",
        "options":[
            {
                "id":"1"
            },
            {
                "id":"2"   
            }]
        },{
        "key":"11",
        "value":"",
        "options":[
            {
                "id":"1"
            },
            {
                "id":"2"   
            }]
        },{
        "key":"12",
        "value":"",
        "options":[
            {
                "id":"1"
            },
            {
                "id":"2"   
            }]
        }

]


app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('Hi, let me help you');
});

app.post('/',function(req,res){
    var flag = 0;
    data.map((content)=>{
        if(flag == 0){
            if(content.key == req.body.id){
                var frontdata = {value:"",options:""}
                frontdata.value = content.value;
                frontdata.options = content.options;
                res.send(frontdata);
                flag = 1;
            }
        }
        
    })
    if(flag == 0){
        console.log(req.body);
    }
})

app.listen(4000, function(){
    console.log("Server Running on port 4000....")
});