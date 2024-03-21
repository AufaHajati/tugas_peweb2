
// App.js
import React from "react";
import "./App.css";

function Biodata() {
    return (

      

        <div className="App">
            <header>
                <h1 className="colored-title"> </h1>
            </header>
           
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
                                <li><a href="kontak.js" target="_blank">kontak</a></li>
                            </ul>
                        </div>
                    </div>
                </nav> 

                <section class="contact-form">
                    <h2 class="contact-me">Informasi lebih <span>lanjut</span></h2>
                    <form action="#">
                        <div class="input-box">
                            <input type="text" placeholder="Nama"/>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div class="input-box">
                            <input type="text" placeholder="Nomor Telepon"/>
                        </div>
                        <textarea name="" id="" cols="" rows="10" placeholder="Pesan"></textarea>
                        <input type="submit" value="Kirim" class="btn-1"/>
                    </form>
                </section>

                <footer class="footer">
                    <ul class="list">
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">About Me</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                    <p class="copyright">Aufa Hajati 2024</p>
                </footer>
            </body>
        </div>
    );
}

export default Biodata;
