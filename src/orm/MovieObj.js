class MovieObj {
    constructor(obj) {
        if (arguments.length === 1) {
            this.id = obj.id;
            this.overview = obj.overview;
            this.original_title = obj.original_title;
            this.poster_path = obj.poster_path === null ? '' : `${process.env.REACT_APP_TMDB_GET_IMG}${obj.poster_path}`;
            this._runtime = 0;
        }else {
            this.id = '';
            this.overview = '';
            this.original_title = '';
            this.poster_path = '';
        }
    }

    set runtime(value) {
        this._runtime = value;
    }



}

export default MovieObj;