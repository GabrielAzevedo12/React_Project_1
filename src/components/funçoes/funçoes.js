const
Adicionar_class = (e, name_class) => {
    if(e) {
      e.classList.add(name_class);
    }
  },
  
  Remover_class = (e, name_class) => {
    if(e) {
      e.classList.remove(name_class);
    }
  },
  
  Existe_Class = (e, name_class)  => {
  
    let exibir = false;
    if (e) {
      for(var x of e.classList) {
      
        if (exibir) {console.log(x);}
    
        if(x === name_class) {
    
            return true;
            //break;
     
        } else {
    
            continue;
    
        }
    
     }
    }
  
  },
  
  new_text = (e, text) => {
    e.textContent = text;
  },
  
  $ = (NomeDaIndent) => {
    /*O argumento é obrigatoriamento uma string*/
    if (NomeDaIndent && NomeDaIndent !== '' && NomeDaIndent !== '#' && NomeDaIndent !== '.') {
      var ElementoHtml = document.querySelector(NomeDaIndent); // BOM.
      return ElementoHtml;
    }
  
  },
  
  S1 = (e, tipo_style, valor_style) => {
  
    let el = document.querySelector(e);
    el["style"][tipo_style] = valor_style;
  
  },
  
  S2 = (e, tipo_style, valor_style) => {
  
    e["style"][tipo_style] = valor_style;
  
  },
  
  def_dimensoes = (e,w,h) => {
    e["style"]["width"] = w;
    e["style"]["height"] = h;
  },
  esconder = (e) => {
    e.style.display = "none";
  },
  exibir = (e) => {
    e.style.display = "";
  };

  export { 
    Adicionar_class,
    Remover_class,
    Existe_Class,
    S1,
    S2,
    $,
    new_text,
    def_dimensoes,
    esconder,
    exibir
           }