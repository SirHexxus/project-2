"use strict";

const faker = require("faker");

// var db = require("../models");
let measurements = [];

let shoes = [
  "5",
  "5.5",
  "6",
  "6.5",
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "12.5",
  "13",
  "13.5",
  "14"
];

let heights = [
  "6'",
  "6'3",
  "5'9",
  "5'5",
  "5'7",
  "6'2",
  "6'1",
  "5'2",
  "5'3",
  "5'11",
  "5'10"
];
let hairColor = [
  "blonde",
  "light brown",
  "dark brown",
  "black",
  "red",
  "purple",
  "pink",
  "green",
  "gray"
];
let eyeColor = ["brown", "hazel", "green", "blue", "black"];

let sizes = ["XS", "S", "M", "L", "XL", "2XL", "2XLT", "3XL", "3XLT"];

for (var m = 0; m < 20; m++) {
  let newMeasure = {
    clientName: faker.name.findName(),
    clientEmail: faker.internet.email(),
    clientPhone: faker.phone.phoneNumber(),
    projectName: faker.company.bsNoun(),
    colorPreferences: faker.commerce.color(),
    dressSize: Math.floor((Math.random() * 33) + 1),
    suitSize: Math.floor((Math.random() * 27) + 23),
    shirtSize: sizes[Math.floor(Math.random() * sizes.length)],
    pantsWaist: Math.floor((Math.random() * 27) + 23),
    pantsInseam: null,
    tightsSize: null,
    hatSize: null,
    shoeSize: shoes[Math.floor(Math.random() * shoes.length)],
    handed: null,
    height: heights[Math.floor(Math.random() * heights.length)],
    weight: Math.floor((Math.random() * 200) + 120),
    hair: hairColor[Math.floor(Math.random() * hairColor.length)],
    eyes: eyeColor[Math.floor(Math.random() * eyeColor.length)],
    headAround: null,
    headOverTop: null,
    neckAround: null,
    neckHeightFront: null,
    neckHeightBack: null,
    bust: Math.floor((Math.random() * 32) + 28),
    bustFront: null,
    bustBack: null,
    bustPointToPoint: null,
    chest: Math.floor((Math.random() * 32) + 28),
    chestFront: null,
    shoulderFront: null,
    shoulderBack: null,
    shoulderSeam: null,
    slope: null,
    shoulderTipToWaistFront: null,
    shoulderTipToWaistBack: null,
    armsyceFront: null,
    armholeSnug: null,
    underArmSeam: null,
    waist: Math.floor((Math.random() * 32) + 28),
    waistToFloor: null,
    waistToBelowKnee: null,
    neckToWaistFront: null,
    neckToWaistBack: null,
    neckToFloor: null,
    hipAtBones: null,
    hipToWaist: null,
    largeHipAcross: null,
    largeHipVertical: null,
    inseam: Math.floor(Math.random() * 27 + 23),
    kneeToAnkle: null,
    upperThigh: Math.floor((Math.random() * 20) + 10),
    upperThighFlexed: null,
    knee: null,
    kneeFlexed: null,
    calf: Math.floor((Math.random() * 7) + 3),
    ankle: null,
    overallRise: null,
    riseFront: null,
    riseBack: null,
    armLength: Math.floor((Math.random() * 10) + 10),
    overArm: null,
    armToElbow: null,
    elbowToWrist: null,
    bicep: Math.floor((Math.random() * 8) + 12),
    bicepFlexed: null,
    elbow: null,
    wrist: null,
    handAsFist: null,
    customMeasurement1: null,
    customMeasurement2: null,
    customMeasurement3: null,
    customMeasurement4: null,
    customMeasurement5: null,
    notes: faker.lorem.paragraph(3),
    createdAt: faker.date.between("2019-10-28", "2019-11-15"),
    updatedAt: faker.date.recent(10),
    UserId: Math.floor((Math.random() * 10) + 1)
  };
  measurements.push(newMeasure);
}

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Measurements", measurements, {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Measurements", null, {});
  }
};
