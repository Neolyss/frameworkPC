<html>
    <head>
        <meta charset="utf-8">
        <title>Research</title>
        <?php include("templates/head.php"); ?>
        <script src="script.js"></script>
    </head>
    <body>
        <?php include('templates/header.php')?>
        <nav>
            <div class='navContainer'>
                <h1>Research options</h1>
                <!-- Components -->
                <input type="button" id="components" value="Components" />
                <br>
                <div id="divComponents">
                    <input type="button" id="type" value="PC Type">
                    <div id="divType">
                        <input type="checkbox" id="fixe" data-filter="type" class='checkBox'><label>Fixe</label>
                        <input type="checkbox" id="portable" data-filter="type" class='checkBox'><label>Portable</label>
                    </div>
                    <br>
                    <input type="checkbox" id="RAM" class='checkBox'>- RAM
                    <br>
                    <input type="checkbox" id="Processor" class='checkBox'>- Processor
                    <br>
                </div>
                <!-- Categories -->
                <input type="button" id="categories" value="Categories" />
                <br>
                <div id="divCategories">
                    <input type="checkbox" id="gaming" data-filter="categorie" class='checkBox'>- Gaming
                    <br>
                    <input type="checkbox" id="office" data-filter="categorie" class='checkBox'>- Office
                    <br>
                    <input type="checkbox" id="design" data-filter="categorie" class='checkBox'>- Design
                    <br>
                    <br>
                </div>

                <!-- Filter -->
                <h5>Filtrer les ordinateurs par prix</h5>
                <div class="slidecontainer">
                    <input type="range" min="100" max="2000" value="100" class="slider" name="filtrePrix" id="filtrePrix">
                    <label id="filtrePrixLabel" for="filtrePrix"></label>€
                </div>

                <!-- Marque -->
                <input type="button" id="brand" value="Brand" />
                <br>
                <div id="divBrand">
                    <input type="checkbox" id="ASSER" data-filter="marque" class='checkBox'>- ASSER
                    <br>
                    <input type="checkbox" id="Azuss" data-filter="marque" class='checkBox'>- Azuss
                    <br>
                    <input type="checkbox" id="ROJ" data-filter="marque" class='checkBox'>- ROJ
                    <br>
                </div>
                 <br>
            </div>
        </nav>
        <main>
            <div id="resultat">
                <div id="resultatFiltre" class="row"></div>
            </div>
            <select class="select-style" onchange="select(this)">
                <option value ='0' selected>--Sort by--</option>
                <option value='1'>Name</option>
                <option value='2'>Lowest price</option>
                <option value='3'>Highest price</option>
                <option value='4'>Rate</option>
            </select>
            </div>
        </main>
        <?php include('templates/footer.php')?>
    </body>
</html>