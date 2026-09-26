let funcionalidad_accion_def_tests = 
//Array de arrays
Array(
    //id_funcionalidad --> ADD
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',1,'cumple tamaño minimo','min_size','ADD','id_funcionalidad_funcionalidad_accion_min_size_ko','Identificador de funcionalidad demasiado corto. Debe tener al menos un dígito'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',2,'cumple tamaño máximo','max_size','ADD','id_funcionalidad_funcionalidad_accion_max_size_ko','Identificador de funcionalidad demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',3,'cumple formato','format','ADD','id_funcionalidad_funcionalidad_accion_format_ko','Identificador de funcionalidad no cumple formato. Solo se permiten números'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',4,'identificador correcto','valid','ADD',true,'Identificador de funcionalidad correcto'),
    //id_funcionalidad --> EDIT
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',5,'cumple tamaño minimo','min_size','EDIT','id_funcionalidad_funcionalidad_accion_min_size_ko','Identificador de funcionalidad demasiado corto. Debe tener al menos un dígito'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',6,'cumple tamaño máximo','max_size','EDIT','id_funcionalidad_funcionalidad_accion_max_size_ko','Identificador de funcionalidad demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',7,'cumple formato','format','EDIT','EDIT','id_funcionalidad_funcionalidad_accion_format_ko','Identificador de funcionalidad no cumple formato. Solo se permiten números'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',8,'identificador correcto','valid','EDIT',true,'Identificador de funcionalidad correcto'),
    //id_funcionalidad --> SEARCH
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',9,'cumple tamaño minimo','min_size','SEARCH','id_funcionalidad_funcionalidad_accion_min_size_ko','Identificador de funcionalidad demasiado corto. Debe tener al menos un dígito'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',10,'cumple tamaño máximo','max_size','SEARCH','id_funcionalidad_funcionalidad_accion_max_size_ko','Identificador de funcionalidad demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',11,'cumple formato','format','SEARCH','id_funcionalidad_funcionalidad_accion_format_ko','Identificador de funcionalidad no cumple formato. Solo se permiten números'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion','input',12,'identificador correcto','valid','SEARCH',true,'Identificador de funcionalidad correcto'),
    

    //id_accion --> ADD
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',13,'cumple tamaño minimo','min_size','ADD','id_accion_funcionalidad_accion_min_size_ko','Identificador de accion demasiado corto. Debe tener al menos un dígito'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',14,'cumple tamaño máximo','max_size','ADD','id_accion_funcionalidad_accion_max_size_ko','Identificador de accion demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',15,'cumple formato','format','ADD','id_accion_funcionalidad_accion_format_ko','Identificador de accion no cumple formato. Solo se permiten números'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',16,'identificador correcto','valid','ADD',true,'Identificador de accion correcto'),
    //id_accion --> EDIT
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',17,'cumple tamaño minimo','min_size','EDIT','id_accion_funcionalidad_accion_min_size_ko','Identificador de accion demasiado corto. Debe tener al menos un dígito'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',18,'cumple tamaño máximo','max_size','EDIT','id_accion_funcionalidad_accion_max_size_ko','Identificador de accion demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',19,'cumple formato','format','EDIT','id_accion_funcionalidad_accion_format_ko','Identificador de accion no cumple formato. Solo se permiten números'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',20,'identificador correcto','valid','EDIT',true,'Identificador de accion correcto'),
    //id_accion --> SEARCH
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',21,'cumple tamaño minimo','min_size','SEARCH','id_accion_funcionalidad_accion_min_size_ko','Identificador de accion demasiado corto. Debe tener al menos un dígito'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',22,'cumple tamaño máximo','max_size','SEARCH','id_accion_funcionalidad_accion_max_size_ko','Identificador de accion demasiado corto. Debe tener 11 dígitos como máximo'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',23,'cumple formato','format','SEARCH','id_accion_funcionalidad_accion_format_ko','Identificador de accion no cumple formato. Solo se permiten números'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion','input',24,'identificador correcto','valid','SEARCH',true,'Identificador de accion correcto'),
);

