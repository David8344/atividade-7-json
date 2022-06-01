const objs_json = [{
        "nome": "Carlos Andre",
        "idade": "18",
        "instituto": "IFRN",
        "matriculado": true,
        "info_matricula": [{
            "nome_curso": "Meio ambiente",
            "carga_horaria": 3200,
            "turno": "vespertino",
            "ano_entrada": 2020
        }]

    },
    {
        "nome": "Pedro Henrique",
        "idade": "17",
        "instituto": "IFRN",
        "matriculado": true,
        "info_matricula": [{
            "nome_curso": "Informática",
            "carga_horaria": 3300,
            "turno": "vespertino",
            "ano_entrada": 2021
        }]
    },
    {
        "nome": "Ana Paula",
        "idade": "18",
        "instituto": "IFRN",
        "matriculado": true,
        "info_matricula": [{
            "nome_curso": "Edificações",
            "carga_horaria": 3200,
            "turno": "matutino",
            "ano_entrada": 2020
        }]
    }
]

const jsonData = JSON.stringify(objs_json);

console.log(jsonData);
console.log(typeof jsonData);

console.log("----------------");


const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);
