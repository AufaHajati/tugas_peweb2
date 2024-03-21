// App.js
import React from "react";
import "./App.css";


function Prestasi() {
    return (
       
<body>
    
    <nav>
        <div class="wrapper">
            <div class="logo"><a href=''>AufaWeb.</a></div>
            <div class="menu">
                <ul>
                    <li><a href="index.js"target="_blank" class="active">Home</a></li>
                    <li><a href="biodata.js"target="_blank">Biodata</a></li>
                    <li><a href="prestasi.js"target="_blank">Prestasi</a></li>
                    <li><a href="galeri.js"target="_blank">Galeri</a></li>
                    <li><a href="portofolio.js"target="_blank">Portofolio</a></li>
                    <li><a href="kontak.js"target="_blank">kontak</a></li>
                    
                </ul>
            </div>
        </div>
    </nav> 

    <div class="container">
        <h1>Prestasi</h1>
        <div class="prestasi">
            <p>- Peringkat 3 di kelas selama tiga tahun di Madrasah Aliyah</p>
        </div>
        <div class="prestasi">
            <p>- Anggota paskibra desa Kepau Jaya 2018</p>
        </div>
        <div class="prestasi">
            <p>- Anggota paskibra desa Buluh Nipis 2023</p>
        </div>
    </div>

</body>
 );
}  
export default Prestasi;