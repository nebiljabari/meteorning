import { Meteor } from 'meteor/meteor';

const exec = Npm.require('child_process').exec;

/* - - - IMPORTS - - - */

// Retrieve the Current Working Directory
const cwd  = process.cwd().split('.')[0];

function scriptPython(arg1, arg2, arg3, arg4) {
  let path = `python ${cwd}/public/python/`;
  let cmd  = `${path}ml_model.py ${arg1} ${arg2} ${arg3} ${arg4}`;

  // exec is wrapped in a Promise object who work in pairs with async/await
  return new Promise((resolve, reject) => {
    exec(cmd, (err, res) => {
      if (err) throw new Meteor.Error('>> ERROR:', err);

      resolve(res);
      console.log('>> Prediction: iris', res);
    });
  });
}

async function asyncCall(arg1, arg2, arg3, arg4) {
  let iris = await scriptPython(arg1, arg2, arg3, arg4);
  return iris;
}

Meteor.methods({
  model(arg1, arg2, arg3, arg4) {
    return asyncCall(arg1, arg2, arg3, arg4);
  }
});
