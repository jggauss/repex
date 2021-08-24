const express = require("express")
const app=express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const moment = require("moment");


app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());


/*******HANDELBARS CONFIGURAÇÕES */
app.engine('handlebars',handlebars({
    defaultLayout:'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    },
    runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},
}))


app.set('view engine','handlebars');
app.use(express.static('public'));

//app.use(express.static('/views'));
app.use('/views', express.static('/api/views'))
//app.use(express.static('./api/views'));
//app.use(express.static(__dirname+'public/appjs'));

const Clientes = require("./models/Incluicliente")
const Industrias = require("./models/incluiIndustia")
const Vendedores = require("./models/vendedores")
const Produtos = require("./models/Produtos")
const Config=require("./api/config/config.json")





app.listen(3000);

/*************PÁGINA PRINCIPAL */   
app.get("/index",function(req,res){
    res.render(__dirname + "/views/index");

});


/****************CLIENTES */

    //Página incluir clientes
    app.get("/incluir-cliente",function(req,res){
        
        res.render(__dirname + "/views/incluir-cliente");
    
    });

    //listar clientes//
    
    app.get("/clientes",function(req,res){
        Clientes.findAll({order:[['razao_social','ASC']]}).then(function(LISTARCLIENTES) {
            res.render(__dirname + "/views/clientes",{OBJETOLISTARCLIENTES:LISTARCLIENTES})
        });
    });

    
//Incluir clientes
    app.post('/listar_clientes',function (req,res){
    Clientes.create({
        id: req.body.id,
        cnpj: req.body.cnpj,
        ie: req.body.ie,
        razao_social: req.body.razao_social,
        nome_fantasia: req.body.nome_fantasia,
        logradouro: req.body.logradouro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        uf: req.body.uf,
        cep: req.body.cep,
        email_contato: req.body.email_contato,
        email_xml: req.body.email_xml,
        telefone1: req.body.telefone1,
        telefone2: req.body.telefone2,
        vendedor: req.body.vendedor
    }).then(function(){
        res.render(__dirname + "/views/incluir-cliente")
    }).catch(function(erro){
        res.send("Erro."+erro)
    })
});


//apaga cliente
app.get('/del-cliente/:id',function(req,res){
    Clientes.destroy({
        where:{'id': req.params.id}
    }).then(function(){
        
        res.send("Cliente apagado com sucesso")
    }).catch(function(erro){
        res.send("Cliente não foi apagado")
    })

})

//consulta um cliente
app.get("/consulta-cliente/:id",function(req,res){
     Clientes.findOne({
        where:{'id': req.params.id}
    }).then(function(mostrarCliente){
        res.render(__dirname + "/views/consulta-cliente",{ObjetoMostrarCliente: mostrarCliente})
    })
})

//altera um cliente
app.get("/altera-cliente/:id",function(req,res){
    Clientes.findOne({
       where:{'id': req.params.id}
   }).then(function(mostrarCliente){
       res.render(__dirname + "/views/altera-cliente",{ObjetoMostrarCliente: mostrarCliente})
   })
  
})

app.put('/altera2-cliente',function (req,res){
    Clientes.update({
        id: req.body.id,
        cnpj: req.body.cnpj,
        ie: req.body.ie,
        razao_social: req.body.razao_social,
        nome_fantasia: req.body.nome_fantasia,
        logradouro: req.body.logradouro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        uf: req.body.uf,
        cep: req.body.cep,
        email_contato: req.body.email_contato,
        email_xml: req.body.email_xml,
        telefone1: req.body.telefone1,
        telefone2: req.body.telefone2,
        vendedor: req.body.vendedor
    }).then(function(){
        res.render(__dirname + "/views/incluir-cliente")
    }).catch(function(erro){
        res.send("Erro."+erro)
    })
});



/************INDUSTRIA */

//página incluir industria
app.get("/incluir-industria",function(req,res){
    res.render(__dirname + "/views/incluir-industria");

});

//listar industrias
app.get("/industria",function(req,res){
    Industrias.findAll({order:[['id','ASC']]}).then(function(LISTARindustria) {
        res.render(__dirname + "/views/industria",{OBJETOLISTARINDUSTRIA:LISTARindustria})
    });

    
});
       
//incluir industria
app.post('/listar-industria',function (req,res){
    Industrias.create({
        cnpj: req.body.id,
        ie: req.body.ie,
        razao_social: req.body.razao_social,
        nome_fantasia: req.body.nome_fantasia,
        logradouro: req.body.logradouro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        uf: req.body.uf,
        cep: req.body.cep,
        email_contato: req.body.email_contato,
        email_xml: req.body.email_xml,
        telefone1: req.body.telefone1,
        telefone2: req.body.telefone2,
        comissao: req.body.comissao
        
    }).then(function(){
        res.render(__dirname + "/views/incluir-industria")
    }).catch(function(erro){
        res.send("Erro."+erro)
    })

});

//apaga industria
app.get('/del-industria/:id',function(req,res){
    Industrias.destroy({
        where:{'id': req.params.id}
    }).then(function(){
        res.send("Industria apagada com sucesso")
    }).catch(function(erro){
        res.send("Industria não foi apagado")
    })

})

/*****************PRODUTOS */
   
//listar produtos
app.get("/produtos",function(req,res){
    Produtos.findAll({order:[['nome_produto','ASC']]}).then(function(LISTAR) {
        res.render(__dirname + "/views/produtos",{OBJETOLISTARPRODUTOS:LISTAR})
    });
        
    });
    //apaga produto
    app.get('/del-produto/:id',function(req,res){
        Produtos.destroy({
            where:{'id': req.params.id}
        }).then(function(){
            res.send("Produto apagado com sucesso")
        }).catch(function(erro){
            res.send("Produto não foi apagado")
        })
    
    })
    //incluir produto
    app.post('/listar-produtos',function (req,res){
        Produtos.create({
            sku: req.body.sku,
            nome_produto: req.body.nome_produto,
            preco: req.body.preco,
            peso_bruto: req.body.peso_bruto,
            altura: req.body.altura,
            largura: req.body.largura,
            comprimento: req.body.comprimento,
            fabricante_id: req.body.fabricante_id
            
        }).then(function(){
            res.render(__dirname + "/views/incluir-produto")
        }).catch(function(erro){
            res.send("Erro."+erro)
        })
    
    });
    //Incluir Produto
    app.get("/incluir-produto",function(req,res){
        res.render(__dirname + "/views/incluir-produto");
    });
    
/*****************VENDEDORES */
   
//listar vendedores
app.get("/vendedores",function(req,res){
    Vendedores.findAll({order:[['nome','ASC']]}).then(function(LISTAR) {
        res.render(__dirname + "/views/vendedores",{OBJETOLISTARVENDEDORES:LISTAR})
    });
        
    });
    //apaga vendedor
    app.get('/del-vendedor/:id',function(req,res){
        Vendedores.destroy({
            where:{'id': req.params.id}
        }).then(function(){
            res.send("Vendedor apagado com sucesso")
        }).catch(function(erro){
            res.send("Vendedor não foi apagado")
        })
    
    })
//incluir vendedor
app.post('/listar-vendedores',function (req,res){
    Vendedores.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.preco,
        comissao: req.body.comissao,
        
        
    }).then(function(){
        res.render(__dirname + "/views/incluir-vendedor")
    }).catch(function(erro){
        res.send("Erro."+erro)
    })

});
//Incluir vendedor
app.get("/incluir-vendedor",function(req,res){
    res.render(__dirname + "/views/incluir-vendedor");
});

   


    







   
