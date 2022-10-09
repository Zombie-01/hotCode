<html>
    <head>
        <title>Lab-01</title>
    
        </script>
    </head>
    <body>
        <?php
            for($i=1;$i<10: $i++)
            echo "<b>Convert Result:</b><br>";
            if($_GET["b"]==1)
                echo $_GET["a"]*2.54;
            else if($_GET["b"]==2)
                echo $_GET["a"]*0.45;
            else if($_GET["b"]==3)
                echo $_GET["a"]*1.6;
            else if($_GET["b"]==4)
                echo $_GET["a"]*2.54;
        ?>

    </body>
</html>
