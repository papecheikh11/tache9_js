//Declaration des variables
   const tab1 = [];
    const tab2 = [];
    let tab3 = [];

    //Pour le tableaux 1
    const nbr1 = parseInt(prompt('Combien de nombre souhaitez vous entrez pour le tableau 1  ?'));
        for (let i = 1; i <= nbr1; i++) {
        let etr1 = parseFloat(prompt("Entrer le nombre " + i));
       console.log("Voici les elements du tableaux 1")
        tab1.push(etr1)
        console.log(tab1);
    }


    //Pour le tableaux 2
    const nbr2 = parseInt(prompt('Combien de nombre souhaitez vous entrez pour le tableau 2 ?'));
        for (let n = 1; n <= nbr2; n++) {
        let etr2 = parseFloat(prompt("Entrer le nombre " + n));
        console.log("Voici les elements du tableaux 2")
        tab2.push(etr2)
        console.log(tab2);
    }

    //Afficher le tableaux trois
   

    console.log('les elements du tableaux trois');
    console.log();
    

        let para1 = document.getElementById("p1")
        para1.innerHTML = tab1.join()

        let para2 = document.getElementById("p2")
        para2.innerHTML = tab2.join()

        let para = document.getElementById("p3")
        para.innerHTML = (tab1.filter((num) => num > 0).concat(tab2.fill(0))).join()

