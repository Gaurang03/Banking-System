var button = document.getElementById("buttons");

button.addEventListener("click", function () {
  document.querySelector(".header").style.display = "flex";
});

document.getElementById("pic-win").addEventListener("click", function () {
  document.querySelector(".header").style.display = "none";
});

var send = document.getElementById("send");
send.addEventListener("click", function () {
  document.querySelector(".header").style.display = "none";

  var value = document.getElementById("name").value;

  var store_amt = document.getElementById("amt").value;
  var store_amount = parseFloat(store_amt);
  var r = document.getElementById("raj").innerHTML;
  var amt = document.getElementById("2001010").innerHTML;
  var namt = parseFloat(amt);
  var tamt = store_amount + namt;

  var a = document.getElementById("sid").innerHTML;
  var aamt = document.getElementById("2001011").innerHTML;
  var naamt = parseFloat(aamt);
  var taamt = store_amount + naamt;

  var b = document.getElementById("ram").innerHTML;
  var bmt = document.getElementById("2001012").innerHTML;
  var nbmt = parseFloat(bmt);
  var tbmt = store_amount + nbmt;

  var ta = document.getElementById("krishna").innerHTML;
  var tamtt = document.getElementById("2001013").innerHTML;
  var ntamt = parseFloat(tamtt);
  var ttamt = store_amount + ntamt;

  var v = document.getElementById("rahul").innerHTML;
  var vmt = document.getElementById("2001014").innerHTML;
  var nvmt = parseFloat(vmt);
  var tvmt = store_amount + nvmt;

  var m = document.getElementById("shiva").innerHTML;
  var mmt = document.getElementById("2001015").innerHTML;
  var nmmt = parseFloat(mmt);
  var tmmt = store_amount + nmmt;

  var w = document.getElementById("kartik").innerHTML;
  var wmt = document.getElementById("2001016").innerHTML;
  var nwmt = parseFloat(wmt);
  var twmt = store_amount + nwmt;

  var p = document.getElementById("vineet").innerHTML;
  var pmt = document.getElementById("2001017").innerHTML;
  var npmt = parseFloat(pmt);
  var tpmt = store_amount + npmt;

  var i = document.getElementById("aman").innerHTML;
  var imt = document.getElementById("2001018").innerHTML;
  var nimt = parseFloat(imt);
  var timt = store_amount + nimt;

  var q = document.getElementById("dev").innerHTML;
  var qmt = document.getElementById("2001019").innerHTML;
  var nqmt = parseFloat(qmt);
  var tqmt = store_amount + nqmt;
  var bal_acc = parseFloat(document.getElementById("total-balance").innerHTML);

  if (bal_acc >= store_amount) {
    if (value === r) {
      document.getElementById("2001010").innerHTML = tamt;
      alert(
        "Transaction is successful " +
          "An amount of " +
          store_amount +
          " has been transferred to " +
          r
      );
      document.getElementById("total-balance").innerHTML =
        bal_acc - store_amount;
    } else if (value === a) {
      document.getElementById("2001011").innerHTML = taamt;
      alert(
        "Transaction is successful " +
          "An amount of " +
          store_amount +
          " has been transferred to " +
          a
      );
      document.getElementById("total-balance").innerHTML =
        bal_acc - store_amount;
    } else if (value === b) {
      document.getElementById("2001012").innerHTML = tbmt;
      alert(
        "Transaction is successful " +
          "An amount of " +
          store_amount +
          " has been transferred to " +
          b
      );
      document.getElementById("total-balance").innerHTML =
        bal_acc - store_amount;
    } else if (value === ta) {
      document.getElementById("2001013").innerHTML = ttamt;
      alert(
        "Transaction is successful " +
          "An amount of " +
          store_amount +
          " has been transferred to " +
          ta
      );

      document.getElementById("total-balance").innerHTML =
        bal_acc - store_amount;
    } else if (value === v) {
      document.getElementById("2001014").innerHTML = tvmt;
      alert(
        "Transaction is successful " +
          "An amount of " +
          store_amount +
          " has been transferred to " +
          v
      );

      document.getElementById("total-balance").innerHTML =
        bal_acc - store_amount;
    } else if (value === m) {
      document.getElementById("2001015").innerHTML = tmmt;
      alert(
        "Transaction is successful " +
          "An amount of " +
          store_amount +
          " has been transferred to " +
          m
      );
      document.getElementById("total-balance").innerHTML =
        bal_acc - store_amount;
    } else if (value === w) {
      document.getElementById("2001016").innerHTML = twmt;
      alert(
        "Transaction is successful " +
          "An amount of " +
          store_amount +
          " has been transferred to " +
          w
      );
      document.getElementById("total-balance").innerHTML =
        bal_acc - store_amount;
    } else if (value === p) {
      document.getElementById("2001017").innerHTML = tpmt;
      alert(
        "Transaction is successful " +
          "An amount of " +
          store_amount +
          " has been transferred to " +
          p
      );
      document.getElementById("total-balance").innerHTML =
        bal_acc - store_amount;
    } else if (value === i) {
      document.getElementById("2001018").innerHTML = timt;
      alert(
        "Transaction is successful " +
          "An amount of " +
          store_amount +
          " has been transferred to " +
          i
      );
      document.getElementById("total-balance").innerHTML =
        bal_acc - store_amount;
    } else if (value === q) {
      document.getElementById("2001019").innerHTML = tqmt;
      alert(
        "Transaction is successful " +
          "An amount of " +
          store_amount +
          " has been transferred to " +
          q
      );
      document.getElementById("total-balance").innerHTML =
        bal_acc - store_amount;
    } else {
      alert("Invalid User Id. Failed Transaction!");
    }
  } else {
    alert("You do not have sufficient balance in your account");
  }
});
