

        /* Define como o Carro vai ser */
    class Carro{
        marca;
        cor;
        gastoMedioPorKm;


        /* faz com que os atributos sejam obrigatorios*/
        constructor(marca, cor, gastoMedioPorKm){
            this.marca = marca;
            this.cor = cor;
            this.gastoMedioPorKm = gastoMedioPorKm;
        }



        /* calcula gastos em Reais */
    gastosEmReais(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
         
    }
                    

          }

    const uno = new Carro( 'fiat', 'prata', 1/12);
    const palio = new Carro('fiat', 'verde', 1/10);
   
    console.log(palio.gastosEmReais(70, 5));
    console.log(uno.gastosEmReais(70, 5));
