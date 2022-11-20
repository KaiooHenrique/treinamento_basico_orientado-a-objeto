
    /* criando uma clase pessoa*/
    class Pessoa{

        nome;
        peso;
        altura;
                /* fazendo com que ao atributos sejam obrigatorios */
            constructor(nome, peso, altura){
                this.nome = nome;
                this.peso = peso;
                this.altura = altura;
            }

            /*calculo de imc*/
        imc(){
           return this.peso / (this.altura * this.altura);   
        }    

        /* classificação de imc*/
        classisficarImc(){
            /* Chama calculo do imc para dentro na classificação */
           const imc = this.imc();
            
                if (imc < 18.5) {
                    return ('Abaixo do Peso');
                } else if (imc >= 18.5 && imc <= 25) {
                    return ('Peso Normal');
                
                } else if (imc >= 25.1 && imc <= 30) {
                    return ('Acima do Peso');
                
                } else if (imc >= 30.1 && imc <= 40) {
                    return ('Obeso');
            
                } else {
                    (imc > 40)
                    return ('Obesidade Grave');
                }
    }
}
    const jose = new Pessoa('jose',70, 1.75);
    console.log(jose.imc(), jose.classisficarImc());
    const vitor = new Pessoa('vitor', 80, 1.80);
    console.log(vitor.imc(), vitor.classisficarImc());
    