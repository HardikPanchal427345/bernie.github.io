const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const multer = require('multer');


const nodemailer = require('nodemailer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        const date = new Date().toDateString()
        cb(null, date + '__' + file.originalname);
    }
})
const upload = multer({ storage: storage });
const User = require('../models/user')
const Competition = require('../models/competition')
const Winner = require('../models/winner')

const Transaction = require('../models/transaction')


const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb+srv://hardikpanchal:89807270@mybernie-bs6iw.mongodb.net/MyBernie?retryWrites=true&w=majority', (err) => {

        // mongoose.connect('mongodb+srv://hardikpanchal:89807270@mybernie-bs6iw.mongodb.net/MyBernie', (err) => {
        if (!err) {
            console.log('Mongodb connected Successfully..');
        } else {
            console.log('Error in dbconnection New:' + JSON.stringify(err, undefined, 2))
        }
    });
    // MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/MyBernie', (err) => {

//     // mongoose.connect('mongodb+srv://hardikpanchal:89807270@mybernie-bs6iw.mongodb.net/MyBernie', (err) => {
//     if (!err) {
//         console.log('Mongodb connected Successfully..');
//     } else {
//         console.log('Error in dbconnection New with MonoClient:' + JSON.stringify(err, undefined, 2));
//     }
// })

router.get('/', (req, res) => {
    res.send('From API route')
})

/******************************************  FOR   USER   ROUTES   ************************************ */
router.get('/users', (req, res) => {
    User.find((err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('error in fetch....getusers')
    });
})


router.post('/register', (req, res) => {
    let userData = req.body



    let user = new User(userData)
    user.save((error, registeredUser) => {

        if (error) {
            console.log(error)
        } else {
            // if (userData)
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({ token })

            sendmail(registeredUser, info => {
                console.log('mail is sent...')
            });
        }
    })
})


async function sendmail(user, callback) {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "winyourdreambernie@gmail.com", // generated ethereal user
            pass: "hardik@1234", // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: '"Bernie" <winyourdreambernie@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "Wel-Come to Bernie", // Subject line
        html: "<h1>Hii ${user.name}</h1>",
        "<h1>Thanks For Joining Us...</h1>": // html body
            "<h1>Wish you Best Luck For The Contests...</h1>"
    });
}

router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send("Invalid Password")
                } else {
                    // let payload = { subject: user._id, username: user.email }
                    let payload = { subject: user }
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).send({ token })
                }
            }
        }
    })
})

router.get('/oneuser/:id', (req, res) => {
    User.findOne({ _id: req.params.id }, (err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('error in fetch....getoneuser')
    });
})


// router.patch('/userupdate/:id', (req, res) => {

//         User.findOne({ _id: req.params.id }, (err, docs) => {
//             User.updateOne({ "_id": req.params.id }, { $set: req.body }, (err, docs) => {
//                 if (!err) {
//                     res.send(docs)
//                 } else
//                     console.log('error in fetch')
//             });
//         })
//     })
router.patch('/userupdate/:id', upload.single('image'), (req, res) => {
    if (req.file) {
        User.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password,
                gender: req.body.gender,
                birthdate: req.body.birthdate,
                city: req.body.city,
                state: req.body.state,
                pin: req.body.pin,
                address: req.body.address,
                phone: req.body.phone,
                image: req.file.path
            }
        }, (err, docs) => {
            if (!err) {
                res.send(docs)
            } else
                console.log('error in fetch.....findbyidandupdate')
        });

    } else {
        User.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                fullname: req.body.fullname,
                email: req.body.email,
                password: req.body.password,
                gender: req.body.gender,
                birthdate: req.body.birthdate,
                city: req.body.city,
                state: req.body.state,
                pin: req.body.pin,
                address: req.body.address,
                phone: req.body.phone,
            }
        }, (err, docs) => {
            if (!err) {
                res.send(docs)
            } else
                console.log('error in fetch.....findbyidandupdate')
        });

    }

})


router.patch('/usercompupdate/:id', (req, res) => {

        User.findByIdAndUpdate({ _id: req.params.id }, {
            $push: {
                comps: req.body.id
            }
        }, (err, docs) => {
            if (!err) {
                res.send(docs)
            } else
                console.log('error in fetch.....patchusercompupdata')
        });
    })
    /******************************************  FOR   COMPETITION   ROUTES   ************************************ */

