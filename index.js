function detail_barang() {
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('nama');
    const harga = urlParams.get('harga');
    const gambar = urlParams.get('gambar');
    document.getElementById("nama").setAttribute("value", nama);
    document.getElementById("harga").setAttribute("value", harga);
    document.getElementsByClassName("photo").setAttribute("src", gambar)
}