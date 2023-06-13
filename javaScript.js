//function go(){
//    var circulo = document.querySelector('#circuloProgresso');   
//    var numero = document.querySelector('#numero').value;
//    document.querySelector('.porcentagem').innerHTML = numero + '%';
//    circulo.style.strokeDashoffset = 440 - (440*numero)/100;
//}

function go() {

    //Recupera dados do pai e da mae
    //Se o pai e a mãe é Heterozigoto
    //E o circulo
    var mae = document.querySelector('#mae').value;
    var pai = document.querySelector('#pai').value;
    var mh = document.querySelector('#mh');
    var ph = document.querySelector('#ph');
    var circulo = document.querySelector('#circuloProgresso');
    var circuloB = document.querySelector('#circuloProgressoB');
    var circuloAB = document.querySelector('#circuloProgressoAB');
    var circuloO = document.querySelector('#circuloProgressoO');


    //alert(mh.checked);// true
    //Checando se é Heterozigoto
    if (mh.checked) {
        var mh = document.querySelector('#mh').value;
    }

    if (ph.checked) {
        var ph = document.querySelector('#ph').value;
    }

    //Criando as Variaveis
    var genotipomae1 = null;
    var genotipomae2 = null;
    var genotipopai1 = null;
    var genotipopai2 = null;


    //Testes
    // || = OU
    // && = E

    //Mae Sangue A
    if (mae === "A" && mh === "mh") {
        genotipomae1 = "A";
        genotipomae2 = "i";
    }

    else if (mae === "A" && mh !== "mh") {
        genotipomae1 = "A";
        genotipomae2 = "A";
    }

    //Mãe do tipo B heterozigoto
    else if (mae === "B" && mh === "mh") {
        genotipomae1 = "B";
        genotipomae2 = "i";
    }

    //Mãe do tipo B 
    else if (mae === "B" && mh !== "mh") {
        genotipomae1 = "B";
        genotipomae2 = "B";
    }

    //Mãe do tipo AB
    else if (mae === "AB") {
        genotipomae1 = "A";
        genotipomae2 = "B";
    }

    //Mãe do tipo O
    else {
        genotipomae1 = "i";
        genotipomae2 = "i";
    }


    //Pai Sangue A
    if (pai === "A" && ph === "ph") {
        genotipopai1 = "A";
        genotipopai2 = "i";
    }

    else if (pai === "A" && ph !== "ph") {
        genotipopai1 = "A";
        genotipopai2 = "A";
    }

    //Pai do tipo B
    else if (pai === "B" && ph === "ph") {
        genotipopai1 = "B";
        genotipopai2 = "i";
    }

    else if (pai === "B" && ph !== "ph") {
        genotipopai1 = "B";
        genotipopai2 = "B";
    }

    //Pai do tipo AB
    else if (pai === "AB") {
        genotipopai1 = "A";
        genotipopai2 = "B";
    }

    //Mãe do tipo O
    else {
        genotipopai1 = "i";
        genotipopai2 = "i";
    }



    //SO de controle doq programou
    if (genotipomae1 === null || genotipopai1 === null) {
        alert("Você ainda não programou");
    }


    //Conta
    var maepai1 = genotipomae1 + genotipopai1;
    var maepai2 = genotipomae1 + genotipopai2;
    var maepai3 = genotipomae2 + genotipopai1;
    var maepai4 = genotipomae2 + genotipopai2;

    //Tabela
    document.querySelector('.g1m').innerHTML = genotipomae1;
    document.querySelector('.g2m').innerHTML = genotipomae2;
    document.querySelector('.g1p').innerHTML = genotipopai1;
    document.querySelector('.g2p').innerHTML = genotipopai2;

    //Resultado
    document.querySelector('.primeiro').innerHTML = maepai1;
    document.querySelector('.segundo').innerHTML = maepai2;
    document.querySelector('.terceiro').innerHTML = maepai3;
    document.querySelector('.quarto').innerHTML = maepai4;


    //Verificando a quantidade de sangue possui
    var A = 0;
    var B = 0;
    var AB = 0;
    var O = 0;

    //Mãe e pai 1 
    if (maepai1 === 'AA' || maepai1 === 'iA' || maepai1 === 'Ai') {
        A++;
    }
    else if (maepai1 === 'BB' || maepai1 === 'iB' || maepai1 === 'Bi') {
        B++;
    }
    else if (maepai1 === 'AB' || maepai1 === 'BA') {
        AB++;
    }
    else if (maepai1 === 'ii') {
        O++;
    }

    //Mãe e pai 2
    if (maepai2 === 'AA' || maepai2 === 'iA' || maepai2 === 'Ai') {
        A++;
    }
    else if (maepai2 === 'BB' || maepai2 === 'iB' || maepai2 === 'Bi') {
        B++;
    }
    else if (maepai2 === 'AB' || maepai2 === 'BA') {
        AB++;
    }
    else if (maepai2 === 'ii') {
        O++;
    }

    //Mãe e pai 3
    if (maepai3 === 'AA' || maepai3 === 'iA' || maepai3 === 'Ai') {
        A++;
    }
    else if (maepai3 === 'BB' || maepai3 === 'iB' || maepai3 === 'Bi') {
        B++;
    }
    else if (maepai3 === 'AB' || maepai3 === 'BA') {
        AB++;
    }
    else if (maepai3 === 'ii') {
        O++;
    }


    //Mãe e pai 4
    if (maepai4 === 'AA' || maepai4 === 'iA' || maepai4 === 'Ai') {
        A++;
    }
    else if (maepai4 === 'BB' || maepai4 === 'iB' || maepai4 === 'Bi') {
        B++;
    }
    else if (maepai4 === 'AB' || maepai4 === 'BA') {
        AB++;
    }
    else if (maepai4 === 'ii') {
        O++;
    }

    //Fazendo o Grafico do tipo A
    if (A === 4) {
        var result = 100
        document.querySelector('.porcentagemA').innerHTML = result + '%';
        circulo.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (A === 3) {
        var result = 75
        document.querySelector('.porcentagemA').innerHTML = result + '%';
        circulo.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (A === 2) {
        var result = 50;
        document.querySelector('.porcentagemA').innerHTML = result + '%';
        circulo.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (A === 1) {
        var result = 25;
        document.querySelector('.porcentagemA').innerHTML = result + '%';
        circulo.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else {
        var result = 0;
        document.querySelector('.porcentagemA').innerHTML = result + '%';
        circulo.style.strokeDashoffset = 440 - (440 * result) / 100;
    }


    //Fazendo o Grafico do tipo B
    if (B === 4) {
        var result = 100
        document.querySelector('.porcentagemB').innerHTML = result + '%';
        circuloB.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (B === 3) {
        var result = 75
        document.querySelector('.porcentagemB').innerHTML = result + '%';
        circuloB.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (B === 2) {
        var result = 50;
        document.querySelector('.porcentagemB').innerHTML = result + '%';
        circuloB.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (B === 1) {
        var result = 25;
        document.querySelector('.porcentagemB').innerHTML = result + '%';
        circuloB.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else {
        var result = 0;
        document.querySelector('.porcentagemB').innerHTML = result + '%';
        circuloB.style.strokeDashoffset = 440 - (440 * result) / 100;
    }


    //Fazendo o Grafico do tipo AB
    if (AB === 4) {
        var result = 100
        document.querySelector('.porcentagemAB').innerHTML = result + '%';
        circuloAB.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (AB === 3) {
        var result = 75
        document.querySelector('.porcentagemAB').innerHTML = result + '%';
        circuloAB.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (AB === 2) {
        var result = 50;
        document.querySelector('.porcentagemAB').innerHTML = result + '%';
        circuloAB.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (AB === 1) {
        var result = 25;
        document.querySelector('.porcentagemAB').innerHTML = result + '%';
        circuloAB.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else {
        var result = 0;
        document.querySelector('.porcentagemAB').innerHTML = result + '%';
        circuloAB.style.strokeDashoffset = 440 - (440 * result) / 100;
    }

    //Fazendo o Grafico do tipo O
    if (O === 4) {
        var result = 100
        document.querySelector('.porcentagemO').innerHTML = result + '%';
        circuloO.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (O === 3) {
        var result = 75
        document.querySelector('.porcentagemO').innerHTML = result + '%';
        circuloO.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (O === 2) {
        var result = 50;
        document.querySelector('.porcentagemO').innerHTML = result + '%';
        circuloO.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (O === 1) {
        var result = 25;
        document.querySelector('.porcentagemO').innerHTML = result + '%';
        circuloO.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else {
        var result = 0;
        document.querySelector('.porcentagemO').innerHTML = result + '%';
        circuloO.style.strokeDashoffset = 440 - (440 * result) / 100;
    }



    
    //Fator RH  -------------------------------------------------------------------//
    
    var rhm = document.querySelector("#rhm").value;
    var rhp = document.querySelector("#rhp").value;
    var rhhm = document.querySelector("#rhhm");
    var rhhp = document.querySelector("#rhhp");
    var circuloR = document.querySelector('#circuloProgressoR');
    var circulor = document.querySelector('#circuloProgressor');

    //Checando Fator 
    if (rhhm.checked) {
        var rhhm = document.querySelector('#rhhm').value;
    }

    if (rhhp.checked) {
        var rhhp = document.querySelector('#rhhp').value;
    }

     //Criando as Variaveis Fator
     var fatormae1 = null;
     var fatormae2 = null;
     var fatorpai1 = null;
     var fatorpai2 = null;


     //Testes
    // || = OU
    // && = E
     
     //Mae Sangue RH Positivo 
    if (rhm === "R" && rhhm === "rhhm") {
        fatormae1 = "R";
        fatormae2 = "r";
    }

    else if (rhm === "R" && rhhm !== "rhhm") {
        fatormae1 = "R";
        fatormae2 = "R";
    }

    //Mãe Sangue RH Negativo
    else {
        fatormae1 = "r";
        fatormae2 = "r";
    }

     //Pai Sangue RH Positivo 
     if (rhp === "R" && rhhp === "rhhp") {
        fatorpai1 = "R";
        fatorpai2 = "r";
    }

    else if (rhp === "R" && rhhp !== "rhhp") {
        fatorpai1 = "R";
        fatorpai2 = "R";
    }

    //Pai Sangue RH Negativo
    else {
        fatorpai1 = "r";
        fatorpai2 = "r";
    }
     
    //SO de controle doq programou
    if (fatormae1 === null || fatorpai2 === null) {
        alert("Você ainda não programou");
    }


    //Conta
    var maepairh1 = fatormae1 + fatorpai1;
    var maepairh2 = fatormae1 + fatorpai2;
    var maepairh3 = fatormae2 + fatorpai1;
    var maepairh4 = fatormae2 + fatorpai2;

    //Tabela
    document.querySelector('.s1m').innerHTML = fatormae1;
    document.querySelector('.s2m').innerHTML = fatormae2;
    document.querySelector('.s1p').innerHTML = fatorpai1;
    document.querySelector('.s2p').innerHTML = fatorpai2;

    //Resultado
    document.querySelector('.primeirofator').innerHTML = maepairh1;
    document.querySelector('.segundofator').innerHTML = maepairh2;
    document.querySelector('.terceirofator').innerHTML = maepairh3;
    document.querySelector('.quartofator').innerHTML = maepairh4;

    //Verificando a quantidade de sangue possui
    var R = 0;
    var r = 0;
    

    //Mãe e pai 1 
    if (maepairh1 === 'RR' || maepairh1 === 'Rr' || maepairh1 === 'rR' )  {
        R++;
    }
    
    
    else if (maepairh1 === 'rr') {
        r++;
    }

    //Mãe e pai 2
    if (maepairh2 === 'RR' || maepairh2 === 'Rr'  || maepairh2 === 'rR' ) {
        R++;
    }
    
    
    else if (maepairh2 === 'rr') {
        r++;
    }
    

     //Mãe e pai 3
     if (maepairh3 === 'RR' || maepairh3 === 'Rr'  || maepairh3 === 'rR' ) {
        R++;
    }
    
    
    else if (maepairh3 === 'rr') {
        r++;
    }

    //Mãe e pai 4
    if (maepairh4 === 'RR' || maepairh4 === 'Rr'  || maepairh4 === 'rR' ) {
        R++;
    }
    
    
    else if (maepairh4 === 'rr') {
        r++;
    }

    //Grafico

    // RH Posititvo
    if (R === 4) {
        var result = 100
        document.querySelector('.porcentagemR').innerHTML = result + '%';
        circuloR.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (R === 3) {
        var result = 75
        document.querySelector('.porcentagemR').innerHTML = result + '%';
        circuloR.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (R === 2) {
        var result = 50;
        document.querySelector('.porcentagemR').innerHTML = result + '%';
        circuloR.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (R === 1) {
        var result = 25;
        document.querySelector('.porcentagemR').innerHTML = result + '%';
        circuloR.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else {
        var result = 0;
        document.querySelector('.porcentagemR').innerHTML = result + '%';
        circuloR.style.strokeDashoffset = 440 - (440 * result) / 100;
    }

    
    // RH Negativo
    if (r === 4) {
        var result = 100
        document.querySelector('.porcentagemr').innerHTML = result + '%';
        circulor.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (r === 3) {
        var result = 75
        document.querySelector('.porcentagemr').innerHTML = result + '%';
        circulor.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (r === 2) {
        var result = 50;
        document.querySelector('.porcentagemr').innerHTML = result + '%';
        circulor.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else if (r === 1) {
        var result = 25;
        document.querySelector('.porcentagemr').innerHTML = result + '%';
        circulor.style.strokeDashoffset = 440 - (440 * result) / 100;
    }
    else {
        var result = 0;
        document.querySelector('.porcentagemr').innerHTML = result + '%';
        circulor.style.strokeDashoffset = 440 - (440 * result) / 100;
    }


}