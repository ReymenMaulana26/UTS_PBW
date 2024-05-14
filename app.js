function search() {
  let filter = document.getElementById("find").value.toUpperCase();

  let item = document.querySelectorAll(".product");

  let l = document.getElementsByClassName("product-title");

  for (var i = 0; i <= l.length; i++) {
    let a = item[i].getElementsByClassName("product-title")[0];

    let value = a.innerHTML || a.innerText || a.textContent;

    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

function FuncPesanan() {
  alert("Pesanan anda sudah kami terima!");
}
