function hitungtotal() {
    let jumlah1 = Number(document.getElementById("subtotal1").value);
    let jumlah2 = Number(document.getElementById("subtotal2").value);
    let jumlah3 = Number(document.getElementById("subtotal3").value);
    let jumlah4 = Number(document.getElementById("subtotal4").value);
    let jumlah5 = Number(document.getElementById("subtotal5").value);

    let total = (jumlah1 * 45000) +
                (jumlah2 * 25000) +
                (jumlah3 * 15000) +
                (jumlah4 * 10000) +
                (jumlah5 * 7000);

    document.getElementById("hasil").innerHTML =
        "Total pembayaran: Rp" + total.toLocaleString("id-ID");
}