import mongoose from 'mongoose';

import constants from './constants';

mongoose.Promise = global.Promise;

try {
  mongoose.connect(constants.DB_URL, {
    useMongoClient: true,
  });
} catch (e) {
  mongoose.createConnection(constants.DB_URL, {
    useMongoClient: true,
  });
}

mongoose.connection
  .once('open', () => {
		console.log('MongoDB is running'); // eslint-disable-line
  })
  .on('error', e => {
    throw e;
  });
