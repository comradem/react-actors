class ActorObj {
    constructor(obj) {
        if (arguments.length === 1) {
            this.name = obj.name;
            this.profilePath = `${process.env.REACT_APP_TMDB_GET_IMG}${obj.profilePath}`;
            this.id = obj.id
        }else {
            this.name = "";
            this.profilePath = "";
            this.id = ""
        }
    }
    getAge = () => {
        const now = new Date().getFullYear();
        const bd = new Date().getFullYear();
        return now - bd;
    };

}

export default ActorObj;