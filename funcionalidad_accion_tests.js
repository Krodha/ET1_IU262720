let funcionalidad_accion_def_tests = 
//Array de arrays
Array(
    //id_funcionalidad --> ADD
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',1,'cumple tamaño minimo','min_size','ADD','id_funcionalidad_rolaccionfuncionalidad_min_size_ko','Identificador de funcionalidad demasiado corto. Debe tener al menos un dígito'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',2,'cumple tamaño máximo','max_size','ADD','id_funcionalidad_rolaccionfuncionalidad_max_size_ko','Identificador de funcionalidad demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',3,'cumple formato','format','ADD','id_funcionalidad_rolaccionfuncionalidad_format_ko','Identificador de funcionalidad no cumple formato. Solo se permiten números'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',4,'identificador correcto','valid','ADD',true,'Identificador de funcionalidad correcto'),
    //id_funcionalidad --> EDIT
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',5,'cumple tamaño minimo','min_size','EDIT','id_funcionalidad_rolaccionfuncionalidad_min_size_ko','Identificador de funcionalidad demasiado corto. Debe tener al menos un dígito'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',6,'cumple tamaño máximo','max_size','EDIT','id_funcionalidad_rolaccionfuncionalidad_max_size_ko','Identificador de funcionalidad demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',7,'cumple formato','format','EDIT','EDIT','id_funcionalidad_rolaccionfuncionalidad_format_ko','Identificador de funcionalidad no cumple formato. Solo se permiten números'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',8,'identificador correcto','valid','EDIT',true,'Identificador de funcionalidad correcto'),
    //id_funcionalidad --> SEARCH
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',9,'cumple tamaño minimo','min_size','SEARCH','id_funcionalidad_rolaccionfuncionalidad_min_size_ko','Identificador de funcionalidad demasiado corto. Debe tener al menos un dígito'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',10,'cumple tamaño máximo','max_size','SEARCH','id_funcionalidad_rolaccionfuncionalidad_max_size_ko','Identificador de funcionalidad demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',11,'cumple formato','format','SEARCH','id_funcionalidad_rolaccionfuncionalidad_format_ko','Identificador de funcionalidad no cumple formato. Solo se permiten números'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad','input',12,'identificador correcto','valid','SEARCH',true,'Identificador de funcionalidad correcto'),
    

    //id_accion --> ADD
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',13,'cumple tamaño minimo','min_size','ADD','id_accion_rolaccionfuncionalidad_min_size_ko','Identificador de accion demasiado corto. Debe tener al menos un dígito'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',14,'cumple tamaño máximo','max_size','ADD','id_accion_rolaccionfuncionalidad_max_size_ko','Identificador de accion demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',15,'cumple formato','format','ADD','id_accion_rolaccionfuncionalidad_format_ko','Identificador de accion no cumple formato. Solo se permiten números'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',16,'identificador correcto','valid','ADD',true,'Identificador de accion correcto'),
    //id_accion --> EDIT
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',17,'cumple tamaño minimo','min_size','EDIT','id_accion_rolaccionfuncionalidad_min_size_ko','Identificador de accion demasiado corto. Debe tener al menos un dígito'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',18,'cumple tamaño máximo','max_size','EDIT','id_accion_rolaccionfuncionalidad_max_size_ko','Identificador de accion demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',19,'cumple formato','format','EDIT','id_accion_rolaccionfuncionalidad_format_ko','Identificador de accion no cumple formato. Solo se permiten números'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',20,'identificador correcto','valid','EDIT',true,'Identificador de accion correcto'),
    //id_accion --> SEARCH
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',21,'cumple tamaño minimo','min_size','SEARCH','id_accion_rolaccionfuncionalidad_min_size_ko','Identificador de accion demasiado corto. Debe tener al menos un dígito'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',22,'cumple tamaño máximo','max_size','SEARCH','id_accion_rolaccionfuncionalidad_max_size_ko','Identificador de accion demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',23,'cumple formato','format','SEARCH','id_accion_rolaccionfuncionalidad_format_ko','Identificador de accion no cumple formato. Solo se permiten números'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad','input',24,'identificador correcto','valid','SEARCH',true,'Identificador de accion correcto'),
);

