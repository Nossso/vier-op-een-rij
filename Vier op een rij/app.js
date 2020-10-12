
window.addEventListener('load', bind4op1rij);

let grid = document.getElementsByClassName('slot'); //td
let vakjes = new Array(6);
const reset = document.querySelector('.reset');
let speler1=new Speler("Jan","rood",true);
let speler2=new Speler("Piet","groen",false);


for(let i=0;i<6;i++)
{
    vakjes[i]=new Array(7);
}

function resetVakjes()
{
    for(let rij=0;rij<6;rij++)
    {
        for (let kolom=0;kolom<7;kolom++)
            vakjes[rij][kolom]="leeg";
    }
}

function plaatsFiche(kolom,kleur)
{
    for(let rij=5;rij>=0;rij--)
    {
        if(vakjes[rij][kolom]==="leeg")
        {
            vakjes[rij][kolom]=kleur;



            return true;
        }

    }
    return false;
}

resetVakjes();
console.log(vakjes);



function bind4op1rij()
{
    let i=0;

    Array.from(grid).forEach(v => v.addEventListener('click', function(event) {
       for(let i=0;i<grid.length;i++)
       {
           if(grid[i]===event.target)
           {
               if(speler1.getAanBeurt()){
                   plaatsFiche(i%7,speler1.getKleur());
                   speler1.setNietAanBeurt()
                   speler2.setAanbeurt()
               } else {

                   if (speler2.getAanBeurt()) {
                       plaatsFiche(i % 7, speler2.getKleur());
                       speler1.setAanbeurt();
                       speler2.setNietAanBeurt();
                   }
               }

               console.log(vakjes);
               toonModel();
           }
       }

        i++;
    }));
}


function toonModel()
{
    console.log(grid);
    for(let rij=0;rij<6;rij++)
    {
        for (let kolom=0;kolom<7;kolom++)
            if (vakjes[rij][kolom]==="rood"){
                console.log('jap');
                grid[rij*7+kolom].style.backgroundColor='red';
            }

 for(let rij=0;rij<6;rij++)
    {
        for (let kolom=0;kolom<7;kolom++)
            if (vakjes[rij][kolom]==="groen"){
                console.log('jap');
                grid[rij*7+kolom].style.backgroundColor='green';
            }





    }
}}


