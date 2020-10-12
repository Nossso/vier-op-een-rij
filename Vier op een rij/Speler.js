class Speler{
    constructor(naam,kleur,aanBeurt)
    {
        this.naam=naam;
        this.kleur=kleur;
        this.aanBeurt=aanBeurt;
    }

    getAanBeurt()
    {
        return this.aanBeurt;
    }

    getKleur()
    {
        return this.kleur;
    }

    setAanbeurt()
    {
        this.aanBeurt=true;
    }

    setNietAanBeurt()
    {
        this.aanBeurt=false;
    }

}