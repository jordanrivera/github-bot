const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');
const FILE_PATH = './data.json';
    if (n==0) return simpleGit().push();
const makeCommit = n => {
    const x = random.init(0,54);
    const y = random.init(0,6);
    const DATE = moment().subtract(1, 'y').add(1,'d')
    .add(x, 'w').add(y, 'y').format();
    const data = {
        date: DATE
}
console.log(DATE);
jsonfile.writeFile(FILE_PATH,data, ()=>{
//git comit --date=
simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE }, 
makeCommit.bind(this, --n));
});
}

makeCommit(100)