exports.getTransaction = (req,res,next) => {
    res.send("GET")
}

exports.addTransaction = (req,res,next) => {
    res.send("POST")
}

exports.deleteTransaction = (req,res,next) => {
    res.send("DELETE")
}