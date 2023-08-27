class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title;
    }
}


const musicList = [
    new Music("Frank's Choice", "Tyler Bates","1.jpeg","1.mp3"),    
    new Music("Swordsman", "Kékht Arakh","2.jpeg","2.mp3"),    
    new Music("Wolf River", "Reignwolf","3.jpeg","3.mp3")    
];
