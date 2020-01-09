let user = "Devyn";
let email = "ckbrogue@gmail.com";
let phone = "714-858-8131";
let table = [];
let currentURL = window.location.origin;
$(document).ready(() => {

//test use of id to be replaced by id used when signing in or created when signing up.
let id = (Math.floor(Math.random() * 10) + 1);

//the user id 11 has no clients for testing - uncomment if needed for testing
// let id = 11;

  $.get(currentURL + "/api/measurements/" + id, function(data) {

    if (data.length === 0 ){
      console.log("You have no client measurements.");
      $.get(currentURL + "/api/user/" + id, function(response) {
        console.log(response);
        $(".user-name").append("<b>Welcome Back " + response.username + "</b>");

        let html = `<tr>
        <td>You have no client measurements.</td>
        <td></td>
        <td><a data-target="clientinfo" data-id=${response.id} class='z-depth-3 btn modal-trigger'>Add a Client Now!</a></td>
        </tr>`;

        $("#client-name-mt").removeAttr('disabled');
  
        $(".project-table").append(html);
      });
    } else {
      console.log(data);
      console.log(data[0].Measurements.length);
      $(".user-name").append("<b>Welcome Back " + data[0].username + "</b>");
  
      for (let i = 0; i < data[0].Measurements.length; i++) {
        let html = `<tr>
        <td>${data[0].Measurements[i].clientName}</td>
        <td>${data[0].Measurements[i].projectName}</td>
        <td><a data-target="measurement-table" data-id=${data[0].Measurements[i].id} class='z-depth-3 btn modal-trigger showMeasurements'>Measurements</a></td>
        </tr>`;
      
        $(".project-table").append(html);
      }
    }

    return data;
  });
});

$(document).on("click", ".showMeasurements", function() {
  
  $.get(currentURL + "/api/measurement/" + $(this).attr("data-id"), function(data) {
    console.log(data);
    $("#client-name-mt").val(data.clientName);
    $("#project-name-mt").val(data.projectName);
    $("#email-mt").val(data.clientEmail);
    $("#phone-mt").val(data.clientPhone);
    $("#formal-sz-mt").val(data.dressSize);
    $("#shirt-sz-mt").val(data.shirtSize);
    $("#pant-waist-mt").val(data.pantsWaist);
    $("#pant-inseam-mt").val(data.pantsInseam);
    $("#hat-sz-mt").val(data.hatSize);
    $("#shoe-sz-mt").val(data.shoeSize);
    $("#height-mt").val(data.height);
    $("#weight-mt").val(data.weight);
    $("#hair-color-mt").val(data.hair);
    $("#eye-color-mt").val(data.eyes);
    $("#handedness-mt").val(data.handed);
    $("#color-pref-mt").val(data.colorPreferences);
    $("#head-diam-mt").val(data.headAround);
    $("#head-over-mt").val(data.headOverTop);
    $("#neck-mt").val(data.neckAround);
    $("#neck-fr-mt").val(data.neckHeightFront);
    $("#neck-bk-mt").val(data.neckHeightBack);
    $("#bust-mt").val(data.bust);
    $("#chest-mt").val(data.chest);
    $("#bust-fr-mt").val(data.bustFront);
    $("#bust-bk-mt").val(data.bustBack);
    $("#bust-ptp-mt").val(data.bustPointToPoint);
    $("#chest-fr-mt").val(data.chestFront);
    $("#shoulder-fr-mt").val(data.shoulderFront);
    $("#shoulder-bk-mt").val(data.shoulderBack);
    $("#shoulder-sm-mt").val(data.shoulderSeam);
    $("#slope-mt").val(data.slope);
    $("#shoulder-ctr-fr-mt").val(data.shoulderTipToWaistFront);
    $("#shoulder-ctr-bk-mt").val(data.shoulderTipToWaistBack);
    $("#armscye-fr-mt").val(data.armscyeFront);
    $("#armhole-snug-mt").val(data.armholeSnug);
    $("#underarm-sm-mt").val(data.underarmSeam);
    $("#waist-mt").val(data.waist);
    $("#neck-to-waist-fr-mt").val(data.neckToWaistFront);
    $("#neck-to-waist-bk-mt").val(data.neckToWaistBack);
    $("#hip-hipbone-mt").val(data.hipAtBones);
    $("#hip-waist-mt").val(data.hipToWaist);
    $("#lg-hip-across-mt").val(data.largeHipAcross);
    $("#lg-hip-vert-mt").val(data.largeHipVertical);
    $("#neck-flr-mt").val(data.neckToFloor);
    $("#waist-flr-mt").val(data.waistToFloor);
    $("#waist-to-below-knee-mt").val(data.waistToBelowKnee);
    $("#inseam-mt").val(data.inseam);
    $("#knee-ankle-mt").val(data.kneeToAnkle);
    $("#upper-th-mt").val(data.upperThigh);
    $("#upper-th-flx-mt").val(data.upperThighFlexed);
    $("#calf-mt").val(data.calf);
    $("#ankle-mt").val(data.ankle);
    $("#overall-rise-mt").val(data.overallRise);
    $("#rise-fr-mt").val(data.riseFront);
    $("#rise-bk-mt").val(data.riseBack);
    $("#arm-length-mt").val(data.armLength);
    $("#overarm-mt").val(data.overArm);
    $("#arm-to-elbow-mt").val(data.armToElbow);
    $("#elbow-to-wrist-mt").val(data.elbowToWrist);
    $("#bicep-mt").val(data.bicep);
    $("#bicep-flx-mt").val(data.bicepFlexed);
    $("#elbow-mt").val(data.elbow);
    $("#wrist-mt").val(data.wrist);
    $("#hand-mt").val(data.handAsFist);
    $("#custom1-mt").val(data.customMeasurement1);
    $("#custom2-mt").val(data.customMeasurement2);
    $("#custom3-mt").val(data.customMeasurement3);
    $("#custom4-mt").val(data.customMeasurement4);
    $("#custom5-mt").val(data.customMeasurement5);
    $("#notes-mt").val(data.notes);

  });
});



const accounts = [
  {
    clientName: "Devyn",
    projectName: "Shirt",
    measureLink: "Measurements"
  },
  {
    clientName: "Vanessa",
    projectName: "Dress",
    measureLink: "Measurements"
  },
  {
    clientName: "Emily",
    projectName: "Pants",
    measureLink: "Measurements"
  },
  {
    clientName: "Vanessa",
    projectName: "Dress",
    measureLink: "Measurements"
  }
];

const entries = Object.values(accounts);

for (const value of entries) {
  table.push(value);
}

// for (let i = 0; i < table.length; i++) {
//   let html = `<tr>
//   <td>${table[i].clientName}</td>
//   <td>${table[i].projectName}</td>
//   <td><a data-target="measurement-table" class='z-depth-3 btn modal-trigger'>${table[i].measureLink}</a></td>
//   </tr>`;

//   $(".project-table").append(html);
// }

let size = "32 1/4";
// Test Code
$("#handedness").attr("value", size);
$("#email-mt").attr("value", email);
$("#phone-mt").attr("value", phone);

$(".modal-content").on("click", ".print", () => {
  $(".printable").html($("#measurement-table").html());
  window.print();
});
