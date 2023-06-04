// <!-- JAVASCRIPT -->

    function test() {
        document.getElementById("btn").onmouseenter = (event) => {
            // alert("test");
            document.getElementById("testdiv").innerHTML = "<h1 style='color:blue;'>none</h1>";
    };
        document.getElementById("btn").onmouseleave = (event) => {
            // alert("test");
            document.getElementById("testdiv").innerHTML = "<h1 style='color:red;'>none</h1>";
    };
}