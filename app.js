import { BibliotecaService } from './servicios/BibliotecaService.js';
import { mostrarInfoFlecha } from './helpers/Funciones.js';
import { Libro } from './entidades/Libro.js';


// Demostración función helper
console.log(mostrarInfoFlecha());

// Crear instancia del servicio
const biblioteca = new BibliotecaService();
console.log(biblioteca.infoSistema());

// Agregar datos usando diferentes métodos
biblioteca.agregarLibro("Cien años de soledad", "García Márquez", "123456");
biblioteca.registrarUsuario("Ana Torres", "001");

// Uso de método estático con función flecha
const libroDemo = Libro.crearLibroDemo();
biblioteca.libros.push(libroDemo);

// Buscar libros (con callback tradicional)
biblioteca.buscarLibroPorTitulo("soledad", function(resultados) {
  console.log("\nResultados de búsqueda (tradicional):");
  resultados.forEach(libro => console.log(libro.descripcion));
});

// Buscar usuarios (con callback flecha)
biblioteca.buscarUsuarioPorNombre("ana", resultados => {
  console.log("\nUsuarios encontrados (flecha):");
  resultados.forEach(user => console.log(user.nombre));
});

// Interactuar con métodos de instancia
const usuario = biblioteca.usuarios[0];
const libro = biblioteca.libros[0];

// Usar método tradicional
usuario.tomarPrestado(libro);

// Usar método flecha
usuario.devolverLibro(libro);

// Mostrar historial
usuario.mostrarHistorial();