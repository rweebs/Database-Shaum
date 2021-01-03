const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT=process.env.PORT;

const data=[
    {
        "month": 0,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 1,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 2,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 3,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 4,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 5,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 6,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 7,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 8,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 9,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 10,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 11,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    {
        "month": 12,
        "date":[
            {
                "day":'13',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'14',
                "event":"Puasa Ayyamul Bidh"
            },
            {
                "day":'15',
                "event":"Puasa Ayyamul Bidh"
            },

        ]
    },
    
]

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/:month', (req, res) => {
    let month=data[req.params.month]
    res.send(month);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));