class MovieObj {
    constructor(obj) {
        if (arguments.length === 1) {
            this.id = obj.id;
            this.desc = obj.desc;
            this.title = obj.title;
            this.image = obj.image;
        }else {
            this.id = '';
            this.desc = '';
            this.title = '';
            this.image = '';
        }
    }

}

export default MovieObj;