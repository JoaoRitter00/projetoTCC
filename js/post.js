class Post{
    constructor (name){
        this.name = name;
    };
    SayMyName(){
        return `Meu post é ${this.name}`
    }
}
module.exports = {
    Post,
}