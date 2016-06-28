// Utlizaremos una función anónima autoejecutable de modo que nuestras variables no sean globales. Más info: http://www.formandome.es/javascript/objetos-variables-funciones-javascript/

(function () {
    /* ---------------------------------- Variables locales ---------------------------------- */
    //var adapter = new WebSqlAdapter();
    //var adapter = new MemoryAdapter();
    //var adapter = new JSONPAdapter();
    var adapter = new LocalStorageAdapter();
    adapter.inicializar().done(function () {
        console.log("Inicializado: Adaptador de datos");
        //tengo que ejecutar el generar el c´odigo html
        renderHomeView();
    });

   function renderHomeView() {
    //vamos a hacer un template para que el c´odigo html me lo genere autom´aticamente */
     var html = "<header>" +
                   "<h1>Futbolistas</h1>" +
                "</header>" +
                "<input id='btnBuscar' type='search' placeholder='Introduce futbolista'/>" +
                "<ul id='lstFutbolistas'></ul>"
    $('body').html(html);
    $('#btnBuscar').on('keyup', encontrarPorNombre);
  }


    /* ---------------------------------- Funciones locales ---------------------------------- */
    function encontrarPorNombre() {
        adapter.encontrarPorNombre($('#btnBuscar').val()).done(function (futbolistas) {
            var l = futbolistas.length;
            var e;
            $('#lstFutbolistas').empty();
            for (var i = 0; i < l; i++) {
                e = futbolistas[i];
                $('#lstFutbolistas').append('<li><a href="#futbolistas/' + e.id + '">' + e.nombre + ' ' + e.apellido + '</a></li>');
            }
        });
    }

}());
