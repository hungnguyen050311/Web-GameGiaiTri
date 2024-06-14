document.addEventListener("DOMContentLoaded", function () {
    const games = [
        { name: "Archer Hero", img: "games/images/1.jpg", url: "games/1/index.html" },
        { name: "Dribble Kings", img: "games/images/2.jpg", url: "games/2/index.html" },
        { name: "Moto Beach Ride", img: "games/images/3.jpg", url: "games/3/index.html" },
        { name: "Super 8 Race", img: "games/images/4.jpg", url: "games/4/index.html" },
        { name: "Grave Drive", img: "games/images/5.jpg", url: "games/5/index.html" },
        { name: "Alien Way", img: "games/images/6.jpg", url: "games/6/index.html" },
        { name: "Arnie Attack", img: "games/images/7.jpg", url: "games/7/index.html" },
        { name: "Green Chick Jump", img: "games/images/8.jpg", url: "games/8/index.html" },
        { name: "Koby Jump Escape", img: "games/images/9.jpg", url: "games/9/index.html" },
        { name: "Night Dress", img: "games/images/10.jpg", url: "games/10/index.html" },
        { name: "Soldier Way", img: "games/images/11.jpg", url: "games/11/index.html" },
        { name: "Zombies Night", img: "games/images/12.jpg", url: "games/12/index.html" },
        { name: "Crocofinity", img: "games/images/13.jpg", url: "games/13/index.html" },
        { name: "Destiny of Warrior", img: "games/images/14.jpg", url: "games/14/index.html" },
        { name: "Dice Game", img: "games/images/15.jpg", url: "games/15/index.html" },
        { name: "Flight Sim", img: "games/images/16.jpg", url: "games/16/index.html" },
        { name: "Frogtastic", img: "games/images/17.jpg", url: "games/17/index.html" },
        { name: "Jump Ninja Hero", img: "games/images/18.jpg", url: "games/18/index.html" },
        { name: "Lottery Numbers", img: "games/images/19.jpg", url: "games/19/index.html" },
        { name: "Open Restaurant", img: "games/images/20.jpg", url: "games/20/index.html" },
        { name: "Quiz Game", img: "games/images/21.jpg", url: "games/21/index.html" },
        { name: "Spin the Wheel", img: "games/images/22.jpg", url: "games/22/index.html" },
        { name: "Tap Supermarket", img: "games/images/23.jpg", url: "games/23/index.html" },
        { name: "The Sorcerer", img: "games/images/24.jpg", url: "games/24/index.html" },
        { name: "Trzpopit", img: "games/images/25.jpg", url: "games/25/index.html" },
        { name: "3D Roulette", img: "games/images/26.jpg", url: "games/26/index.html" },
        { name: "Penalty Kicks", img: "games/images/27.jpg", url: "games/27/index.html" },
        { name: "Zombie Shooter", img: "games/images/28.jpg", url: "games/28/index.html" },
        { name: "Auto Platformer", img: "games/images/29.jpg", url: "games/29/index.html" },
        { name: "Bingo", img: "games/images/30.jpg", url: "games/30/index.html" },
        { name: "City Hero", img: "games/images/31.jpg", url: "games/31/index.html" },
        { name: "Formula Drag", img: "games/images/32.jpg", url: "games/32/index.html" },
        { name: "Rob Runner", img: "games/images/33.jpg", url: "games/33/index.html" },
        { name: "Viking Way", img: "games/images/34.jpg", url: "games/34/index.html" },
        { name: "Wrecked", img: "games/images/35.jpg", url: "games/35/index.html" },
        { name: "Classic Bowling", img: "games/images/36.jpg", url: "games/36/index.html" },
        { name: "Coloring Book", img: "games/images/37.jpg", url: "games/37/index.html" },
        { name: "Crazy Parking", img: "games/images/38.jpg", url: "games/38/index.html" },
        { name: "Danger Cliffs", img: "games/images/39.jpg", url: "games/39/index.html" },
        { name: "Tank Wars Premium", img: "games/images/40.jpg", url: "games/40/index.html" },
        { name: "HD Action Platformer", img: "games/images/41.jpg", url: "games/41/index.html" },
        { name: "Electrio", img: "games/images/42.jpg", url: "games/42/index.html" },
        { name: "Zombie Shooter Mobile", img: "games/images/43.jpg", url: "games/43/index.html" },
        { name: "Volley Mal", img: "games/images/44.jpg", url: "games/44/index.html" },
        { name: "Sweet World", img: "games/images/45.jpg", url: "games/45/index.html" },
        { name: "Spot the Differences", img: "games/images/46.jpg", url: "games/46/index.html" },
        { name: "Duck Shooter", img: "games/images/47.jpg", url: "games/47/index.html" },
        { name: "Fantasy Forest", img: "games/images/48.jpg", url: "games/48/index.html" },
        { name: "Fishing Frenzy", img: "games/images/49.jpg", url: "games/49/index.html" },
        { name: "Flip Card Memory Test", img: "games/images/50.jpg", url: "games/50/index.html" },
        { name: "Four Colors", img: "games/images/51.jpg", url: "games/51/index.html" },
        { name: "Hold Position", img: "games/images/52.jpg", url: "games/52/index.html" },
        { name: "Jelly Break", img: "games/images/53.jpg", url: "games/53/index.html" },
        { name: "Jet Halloween", img: "games/images/54.jpg", url: "games/54/index.html" },
        { name: "Ludo Multiplayer", img: "games/images/55.jpg", url: "games/55/index.html" },
        { name: "Ninja Run", img: "games/images/56.jpg", url: "games/56/index.html" },
        { name: "Run into Death", img: "games/images/57.jpg", url: "games/57/index.html" },
        { name: "Sheepop", img: "games/images/58.jpg", url: "games/58/index.html" },
        { name: "Sidechain Mobile", img: "games/images/59.jpg", url: "games/59/index.html" },
        { name: "Slot Machine The Fruits", img: "games/images/60.jpg", url: "games/60/index.html" },
        { name: "Slot Ramses", img: "games/images/61.jpg", url: "games/61/index.html" },
        { name: "Super Green", img: "games/images/62.jpg", url: "games/62/index.html" },
        { name: "Tricky Crab", img: "games/images/63.jpg", url: "games/63/index.html" },
        { name: "Poker Jacks or Better", img: "games/images/64.jpg", url: "games/64/index.html" },
        { name: "0hh1 Master", img: "games/images/65.jpg", url: "games/65/index.html" },
        { name: "2048 Master", img: "games/images/66.jpg", url: "games/66/index.html" },
        { name: "Astray Master", img: "games/images/67.jpg", url: "games/67/index.html" },
        { name: "Clumsy Bird Master", img: "games/images/68.jpg", url: "games/68/index.html" },
        { name: "Hextris", img: "games/images/69.jpg", url: "games/69/index.html" },
        { name: "Javascript Racer Master", img: "games/images/70.jpg", url: "games/70/index.html" },
        { name: "Pacman Canvas Master", img: "games/images/71.jpg", url: "games/71/index.html" }
    ];
    const gameList = document.getElementById("game-list");

    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        const gameImage = document.createElement("img");
        gameImage.src = game.img;
        gameImage.alt = game.name;

        const gameTitle = document.createElement("h3");
        gameTitle.textContent = game.name;

        const gameLink = document.createElement("a");
        gameLink.href = game.url;
        gameLink.textContent = "Chơi ngay";

        gameCard.appendChild(gameImage);
        gameCard.appendChild(gameTitle);
        gameCard.appendChild(gameLink);

        gameList.appendChild(gameCard);
    });
});