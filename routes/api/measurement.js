//  Package Variable Declarations
const express = require('express');

//  Package Dependent Variable Declarations
const router = express.Router();

//  File Import Variable Declarations
//  //  Pull in Measurement model
const Measurement = require('../../models/Measurement');

//  Get all
//  //  @route      GET /api/Measurements
//  //  @desc       Get all Measurements
//  //  @access     Public
router.get('/', (req, res) => {
	Measurement.find().then(measurements => res.json(measurements));
});

//  Get all by User ID
//  //  @route      GET api/measurements/user/:userId
//  //  @desc       Get all Measurements associated with user id
//  //  @access     Public
router.get('/user/:userId', (req, res) => {
	Measurement.find({ user: req.params.userId }).then(measurements =>
		res.json(measurements)
	);
});

//  Get one
//  //  @route      GET api/measurements/:id
//  //  @desc       Get Measurement set by id
//  //  @access     Public
router.get('/:id', (req, res) => {
	Measurement.find({ _id: req.params.id }).then(measurement =>
		res.json(measurement)
	);
});

//  Post New Measurements Set
//  //  @route      POST /api/measurements/new
//  //  @desc       Create new Measurement set
//  //  @access     Public
router.post('/new', (req, res) => {
	const newMeasurement = new Measurement({
		clientName: req.body.clientName,
		clientEmail: req.body.clientEmail,
		clientPhone: req.body.clientPhone,
		projectName: req.body.projectName,
		colorPreferences: req.body.colorPreferences,
		dressSize: req.body.dressSize,
		suitSize: req.body.suitSize,
		shirtSize: req.body.shirtSize,
		pantsWaist: req.body.pantsWaist,
		pantsInseam: req.body.pantsInseam,
		tightsSize: req.body.tightsSize,
		hatSize: req.body.hatSize,
		shoeSize: req.body.shoeSize,
		handed: req.body.handed,
		height: req.body.height,
		weight: req.body.weight,
		hair: req.body.hair,
		eyes: req.body.eyes,
		headAround: req.body.headAround,
		headOverTop: req.body.headOverTop,
		neckAround: req.body.neckAround,
		neckHeightFront: req.body.neckHeightFront,
		neckHeightBack: req.body.neckHeightBack,
		bust: req.body.bust,
		bustFront: req.body.bustFront,
		bustBack: req.body.bustBack,
		bustPointToPoint: req.body.bustPointToPoint,
		chest: req.body.chest,
		chestFront: req.body.chestFront,
		shoulderFront: req.body.shoulderFront,
		shoulderBack: req.body.shoulderBack,
		shoulderSeam: req.body.shoulderSeam,
		slope: req.body.slope,
		shoulderTipToWaistFront: req.body.shoulderTipToWaistFront,
		shoulderTipToWaistBack: req.body.shoulderTipToWaistBack,
		armsyceFront: req.body.armsyceFront,
		armholeSnug: req.body.armholeSnug,
		underArmSeam: req.body.underArmSeam,
		waist: req.body.waist,
		waistToFloor: req.body.waistToFloor,
		waistToBelowKnee: req.body.waistToBelowKnee,
		neckToWaistFront: req.body.neckToWaistFront,
		neckToWaistBack: req.body.neckToWaistBack,
		neckToFloor: req.body.neckToFloor,
		hipAtBones: req.body.hipAtBones,
		hipToWaist: req.body.hipToWaist,
		largeHipAcross: req.body.largeHipAcross,
		largeHipVertical: req.body.largeHipVertical,
		inseam: req.body.inseam,
		kneeToAnkle: req.body.kneeToAnkle,
		upperThigh: req.body.upperThigh,
		upperThighFlexed: req.body.upperThighFlexed,
		knee: req.body.knee,
		kneeFlexed: req.body.kneeFlexed,
		calf: req.body.calf,
		ankle: req.body.ankle,
		overallRise: req.body.overallRise,
		riseFront: req.body.riseFront,
		riseBack: req.body.riseBack,
		armLength: req.body.armLength,
		overArm: req.body.overArm,
		armToElbow: req.body.armToElbow,
		elbowToWrist: req.body.elbowToWrist,
		bicep: req.body.bicep,
		bicepFlexed: req.body.bicepFlexed,
		elbow: req.body.elbow,
		wrist: req.body.wrist,
		handAsFist: req.body.handAsFist,
		customMeasurement1: req.body.customMeasurement1,
		customMeasurement2: req.body.customMeasurement2,
		customMeasurement3: req.body.customMeasurement3,
		customMeasurement4: req.body.customMeasurement4,
		customMeasurement5: req.body.customMeasurement5,
		notes: req.body.notes,
		user: req.body.user
	});

	newMeasurement.save().then(measurement => res.json(measurement));
});

//  Make changes to existing Measurements
//  //  @route      PUT api/measurements/:id
//  //  @desc       Update existing measurement info
//  //  @access     Public
router.put('/:id', (req, res) => {
	Measurement.findById(req.params.id)
		.then(measurement =>
			measurement.update(req.body).then(() => res.json({ success: true }))
		)
		.catch(err => res.status(404).json({ success: false }));
});

//  Delete measurement
//  //  @route      DELETE /api/measurements/:id
//  //  @desc       delete a measurement
//  //  @access     Public
router.delete('/:id', (req, res) => {
	Measurement.findById(req.params.id)
		.then(measurement =>
			measurement.remove().then(() => res.json({ success: true }))
		)
		.catch(err => res.status(404).json({ success: false }));
});

//  Exports
module.exports = router;