//Definicion de pruebas que usen los tests creados anteriormente
let funcionalidad_accion_pruebas = 
Array(
    //id_funcionalidad --> ADD
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',1,1,'ADD',{id_funcionalidad_funcionalidad_accion:''},'id_funcionalidad_funcionalidad_accion_min_size_ko'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',2,2,'ADD',{id_funcionalidad_funcionalidad_accion:1234567891011},'id_funcionalidad_funcionalidad_accion_max_size_ko'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',3,3,'ADD',{id_funcionalidad_funcionalidad_accion:'A3j'},'id_funcionalidad_funcionalidad_accion_format_ko'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',4,4,'ADD',{id_funcionalidad_funcionalidad_accion:123456},true),
    //id_funcionalidad --> EDIT
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',5,5,'EDIT',{id_funcionalidad_funcionalidad_accion:''},'id_funcionalidad_funcionalidad_accion_min_size_ko'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',6,6,'EDIT',{id_funcionalidad_funcionalidad_accion:1234567891011},'id_funcionalidad_funcionalidad_accion_max_size_ko'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',7,7,'EDIT',{id_funcionalidad_funcionalidad_accion:'A3j'},'id_funcionalidad_funcionalidad_accion_format_ko'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',8,8,'EDIT',{id_funcionalidad_funcionalidad_accion:123456},true),
    //id_funcionalidad --> SEARCH
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',9,9,'SEARCH',{id_funcionalidad_funcionalidad_accion:''},'id_funcionalidad_funcionalidad_accion_min_size_ko'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',10,10,'SEARCH',{id_funcionalidad_funcionalidad_accion:1234567891011},'id_funcionalidad_funcionalidad_accion_max_size_ko'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',11,11,'SEARCH',{id_funcionalidad_funcionalidad_accion:'A3j'},'id_funcionalidad_funcionalidad_accion_format_ko'),
    Array('funcionalidad_accion','id_funcionalidad_funcionalidad_accion',12,12,'SEARCH',{id_funcionalidad_funcionalidad_accion:123456},true),


    //id_accion --> ADD
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',13,13,'ADD',{id_accion_funcionalidad_accion:''},'id_accion_funcionalidad_accion_min_size_ko'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',14,14,'ADD',{id_accion_funcionalidad_accion:1234567891011},'id_accion_funcionalidad_accion_max_size_ko'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',15,15,'ADD',{id_accion_funcionalidad_accion:'A3j'},'id_accion_funcionalidad_accion_format_ko'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',16,16,'ADD',{id_accion_funcionalidad_accion:123456},true),
    //id_accion --> EDIT
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',17,17,'EDIT',{id_accion_funcionalidad_accion:''},'id_accion_funcionalidad_accion_min_size_ko'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',18,18,'EDIT',{id_accion_funcionalidad_accion:1234567891011},'id_accion_funcionalidad_accion_max_size_ko'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',19,19,'EDIT',{id_accion_funcionalidad_accion:'A3j'},'id_accion_funcionalidad_accion_format_ko'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',20,20,'EDIT',{id_accion_funcionalidad_accion:123456},true),
    //id_accion --> SEARCH
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',21,21,'SEARCH',{id_accion_funcionalidad_accion:''},'id_accion_funcionalidad_accion_min_size_ko'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',22,22,'SEARCH',{id_accion_funcionalidad_accion:1234567891011},'id_accion_funcionalidad_accion_max_size_ko'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',23,23,'SEARCH',{id_accion_funcionalidad_accion:'A3j'},'id_accion_funcionalidad_accion_format_ko'),
    Array('funcionalidad_accion','id_accion_funcionalidad_accion',24,24,'SEARCH',{id_accion_funcionalidad_accion:123456},true),
);
