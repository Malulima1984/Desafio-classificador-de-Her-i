let heroi = ("Homem de Ferro");

let xpnivel = (8637);


    if(xpnivel < 1000)
       nivel ="Ferro";
    else if (xpnivel >= 1001 && xpnivel <= 2000) 
       nivel = "Bronze";
    else if (xpnivel >= 2001 && xpnivel <= 5000) 
        nivel = "Prata";
    else if (xpnivel >= 5001 && xpnivel <= 7000) 
        nivel = "Ouro";
    else if (xpnivel >= 7001 && xpnivel <= 8000)
        nivel = "Platina";
    else if (xpnivel >= 8001 && xpnivel <= 9000)
        nivel = "Ascendente";
    else if (xpnivel >= 9001 && xpnivel <= 10000) 
        nivel = "Imortal";
    else 
        nivel = "Radiante";
    
    console.log("O Herói de nome " + heroi + " está no nivel de " + nivel + " ." );

