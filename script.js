// Seleciona o botão
const botao = document.getElementById("btnInterativo");

// Adiciona o evento de clique
botao.addEventListener("click", function () {

    // Verifica se a galeria já existe
    let galeria = document.getElementById("galeria");

    if (galeria) {
        // Se existir, apenas mostra/esconde
        galeria.style.display =
            galeria.style.display === "none" ? "block" : "none";
        return;
    }

    // Cria a div da galeria
    galeria = document.createElement("div");
    galeria.id = "galeria";
    galeria.style.marginTop = "20px";
    galeria.style.display = "flex";
    galeria.style.flexWrap = "wrap";
    galeria.style.justifyContent = "center";
    galeria.style.gap = "15px";

    // Lista de imagens
    const imagens = [
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500",
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500"
    ];

    // Cria cada imagem
    imagens.forEach(function (url) {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Sustentabilidade no agronegócio";
        img.style.width = "250px";
        img.style.height = "170px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "10px";
        img.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";

        galeria.appendChild(img);
    });

    // Adiciona a galeria ao card
    document.querySelector(".card-informativo").appendChild(galeria);
});
