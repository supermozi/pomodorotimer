function onStart() {
    let state = document.getElementById("timertoggle").innerHTML;
    if (state === "start") {
        document.getElementById("timertoggle").innerHTML = "pause";
        document.getElementById("seconds").disabled = true;
        document.getElementById("minutes").disabled = true;
        setTimeout(changeTime, 200)
    } else if (state === "pause") {
        document.getElementById("timertoggle").innerHTML = "start";
        document.getElementById("seconds").disabled = false;
        document.getElementById("minutes").disabled = false;
    } else if (state === "reset") {
        document.getElementById("timertoggle").innerHTML = "start";
        document.getElementById("ring").className = "ring";
        document.getElementById("seconds").disabled = false;
        document.getElementById("minutes").disabled = false;    
    }
  }



function changeTime() {
    let secondsValue = Number(document.getElementById("seconds").value);
    let minutesValue = Number(document.getElementById("minutes").value);

    if (minutesValue === 0 && secondsValue === 0) {
        document.getElementById("ring").className = "ring ending";
        document.getElementById("timertoggle").innerHTML = "reset";
        return;
    }

    if (document.getElementById("timertoggle").innerHTML === "start") {
        return;
    }

    if (secondsValue === 0) {
        secondsValue = 59;
        minutesValue = minutesValue - 1;
    } else {
        secondsValue = secondsValue - 1;
    }

    if (secondsValue < 10) {
        secondsValue = "0" + secondsValue;
    }
    if (minutesValue < 10) {
        minutesValue = "0" + minutesValue;
    }

    document.getElementById("seconds").value =  secondsValue;
    document.getElementById("minutes").value = minutesValue;
    setTimeout(changeTime, 200);
  }