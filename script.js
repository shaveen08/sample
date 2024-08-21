document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('#btnSubmit').addEventListener('click', (e)=>{
        e.preventDefault();
        flamesCalc();
    });

    function flamesCalc(){
        const userName = document.querySelector("#username");
        const partnerName = document.querySelector("#partnername");

        const flamesList = ['f', 'l', 'a', 'm', 'e', 's'];

        let a = userName.value.trim().split("");
        let b = partnerName.value.trim().split("");

        a.forEach(char => {
            const index = b.indexOf(char);
            if(index !== -1) {
                b.splice(index, 1);
            }
        });
        const remainingChar = a.concat(b);

        let countChar = remainingChar.length;
        console.log("Character count", countChar);

        let currentIndex = (countChar - 1) % flamesList.length;
        console.log("Counter index", currentIndex);

        let index = 0;

        // while (flamesList.length > 1) { 
        //     index = (index + countChar - 1) % flamesList.length; 
        //     console.log(index);
        //     flamesList.splice(index, 1);
        // }
       alert("FLAMES result:", flamesList[0]);
    }

});