router.post('/insertcompetition', upload.single('image'), (req, res) => {
    // let compData = req.body

    var arr = []
    for (var i = 0; i < 100; ++i) {
        arr.push({ id: i + 1, name: "" })
    }

    // User.create({ tickets: arr })
    let competition = new Competition({

        id: req.body.id,
        title: req.body.title,
        type: req.body.type,
        detail: req.body.detail,
        ticket_price: req.body.ticket_price,
        insertdate: req.body.insertdate,
        enddate: req.body.enddate,
        image: req.file.path,
        tickets: arr
    })
    competition.save((error, insertedCompetition) => {

        if (error) {
            console.log(error)
        } else {
            // if (userData)
            res.status(200).send(insertedCompetition)
        }
    })

})

router.get('/competitions', (req, res) => {
    Competition.find((err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('error in fetch.....getcompetitions')
    });
})

router.get('/onecompetition/:id', (req, res) => {
    Competition.findOne({ _id: req.params.id }, (err, docs) => {
        if (!err) {
            // console.log(res.docs.tickets)
            res.send(docs)
        } else
            console.log('error in fetch.....getonecomprtition')
    });
})
router.get('/platinumcompetitions', (req, res) => {
    Competition.find({ type: "Platinum" }, (err, docs) => {
        if (!err) {
            // console.log(res.docs.tickets)
            res.send(docs)
        } else
            console.log('error in fetch.....getplatinumcompetitions')
    });
})

router.get('/goldcompetitions', (req, res) => {
    Competition.find({ type: "Gold" }, (err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('error in fetch.....getgoldcompetitions')
    });
})

router.get('/silvercompetitions', (req, res) => {
    Competition.find({ type: "Silver" }, (err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('error in fetch.....getsilvercompetitions')
    });
})

router.get('/freecompetitions', (req, res) => {
    Competition.find({ type: "Free" }, (err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('error in fetch.....getfreecompetitions')
    });
})

router.get('/competitiondetail', (req, res) => {
    Competition.findOne({ _id: (req.params.id) }, (err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('error in fetch....getcompetitiondetail')
    });
})

// router.post('/ticketsupdate', (req, res) => {
//     Competition.update({ "_id": "5e9820b11e6fb814406ad2d4", "tickets.id": 4 }, { $set: { "tickets.$.name": "rushil" } }, (err, docs) => {
//         if (!err) {
//             res.send(docs)
//         } else
//             console.log('error in fetch.....postticketsupdate')
//     });
// })

router.patch('/ticketsupdate/:id', (req, res) => {

    const id = req.params.id
    const ticketid = req.body.id
    const name = req.body.name
    Competition.findOne({ _id: req.params.id }, (err, docs) => {
        Competition.updateOne({ "_id": id, "tickets.id": (req.body.id) }, { $set: { "tickets.$.name": (req.body.name) } }, (err, docs) => {
            if (!err) {
                res.send(docs)
            } else
                console.log('error in fetch.....patchticketsupdate')
        });
    })
})

// router.patch('/ticketsupdate/:id', (req, res) => {

//     const id = req.params.id
//     const ticketid = req.body.id
//     const name = req.body.name
//     Competition.update({ "_id": id, "tickets.id": ticketid }, { $set: { "tickets.$.name": "harry" } }, (err, docs) => {
//         if (!err) {
//             res.send(docs)
//         } else
//             console.log('error in fetch')
//     });
// })


/*******************************************   FOR  WINNERS  ROUTES   *************************************** */

router.get('/winners', (req, res) => {

    Winner.find((err, docs) => {
        if (!err)
        // res.send(docs)
            res.send(docs)
        else
            console.log('error in fetch.....getwinners')
    });
})

router.post('/winners', (req, res) => {
    let winnerData = req.body

    let winner = new Winner(winnerData)
    winner.save((error, registeredWinner) => {

        if (error) {
            console.log(error)
        } else {
            if (winnerData)
                res.status(200).send(registeredWinner)
        }
    })
})


/*******************************************   FOR  TRANSACTIONS  ROUTES   *************************************** */

router.get('/transactions', (req, res) => {

    Transaction.find((err, docs) => {
        if (!err)
        // res.send(docs)
            res.send(docs)
        else
            console.log('error in fetch.....gettransactions')
    });
})

router.get('/transactions/:id', (req, res) => {
    Transaction.find({ userId: req.params.id }, (err, docs) => {
        if (!err) {
            // console.log(res.docs.tickets)
            res.send(docs)
        } else
            console.log('error in fetch.....getonetransaction')
    });
})

router.post('/transactions', (req, res) => {
    let transactiondata = req.body

    let transaction = new Transaction(transactiondata)
    Transaction.save((error, registeredtransaction) => {

        if (error) {
            console.log(error)
        } else {
            if (transactiondata)
                res.status(200).send(registeredtransaction)
        }
    })
})


module.exports = router