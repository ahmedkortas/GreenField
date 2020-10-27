const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
import cvpSchema from './cv';
import userSchema from './user';
import jaSchema from './jobsAccepting';
import jpSchema from './jobsPending';
import jdSchema from './jd';
import fbSchema from './feedback';

module.exports = {
    cvpSchema,
    userSchema,
    jaSchema,
    jpSchema,
    jdSchema,
    fbSchema
}