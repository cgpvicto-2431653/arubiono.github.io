<?php
require ('include/entete.inc')
?>
<body>
<nav>
    <div class="container">
        <a href="index.php" class="active">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
        <a href="#">Menu 4</a>
        <a href="#">Menu 5</a>
        <a href="a-propos.php">À propos</a>
        <a href="a-venir.php">À venir</a>
    </div>
</nav>
<div class="separation"></div>
<header>
    <div class="logo-text container">
        <div class="logo"><img src="medias/commun/logoLanParty.png"></div>
        <div>
            <div class="title">LAN party!</div>
            <div class="slogan">Celui que vous ne voulez pas manquer</div>
        </div>
    </div>
</header>
<div class="separation"></div>
<div id="main">
    <div class="container">
        <h1>Tableau de bord</h1>

        <div class="items">
            <div class="item first">
                <a href="#">
                    <div class="content">

                    </div>
                    <div class="caption">
                        <div class="middle">
                            <i id='id_a' class="fa-solid fa-heart"></i>
                        </div>
                        <div class="title">a</div>
                        <div class="subtitle">a</div>
                    </div>
                </a>
            </div>
            <div class="item second">
                <a href="#">
                    <div class="content">

                    </div>
                    <div class="caption">
                        <div class="middle">
                            <i id='id_b' class="fa-solid fa-heart"></i>
                        </div>
                        <div class="title">b</div>
                        <div class="subtitle">b</div>
                    </div>
                </a>
            </div>
            <div class="item third">
                <a href="#">
                    <div class="content">
                        Équipe éliminée ;-(
                    </div>
                    <div class="caption">
                        <div class="middle">
                            <i id='id_c' class="fa-solid fa-heart"></i>
                        </div>
                        <div class="title">c</div>
                        <div class="subtitle">c</div>
                    </div>
                </a>
            </div>
            <div class="item fourth">
                <a href="#">
                    <div class="content">

                    </div>
                    <div class="caption">
                        <div class="middle">
                            <i id='id_d' class="fa-solid fa-heart"></i>
                        </div>
                        <div class="title">d</div>
                        <div class="subtitle">d</div>
                    </div>
                </a>
            </div>
            <div class="item fifth">
                <a href="#">
                    <div class="content">

                    </div>
                    <div class="caption">
                        <div class="middle">
                            <i id='id_e' class="fa-solid fa-heart"></i>
                        </div>
                        <div class="title">e</div>
                        <div class="subtitle">e</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
<?php
require ('include/pied-page.inc');
?>
