<html>
    <head>
        <meta charset="utf-8">
        <title>Research</title>
        <?php include("templates/head.php"); ?>
        <script src="scripts/script.js"></script>
    </head>
    <body>
        <?php include('templates/header.php')?>
        <nav>
            <div class='navContainer'>
                <h1>Research options</h1>
                <!-- Components -->
                <input type="button" id="components" value="Components" />
                <div id="divComponents" class="divMainFilter">
                    <input type="button" id="type" value="PC Type">
                    <div id="divType" class="divFilter">
                        <label><input type="checkbox" id="fixe" data-filter="type" class='checkBox'>Fixe</label>
                        <label><input type="checkbox" id="portable" data-filter="type" class='checkBox'>Portable</label>
                    </div>
                    <input type="button" id="processor" value="Processor">
                    <div id="divCpuMarque" class="divFilter">
                        <label><input type="checkbox" id="INTELLE" data-filter="system.cpu.marque" class='checkBox'>INTELLE</label>
                        <label><input type="checkbox" id="AMDé" data-filter="system.cpu.marque" class='checkBox'>AMDé</label>
                    </div>
                    <input type="button" id="cg" value="GPU">
                    <div id="divCgMarque" class="divFilter">
                        <label><input type="checkbox" id="INTELLE" data-filter="system.cg.marque" class='checkBox'>INTELLE</label>
                        <label><input type="checkbox" id="NVADIA" data-filter="system.cg.marque" class='checkBox'>NVADIA</label>
                    </div>
                </div>
                <!-- Categories -->
                <input type="button" id="categories" value="Categories" />
                <div id="divCategories" class="divFilter">
                    <label><input type="checkbox" id="gaming" data-filter="categorie" class='checkBox'>Gaming</label>
                    <label><input type="checkbox" id="office" data-filter="categorie" class='checkBox'>Office</label>
                    <label><input type="checkbox" id="design" data-filter="categorie" class='checkBox'>Design</label>
                </div>

                <!-- Filter -->
                <h5>Filtrer les ordinateurs par prix</h5>
                <div class="slidecontainer" class="divFilter">
                    <input type="range" min="100" max="2000" value="100" class="slider" name="filtrePrix" id="filtrePrix">
                    <label id="filtrePrixLabel" for="filtrePrix"></label>€
                </div>

                <!-- Marque -->
                <input type="button" id="brand" value="Brand" />
                <div id="divBrand" class="divFilter">
                    <label><input type="checkbox" id="ASSER" data-filter="marque" class='checkBox'>ASSER</label>
                    <label><input type="checkbox" id="Azuss" data-filter="marque" class='checkBox'>Azuss</label>
                    <label><input type="checkbox" id="ROJ" data-filter="marque" class='checkBox'>ROJ</label>
                </div>
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
        <div id="maskAutobuild" style="display: none;"></div>
        <form id='autobuildForm' method='post' action='result.php' style="display: none;">
            <fieldset>
                <div>
                    <h1>Autobuild</h1>
                        <span><label>Price</label><input type='text' name='price' placeholder='$' required></span>
                        <span><label>Categories</label>
                            <select name='categories' size='1'>
                                <option value = ''></option>
                                <option value = 'Gamer'>Gamer</option>
                                <option value = 'Designer'>Designer</option>
                                <option value = 'Office'>Office</option>
                            </select>
                        </span>
                    <button id='bpAutobuild'>Find my PC!</button>
                </div >
                <img src='image/close.png' onclick ='removeAutobuild()'>
            </fieldset>
        </form>
    </body>
</html>