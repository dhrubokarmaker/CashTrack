const e = require("express");
const Transactions = require("../models/Transactions")


exports.getTransaction = async (req,res) => {
    try{
        const transactions = await Transactions.find();
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
        const transaction = await Transactions.create(req.body)
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
        await Transactions.deleteOne(transaction)
        res.status(201).json({
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
        await Transactions.deleteMany({})
        res.status(201).json({
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