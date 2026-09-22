let rol_def_tests = 
//Array de arrays
Array(
    //Esquema de arrays para definicion de tests...
    Array('entidad','campo_entidad','elemento_formulario',1,'descripcion_test','validacion_atomica','accion','nombre_error_ko','Descripcion_del_fallo_y_como_solucionarlo'),
    Array('entidad','campo_entidad','elemento_formulario',2,'descripcion_test','validacion_atomica','accion','nombre_error_ko','Descripcion_del_fallo_y_como_solucionarlo'),

);

//Definicion de pruebas que usen los tests creados anteriormente
let rol_pruebas = 
Array(
    //Esquema de arrays para la definicion de pruebas...
    Array('entidad','campo_entidad',1,1,'accion',{atributo:'valores_a_probar_en_atributo'},'resultado_esperado_de_la_prueba'),
    Array('entidad','campo_entidad',2,2,'accion',{atributo:'valores_a_probar_en_atributo'},'resultado_esperado_de_la_prueba'),
);