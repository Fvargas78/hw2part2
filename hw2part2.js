/* Submit() function*/
function Submit() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
  
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
      document.getElementById("result").value = ("Error, Enter Number Only!");
        
    }
    else if (num1 === "" || num2 === "" || num3 === "") {
      document.getElementById("result").value = ("Error, Missing Number!");
      }

    else {
      num1 =parseFloat(num1);
      num2 =parseFloat(num2);
      num3 =parseFloat(num3);

      let sum = num1 + num2 + num3;
      let average = sum / 3;
      let product = num1 * num2 * num3;
      let min = Math.min(num1, num2, num3);
      let max = Math.max(num1, num2, num3);

      document.getElementById("result").value = (
        "Sum: " + sum +
        "\nAverage: " + average +
        "\nProduct: " + product +
        "\nMin: " + min +
        "\nMax: " + max);
    }
  
  }
  /* fadeTo() function*/
  function fadeTo() {
    $("#result").fadeTo("slow", 0.17);
  }
