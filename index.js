const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT=process.env.PORT;

const data=[
    {
        "month": "00",
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
        "month": "01",
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
        "month": "02",
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
        "month": "03",
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
        "month": "04",
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
        "month": "05",
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
        "month": "06",
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
        "month": "07",
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
        "month": "08",
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
        "month": "09",
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
        "month": "10",
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
        "month": "11",
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
        "month": "12",
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