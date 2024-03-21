// App.js
import React from "react";
import "./App.css";

function App() {
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
    <div class="porto">
        <section id="portofolio">
            
                <img src="image/pribadi4.jpeg"/>
                <div class="kolom">
                    <h2>My soft skills</h2>
                    <p>Saya adalah seorang mahasiswa yang memilki sifat ingin tahu, kreatif dan juga inovatif. saya juga dapat dengan mudah untuk berkomunikasi dan beradaptasi. </p>
                    <p>Dibidang teknologi, saya pernah membuat aplikasi kasir bersama teman kelompok saya sebagai bagian dari proses pembelajaran di kampus.  </p>
                </div>
           

        </section>

    </div>
        
    </body>
   );
}  
export default Portofolio;