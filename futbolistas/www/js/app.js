// Utlizaremos una función anónima autoejecutable de modo que nuestras variables no sean globales. Más info: http://www.formandome.es/javascript/objetos-variables-funciones-javascript/

(function() {
  /* ---------------------------------- Variables locales ---------------------------------- */
  //var adapter = new WebSqlAdapter();
  //var adapter = new MemoryAdapter();
  //var adapter = new JSONPAdapter();
  var adapter = new LocalStorageAdapter();
  adapter.inicializar().done(function() {
    console.log("Inicializado: Adaptador de datos");
    //tengo que ejecutar el generar el c´odigo html
    /* la quito cuando he hecho la clase homeview 
    renderHomeView(); */
     $('body').html(new HomeView(adapter).render());
  });



/*Cuando he hecho el homeview, este c´odigo me sobra

  function encontrarPorNombre() {
    adapter.encontrarPorNombre($('#btnBuscar').val()).done(function(futbolistas) {
      $("#lstFutbolistas").html(Handlebars.templates.listaJugadores(futbolistas));
    });
  }

  function renderHomeView() {
    $('body').html(Handlebars.templates.home());
    $('#btnBuscar').on('keyup', encontrarPorNombre);
  }
*/
}());
