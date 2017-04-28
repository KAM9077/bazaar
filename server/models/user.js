// Importing Node packages required for schema
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const ROLE_RESIDENT = require('../constants').ROLE_RESIDENT;
const ROLE_VOLUNTEER = require('../constants').ROLE_VOLUNTEER;
const ROLE_ADMIN = require('../constants').ROLE_ADMIN;
// ROLE_MEMBER is the default value
const ROLE_MEMBER = require('../constants').ROLE_MEMBER;


const Schema = mongoose.Schema;

//= ===============================
// User Schema
//= ===============================
const UserSchema = new Schema({
  role: {
    type: String,
    default: ROLE_MEMBER
  },
  profile: {
    camp: { type: String },
    room: { type: String },
    // Profile of the resident
    lastName: { type: String, required : true  },
    firstName: { type: String },
    gender: ['M', 'F'],
    doB: { type: String },
    age: { type: String },
    nationality: { type: String },
    language1: { type: String },
    language2: { type: String },
    language3: { type: String },
    language4: { type: String }
  },
    relationship: { type: String },
    arrivalDate: { type: String },
    documents: { type: String },
    transferFrom: { type: String },
    cardNo: { type: String },

    registration: {
      registrationNb: { type: String },
      dateIssued: { type: String },
    },
    case: {
      caseNb: { type: String },
      dateIssued: { type: String },
      caseType : ['REUNIFICATION', 'RELOCATION', 'GREEK_ASYLUM']
    },
    interviews: {
      asylumInterview1: { type: String },
      interview2: { type: String },
      interview3: { type: String }
    },

    phoneNb: { type: String },
    email: {
      type: String,
      lowercase: true,
    },
    password: {
      type: String,
      required: true
    },
    skills: {
      professional: { type: String },
      participatory: { type: String },
      future: { type: String }
    },
    departure: {
      date: { type: String },
      country: { type: String }
    },
    archive: ['YES', 'NO'],
    notes: { type: String },
    stripe: {
      customerId: { type: String },
      subscriptionId: { type: String },
      lastFour: { type: String },
      plan: { type: String },
      activeUntil: { type: Date }
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date }
  },
  {
    timestamps: true
  });

//= ===============================
// User ORM Methods
//= ===============================

// Pre-save of user to database, hash password if password is modified or new
UserSchema.pre('save', function (next) {
  const user = this,
    SALT_FACTOR = 5;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

// Method to compare password for login
UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return cb(err); }

    cb(null, isMatch);
  });
};

// We know create the collection 'User' based on the schema 'UserSchema' then we export it
module.exports = mongoose.model('User', UserSchema);