//Definicion de pruebas que usen los tests creados anteriormente
let funcionalidad_accion_pruebas = 
Array(
    //id_funcionalidad --> ADD
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',1,1,'ADD',{id_funcionalidad_rolaccionfuncionalidad:''},'id_funcionalidad_rolaccionfuncionalidad_min_size_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',2,2,'ADD',{id_funcionalidad_rolaccionfuncionalidad:1234567891011},'id_funcionalidad_rolaccionfuncionalidad_max_size_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',3,3,'ADD',{id_funcionalidad_rolaccionfuncionalidad:'A3j'},'id_funcionalidad_rolaccionfuncionalidad_format_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',4,4,'ADD',{id_funcionalidad_rolaccionfuncionalidad:123456},true),
    //id_funcionalidad --> EDIT
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',5,5,'EDIT',{id_funcionalidad_rolaccionfuncionalidad:''},'id_funcionalidad_rolaccionfuncionalidad_min_size_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',6,6,'EDIT',{id_funcionalidad_rolaccionfuncionalidad:1234567891011},'id_funcionalidad_rolaccionfuncionalidad_max_size_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',7,7,'EDIT',{id_funcionalidad_rolaccionfuncionalidad:'A3j'},'id_funcionalidad_rolaccionfuncionalidad_format_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',8,8,'EDIT',{id_funcionalidad_rolaccionfuncionalidad:123456},true),
    //id_funcionalidad --> SEARCH
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',9,9,'SEARCH',{id_funcionalidad_rolaccionfuncionalidad:''},'id_funcionalidad_rolaccionfuncionalidad_min_size_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',10,10,'SEARCH',{id_funcionalidad_rolaccionfuncionalidad:1234567891011},'id_funcionalidad_rolaccionfuncionalidad_max_size_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',11,11,'SEARCH',{id_funcionalidad_rolaccionfuncionalidad:'A3j'},'id_funcionalidad_rolaccionfuncionalidad_format_ko'),
    Array('rolaccionfuncionalidad','id_funcionalidad_rolaccionfuncionalidad',12,12,'SEARCH',{id_funcionalidad_rolaccionfuncionalidad:123456},true),


    //id_accion --> ADD
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',13,13,'ADD',{id_accion_rolaccionfuncionalidad:''},'id_accion_rolaccionfuncionalidad_min_size_ko'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',14,14,'ADD',{id_accion_rolaccionfuncionalidad:1234567891011},'id_accion_rolaccionfuncionalidad_max_size_ko'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',15,15,'ADD',{id_accion_rolaccionfuncionalidad:'A3j'},'id_accion_rolaccionfuncionalidad_format_ko'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',16,16,'ADD',{id_accion_rolaccionfuncionalidad:123456},true),
    //id_accion --> EDIT
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',17,17,'EDIT',{id_accion_rolaccionfuncionalidad:''},'id_accion_rolaccionfuncionalidad_min_size_ko'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',18,18,'EDIT',{id_accion_rolaccionfuncionalidad:1234567891011},'id_accion_rolaccionfuncionalidad_max_size_ko'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',19,19,'EDIT',{id_accion_rolaccionfuncionalidad:'A3j'},'id_accion_rolaccionfuncionalidad_format_ko'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',20,20,'EDIT',{id_accion_rolaccionfuncionalidad:123456},true),
    //id_accion --> SEARCH
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',21,21,'SEARCH',{id_accion_rolaccionfuncionalidad:''},'id_accion_rolaccionfuncionalidad_min_size_ko'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',22,22,'SEARCH',{id_accion_rolaccionfuncionalidad:1234567891011},'id_accion_rolaccionfuncionalidad_max_size_ko'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',23,23,'SEARCH',{id_accion_rolaccionfuncionalidad:'A3j'},'id_accion_rolaccionfuncionalidad_format_ko'),
    Array('rolaccionfuncionalidad','id_accion_rolaccionfuncionalidad',24,24,'SEARCH',{id_accion_rolaccionfuncionalidad:123456},true),
);
