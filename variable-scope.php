<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php variable scope</title>
</head>
<body>

    <?php 
    
    $variable_a = 2;
    $variable_b = 3;

    function sub ():void {
        global $variable_a,$variable_b;

        /**
         * must be need to declare.
         * what type of variable use inside function. 
         */

        echo $variable_a + $variable_b;

        $variable_b = $variable_a + $variable_b;
    }

    sub();

    echo "</br>";

    echo $variable_b;
    
    ?>

    
</body>
</html>