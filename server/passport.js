const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/models/User');

passport.use(new LocalStrategy(
    {
        usernameField: 'inputEmail',
        passwordField: 'inputPassword'
    },
    function (inputEmail, inputPassword, done) {

        User.findOne({ where: { email: inputEmail } })
            .then(user => {
                console.log(user)
                if (!user) {
                    return done(null, false, { message: 'Incorrect email.' });
                }
                if (user.password !== inputPassword ) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            })
            .catch(done);
    }
));


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findByPk(id)
        .then(user => done(null, user))
});


module.exports = passport