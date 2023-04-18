// to Move label when click text box ~ Start

$('input').focus(function () {
  $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function () {
  var inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');
  } else {
    $(this).addClass('filled');
  }
})

// to Move label when click text box ~ End



// Multiple step questions ~ Start
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;

  var transform = 0;
  if (n === 1) {
    transform = -Math.abs(currentTab + 1);
  } else {
    transform = -Math.abs(currentTab - 1);
  }
  console.log(transform);
  for (i = 0; i < x.length; i++) {
    x[i].style.transform = "translateX(" + (transform * 130) + "%)";
  }

  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    // document.getElementById("reristration-form").submit();
   fomrmSuccess()
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = false;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  console.log(y[1].checked)
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is not cheked...
    if (y[i].checked == true) {
      valid = true;
    }
  }

  var aletmsg = "";
  switch (currentTab){
    case 0:
      aletmsg = "Please Select Your Occupational Qualifications";
      break;
    case 1:
      aletmsg = "Please Select Your Gender";
      break;
    case 2:
      aletmsg = "Please Select Your Educational Qualification";
      break;
  }
  if (!valid) {
    alert(aletmsg)
  }
  return valid; 
}


// Success cuntainer show
function fomrmSuccess() {
  var finishContainer = document.getElementById('finish-res');
  finishContainer.style.display = "flex";
}




