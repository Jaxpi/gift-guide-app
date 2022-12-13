
const db = require('../config/connection');
const { User, Items, Wishlist, Friends } = require('../models');
const userSeeds = require('./userSeeds.json');
const wishSeeds = require('./wishlistSeeds.json');
const itemSeeds = require('./itemSeeds.json');
const mongoose = require('mongoose');

db.once('open', async () => {
  /* Connect to the DB */
  mongoose.connect('mongodb://127.0.0.1:27017/g2gg',function(){
      /* Drop the DB */
      mongoose.connection.db.dropDatabase();
});
  try {
    await Wishlist.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < wishSeeds.length; i++) {
      const { _id, userId } = await Wishlist.create(wishSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: userId },
        {
          $addToSet: {
            wishlists: _id,
          },
        }
      );
    }
  } 
catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});




// const mongoose = require('mongoose')

// mongoose.connect('mongodb:127.0.0.1:27017/g2gg',
// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log('MONGO CONNECTION OPEN !!!');
// })
// .catch((err) => {
//     console.log(err);
// })

// // const db = require('../../models');
// const { Items, User,Wishlist, Friends } = require('../../models');


// const itemSeeds = require('./itemSeeds.json');

// const seedDB = async () => {
//   await Items.deleteMany({});
//   await Items.create(itemSeeds);


// };

// seedDB().then(() => {
//     mongoose.connection.close();
// });
