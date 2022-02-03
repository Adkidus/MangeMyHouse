const express = require('express');
const router = express.Router();
const Device = require('../models/device');

router.get('/list', async (req, res) => {
    try {
        let devices = await Device.find()
        res.status(200).json(devices); 
    } catch (error) {
        res.status(500).json({Error: e.message});
    }
})

router.get('/byId/:id', async (req, res) => {
    try {
        let singleDevice = await Device.findOne({_id: req.params.id})
        res.status(200).json(singleDevice); 
    } catch (error) {
        res.status(500).json({Error: e.message});
    }
})

router.post('/new', async (req, res) => {
    try {
        const d = new Device(req.body)
        await d.save()
        res.status(201).send(d);
    } catch (e) {
        res.status(500).json({Error: e.message});
    }
})

router.post('/update', async(req, res) => {
    try {
        await Device.updateOne({_id: req.body._id},req.body);
        deviceUpdated = await Device.findOne({_id: req.body._id});
        res.status(200).json(deviceUpdated); 
    } catch (e) {
        res.status(500).json({Error: e.message});
    }
})

router.delete('/:id', async(req, res) => {
    try {
        await Device.deleteOne({_id:req.params.id});
        res.status(200).json({ success: req.params.id })
    } catch (e) {
        res.status(500).json({Error: e.message});
    }
})

module.exports = router;