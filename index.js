window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('nama');
    const harga = urlParams.get('harga');
    const gambar = urlParams.get('gambar');
    // document.getElementById("nama").setAttribute("value", nama);
    document.getElementById("nama").innerHTML = nama;
    document.getElementById("harga").innerHTML = harga;
    // document.getElementById("harga").setAttribute("value", harga);
    document.getElementById("gambar").setAttribute("src", gambar)
};
var counter = 0;
function plus() {
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
}
function minus() {
    counter -= 1;
    if (counter > -1) {
        document.getElementById("counter").innerHTML = counter;
    } else {
        counter += 1
    }
}
var items = [];
function addToCart() {
    var gambar = document.getElementById("gambar").src;
    var nama = document.getElementById("nama").innerText;
    var harga = document.getElementById("harga").innerText;
    var counter = document.getElementById("counter").innerText;
    if (counter > 0) {
        items.push([gambar,nama,harga,counter]);
        console.log(items);
    };
}
function pesan() {
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var pengiriman = document.getElementById("pengiriman").value;
    var kurir = document.getElementById("kurir").value;
    var pembayaran = document.getElementById("pembayaran").value;
    if (nama !== "" && alamat !== "" && pengiriman !== "" && kurir !== "" && pembayaran !== ""){
        var harga1 = parseInt(document.getElementById("harga1").innerText.replace(/\.|Rp/gi,''));
        var harga2 = parseInt(document.getElementById("harga2").innerText.replace(/\.|Rp/gi,''));
        var harga3 = parseInt(document.getElementById("harga3").innerText.replace(/\.|Rp/gi,''));
        var jumlah1 = parseInt(document.getElementById("jumlah1").innerText.replace(/\:|Jumlah/gi,''));
        var jumlah2 = parseInt(document.getElementById("jumlah2").innerText.replace(/\:|Jumlah/gi,''));
        var jumlah3 = parseInt(document.getElementById("jumlah3").innerText.replace(/\:|Jumlah/gi,''));
        var harga = (harga1 * jumlah1) + (harga2 * jumlah2) + (harga3 * jumlah3);
        var ongkos = 50000;
        var total = harga + ongkos;
        document.getElementById("harga").innerHTML = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(harga);
        document.getElementById("ongkos").innerHTML = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(ongkos);
        document.getElementById("total").innerHTML = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total);
    }
}