INSERT INTO Users (firstName, lastName, email, password, phoneNumber, isDesigner)
VALUES ("Valerie", "Wagner", "vw@test.com", "password1", "310-555-1212", false),
("Roger", "Nelson", "roger@test.com", "psswrd1", "909-555-1212", true),
("Felix", "Thecat", "meow@test.com", "pasword1", "951-555-1212", false),
("Felicia", "Williams", "felWill@test.com", "passwod1", "501-555-1212", true),
("Barbara", "Wagner", "bw@test.com", "password", "626-555-1212", false),
("Marcus", "Buckner", "bucky@test.com", "pasord1", "760-555-1212", false);

INSERT INTO Measurements (email, designerId, project, colorprferences, dressSize, suitSize, shirtSize, pantsWaist, pantsInseam, tightsSize, hatSize, shoeSize, handed, height, weight, hair, eyes, headAround, headOverTop, neckAround, neckHeightFront, neckHeightBack, bust, bustFront, bustBack, bustPointToPoint, chest, chestFront, shoulderFront, shoulderBack, shoulderSeam, slope, shoulderTipToWaistFront, shoulderTipToWaistBack, armsyceFront, armholeSnug, underArmSeam, waist, waistToFloor, waistToBelowKnee, neckToWaistFront, neckToWaistBack, neckToFloor, hipAtBones, hipToWaist, largeHip inseam, kneeToAnkle, upperThigh, upperThighFlexed, knee, kneeFlexed, calf, ankle, overallRise, riseFront, riseBack, armLength, overArm, armToElbow, elbowToWrist, bicep, bicepFlexed, elbow, wrist, handOrFist, notes)
VALUES ("vw@test.com", 2, "game of cones", "red, blue, gray", "13", "", "", "", "27", "", "", "8 1/2", "", "5' 7", "175", "red", "green", "", "", "", "", "", "38", "", "", "", "34", "", "", "", "23", "", "", "", "", "", "", "31", "", "", "", "", "", "", "", "", "", "", "16", "", "", "", "", "", "", "", "23", "", "", "", "14", "16", "", "", "", "prefers dark blue with gray trim"),
("meow@test.com" 4, "catz", "", "", "", "", "", "", "", "1", "", "", "1' 1/2", "11", "black", "black", "3", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "6", "", "", "", "", "", "", "", "", "3", "", "", "", "", "", "", "", "", "", "", "1 1/2", "", "", "", "3/4", "1", "", "", "", "need completed by 11/23/19"),
("bw@test.com", 4, "catz", "pink, yellow", "6", "", "", "", "30", "", "", "10", "", "5'10", "145", "blonde", "blue", "", "", "", "", "", "30", "", "", "", "28", "", "", "", "21", "", "", "", "", "", "", "", "", "", "", "", "", "", "32", "", "30", "", "", "", "", "", "", "3", "", "", "", "20", "", "", "", "11", "", "", "", "", "needs to be complete by 11/23/19"),
("bucky@test.com", 2, "rock nation", "", "10", "32", "13", "28", "27", "", "3", "6", "", "6'4", "217", "dark brown", "dark brown", "", "", "", "", "", "", "", "", "", "33", "", "", "", "", "", "", "", "", "", "", "32", "33", "", "", "", "", "", "", "", "33", "15", "15", "18", "", "", "", "", "", "", "", "", "", "", "", "17", "21", "", "", "", "");
