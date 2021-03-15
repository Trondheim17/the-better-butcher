require('dotenv').config()

const express = require('express')
const massive = require('massive')
const session = require('express-session')

const app = express()
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING, STRIPE_KEY } = process.env
const stripe = require('stripe')(`${STRIPE_KEY}`)
const auth = require('./controllers/userController')
const cart = require('./controllers/cartController')
const item = require('./controllers/itemController')
const path = require('path')

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db =>{
    app.set('db', db)
    console.log('db connection succesful')
    app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))
})

app.post(`/auth/register`, auth.register)
app.post(`/auth/login`, auth.login)
app.post(`/auth/logout`, auth.logout)
app.post(`/auth/set_address`, auth.setAddress)
app.get(`/auth/user`, auth.getUser)

app.put(`/cart/edit_cart`, cart.editCartItem)
app.put(`/cart/checkout_cart`, cart.checkoutCart)
app.post('/cart/add_to_cart', cart.addToCart)
app.get(`/cart/get_cart`, cart.getCart)
app.delete(`/cart/remove_from_cart`, cart.removeFromCart)

app.get(`/item/all_items`, item.getItems)
app.get(`/item/item`, item.getItem )

const YOUR_DOMAIN = 'http://localhost:4343';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Stubborn Attachments',
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });
  res.json({ id: session.id });
});



app.use( express.static( `${__dirname}/../build`));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

