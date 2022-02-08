const readline = require('readline');

const mongoose = require("mongoose")
const { paraData } = require("./model")



const db = "mongodb+srv://restapi:1998@cluster0.tog69.mongodb.net/restapi?retryWrites=true&w=majority"


mongoose.connect(db).then(() => {
  // console.log("databes connected ")
})
  .catch((e) => {
    console.log(e)
  })

let sortedPara = ""
let word = ""
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please Enter your Para :  -    ', (answer) => {


  word = answer.toLowerCase().split(" ")
  word.sort()


  for (const el of word) {
    sortedPara = sortedPara + " " + el

  }

  const saveParaData = paraData({
    para: sortedPara
  })

  saveParaData.save((err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(data)
    }
  })


  rl.close();
});



// virat kohli is one of the best cricketer of india

