class ActorObj {
    constructor(obj) {
        if (arguments.length === 1) {
            this.fname = obj.fname;
            this.lname = obj.lname;
            this.bdDate = obj.bdDate;
            this.image = obj.image;
            this.imdbLink = obj.imdbLink;
            this.id = obj.id
        }else {
            this.fname = '';
            this.lname = '';
            this.bdDate = '1990-01-01';
            this.image = '';
            this.imdbLink = '';
            this.id = '12345';
        }
    }
    getAge = () => {
        const now = new Date().getFullYear();
        const bd = new Date(this.bdDate).getFullYear();
        return now - bd;
    };
    getFullName = () => {
        return  this.fname +" "+this.lname;
    };

}

export default ActorObj;