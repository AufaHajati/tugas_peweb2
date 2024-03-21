// App.js
import React from "react";
import "./App.css";



function Galeri() {
    return (
 
       
<body>
    <nav>
        <div class="wrapper">
            <div class="logo"><a href=''>AufaWeb.</a></div>
            <div class="menu">
                <ul>
                    <li><a href="index.js" target="_blank" class="active">Home</a></li>
                    <li><a href="biodata.js" target="_blank">Biodata</a></li>
                    <li><a href="prestasi.js" target="_blank">Prestasi</a></li>
                    <li><a href="galeri.js" target="_blank">Galeri</a></li>
                    <li><a href="portofolio.js" target="_blank">Portofolio</a></li>
                    <li><a href="kontak.js" target="_blank">Kontak</a></li>
                </ul>
            </div>
        </div>
    </nav> 

    <div class="foto">
        <img src="image/drumband.jpeg" alt="Foto 1" width="500px"/>
        <img src="image/paskip1.jpeg" alt="Foto 2" width="500px"/>
        <img src="image/paskip2.jpeg" alt="Foto 3" width="500px"/>
        <img src="image/paskip3.jpeg" alt="Foto 4" width="500px"/>
        <img src="image/paskipsmp.jpeg" alt="Foto 5" width="500px"/>
        <img src="image/pribadi2.jpeg" alt="Foto 6" width="500px"/>
        <img src="image/pribadi3.jpeg" alt="Foto 7" width="500px"/>
        <img src="image/pribadi4.jpeg" alt="Foto 8" width="500px"/>
    </div>

</body>
  );
}
export default Galeri;