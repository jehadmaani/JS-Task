let c = 0;
Try_Pass = prompt("Enter The Password");
while (c < 4) {
  if (Try_Pass != "123") {
    Try_Pass = prompt("Re-try The Password");
    c = c + 1;
  } else {
    alert("WELCOME");
    break;
  }
}
if (c >= 4) {
  alert("Try in onther time");
}
