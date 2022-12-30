function fazGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();

    return request.responseText;
}

function criaLinha(veiculo) {
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdModelo = document.createElement("td");
    tdVeiculo = document.createElement("td");

    tdId.innerHTML = veiculo.id
    tdNome.innerHTML = veiculo.fabricante
    tdModelo.innerHTML = veiculo.modelo
    tdVeiculo.innerHTML = veiculo.veiculo

    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    linha.appendChild(tdModelo);
    linha.appendChild(tdVeiculo);

    console.log(veiculo)

    return linha;

}

function main(){
    let data = fazGet("http://localhost:3002/veiculos");
    let veiculos = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    
    veiculos.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });

}

main()