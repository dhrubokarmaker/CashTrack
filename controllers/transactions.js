const Transactions = require("../models/Transactions")

exports.getTransaction = async (req,res) => {
    try{
        const id = req.user._id
        const transactions = await Transactions.find({user: id}).sort( { createdAt : -1 } );
        res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            error: 'Server error'
        })  
    }  
}

exports.addTransaction = async (req,res) => {
    try{
        const {description,category,amount,type} = req.body;
        const transaction = await Transactions.create({description,category,amount,type,user:req.user._id})
        res.status(201).json({
            success: true,
            data: transaction
        })
    }
    catch(err){
        if(err.name === "ValidationError"){
            console.log(err)
            return res.status(400).json({
                success:false,
                error: 'Incorrect data'
            })
        }
        else{
            return res.status(500).json({
                success:false,
                error: 'Server error'
            })
        }
    }
}

exports.deleteTransaction = async (req,res) => {
    try{
        const transaction = await Transactions.findById(req.params.id)
        if(!transaction){
            return res.status(404).json({
                success:false,
                error: 'No such transaction found'
            })
        }
        if (!req.user) {
            return res.status(401).json({
                success:false,
                error: 'Not authorized'
            })
        }
        if (transaction.user.toString() !== req.user._id.toString()) {
            console.log(transaction.user.toString())
            return res.status(401).json({
                success:false,
                error: 'Not authorized'
            })
        }
        await Transactions.deleteOne(transaction)
        res.status(200).json({
            success: true,
            data: transaction
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            error: 'Server error'
        })
    }
}

exports.deleteAll = async (req,res) => {
    try{
        await Transactions.deleteMany({user: req.user._id})
        return res.status(200).json({
            success: true,
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            error: 'Server error'
        })
    }
}