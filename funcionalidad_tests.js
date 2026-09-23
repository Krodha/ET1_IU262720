let funcionalidad_def_tests = 
Array(
    // id_funcionalidad --> ADD
    Array('funcionalidad','id_funcionalidad','input',1,'Comprobar tamaño mínimo','min_size','ADD','id_funcionalidad_min_size_ko','El id de la funcionalidad tiene una longitud inválida. Introduce por lo menos 1 dígito.'),
    Array('funcionalidad','id_funcionalidad','input',2,'Comprobar tamaño máximo','max_size','ADD','id_funcionalidad_max_size_ko','El id de la funcionalidad tiene una longitud inválida. Introduce como mucho 11 dígitos.'),
    Array('funcionalidad','id_funcionalidad','input',3,'Comprobar formato','format','ADD','id_funcionalidad_format_ko','El id de la funcionalidad tiene un formato inválido. Sólo se pueden introducir los dígitos del 0 al 9.'),
    Array('funcionalidad','id_funcionalidad','input',4,'Formato válido','valid','ADD',true,'id funcionalidad correcto.'),

    // nombre_funcionalidad --> ADD
    Array('funcionalidad','nombre_funcionalidad','input',5,'Comprobar tamaño mínimo','min_size','ADD','nombre_funcionalidad_min_size_ko','El nombre de la funcionalidad tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('funcionalidad','nombre_funcionalidad','input',6,'Comprobar tamaño máximo','max_size','ADD','nombre_funcionalidad_max_size_ko','El nombre de la funcionalidad tiene una longitud inválida. Introduce como mucho 48 caracteres.'),
    Array('funcionalidad','nombre_funcionalidad','input',7,'Comprobar formato','format','ADD','nombre_funcionalidad_format_ko','El nombre de la funcionalidad tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ).'),
    Array('funcionalidad','nombre_funcionalidad','input',8,'Formato válido','valid','ADD',true,'Nombre funcionalidad correcto.'),
    // nombre_funcionalidad --> EDIT
    Array('funcionalidad','nombre_funcionalidad','input',9,'Comprobar tamaño mínimo','min_size','EDIT','nombre_funcionalidad_min_size_ko','El nombre de la funcionalidad tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('funcionalidad','nombre_funcionalidad','input',10,'Comprobar tamaño máximo','max_size','EDIT','nombre_funcionalidad_max_size_ko','El nombre de la funcionalidad tiene una longitud inválida. Introduce como mucho 48 caracteres.'),
    Array('funcionalidad','nombre_funcionalidad','input',11,'Comprobar formato','format','EDIT','nombre_funcionalidad_format_ko','El nombre de la funcionalidad tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ).'),
    Array('funcionalidad','nombre_funcionalidad','input',12,'Formato válido','valid','EDIT',true,'Nombre funcionalidad correcto.'),

    // descrip_funcionalidad --> ADD
    Array('funcionalidad','descrip_funcionalidad','textarea',13,'Comprobar tamaño mínimo','min_size','ADD','descrip_funcionalidad_min_size_ko','La descripción de la funcionalidad tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',14,'Comprobar tamaño máximo','max_size','ADD','descrip_funcionalidad_max_size_ko','La descripción de la funcionalidad tiene una longitud inválida. Introduce como mucho 200 caracteres.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',15,'Comprobar formato','format','ADD','descrip_funcionalidad_format_ko','La descripción de la funcionalidad tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ), espacio y signos de puntuación.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',16,'Formato válido','valid','ADD',true,'descripción de funcionalidad correcta.'),
    // descrip_funcionalidad --> EDIT
    Array('funcionalidad','descrip_funcionalidad','textarea',17,'Comprobar tamaño mínimo','min_size','EDIT','descrip_funcionalidad_min_size_ko','La descripción de la funcionalidad tiene una longitud inválida. Introduce por lo menos 5 caracteres.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',18,'Comprobar tamaño máximo','max_size','EDIT','descrip_funcionalidad_max_size_ko','La descripción de la funcionalidad tiene una longitud inválida. Introduce como mucho 200 caracteres.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',19,'Comprobar formato','format','EDIT','descrip_funcionalidad_format_ko','La descripción de la funcionalidad tiene un formato inválido. Los caracteres válidos son el alfabeto (con ñ), espacio y signos de puntuación.'),
    Array('funcionalidad','descrip_funcionalidad','textarea',20,'Formato válido','valid','EDIT',true,'descripción de funcionalidad correcta.'),
);

let funcionalidad_pruebas = 
Array(
    // id_funcionalidad --> ADD
    Array('funcionalidad','id_funcionalidad',1,1,'ADD',{id_funcionalidad:''},'id_funcionalidad_min_size_ko'),
    Array('funcionalidad','id_funcionalidad',2,2,'ADD',{id_funcionalidad:'123456789012'},'id_funcionalidad_max_size_ko'),
    Array('funcionalidad','id_funcionalidad',3,3,'ADD',{id_funcionalidad:'abcd'},'id_funcionalidad_format_ko'),
    Array('funcionalidad','id_funcionalidad',4,4,'ADD',{id_funcionalidad:'123'},true),

    // nombre_funcionalidad --> ADD
    Array('funcionalidad','nombre_funcionalidad',5,5,'ADD',{nombre_funcionalidad:'abcd'},'nombre_funcionalidad_min_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',6,6,'ADD',{nombre_funcionalidad:'a'.repeat(49)},'nombre_funcionalidad_max_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',7,7,'ADD',{nombre_funcionalidad:'ab-d23'},'nombre_funcionalidad_format_ko'),
    Array('funcionalidad','nombre_funcionalidad',8,8,'ADD',{nombre_funcionalidad:'nombreñ'},true),
    // nombre_funcionalidad --> EDIT
    Array('funcionalidad','nombre_funcionalidad',9,9,'EDIT',{nombre_funcionalidad:'abcd'},'nombre_funcionalidad_min_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',10,10,'EDIT',{nombre_funcionalidad:'a'.repeat(49)},'nombre_funcionalidad_max_size_ko'),
    Array('funcionalidad','nombre_funcionalidad',11,11,'EDIT',{nombre_funcionalidad:'ab-d23'},'nombre_funcionalidad_format_ko'),
    Array('funcionalidad','nombre_funcionalidad',12,12,'EDIT',{nombre_funcionalidad:'nombreñ'},true),

    // descrip_funcionalidad --> ADD
    Array('funcionalidad','descrip_funcionalidad',13,13,'ADD',{descrip_funcionalidad:'abcd'},'descrip_funcionalidad_min_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',14,14,'ADD',{descrip_funcionalidad:'a'.repeat(201)},'descrip_funcionalidad_max_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',15,15,'ADD',{descrip_funcionalidad:'funcion@lidad23'},'descrip_funcionalidad_format_ko'),
    Array('funcionalidad','descrip_funcionalidad',16,16,'ADD',{descrip_funcionalidad:'descrip.,; Descrip-ñ'},true),
    // descrip_funcionalidad --> EDIT
    Array('funcionalidad','descrip_funcionalidad',17,17,'EDIT',{descrip_funcionalidad:'abcd'},'descrip_funcionalidad_min_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',18,18,'EDIT',{descrip_funcionalidad:'a'.repeat(201)},'descrip_funcionalidad_max_size_ko'),
    Array('funcionalidad','descrip_funcionalidad',19,19,'EDIT',{descrip_funcionalidad:'funcion@lidad23'},'descrip_funcionalidad_format_ko'),
    Array('funcionalidad','descrip_funcionalidad',20,20,'EDIT',{descrip_funcionalidad:'descrip.,; Descrip-ñ'},true),
);
