import React from "react";

const Movie = (props) => {
    return (
        <div className="col s12 m6">
            <div className="card">
                    {
                        props.image == null ? <img src={`https://www.google.com/search?q=default+image&rlz=1C5CHFA_enGB892GB894&sxsrf=AOaemvK1mnoofYk5Ekwco-Mbi1xrqzEC6g:1633607617703&tbm=isch&source=iu&ictx=1&fir=E__DFTIbn9J8IM%252CGzRJaT5rw0mufM%252C_%253BdAOBLb6Mi03B7M%252CR-zef-OL6H-TZM%252C_%253BdzPYWaGt8jz9-M%252CxyV8ddqOau4KMM%252C_%253Bdxonrn0cJEMI6M%252CSW4yfvw9aJ_usM%252C_%253BJpaFCmffhUdABM%252CeirPelkp9eoYkM%252C_%253B6tO2K22XfMJMrM%252CtjwcAW2gZVajyM%252C_%253BmFBeEI-GK2RjoM%252CBcplb9fZWTvvRM%252C_%253BQ6BBzp2xDdCTDM%252CFclWny-2v2PSgM%252C_%253BICLCD4iXheDuWM%252CQXgIy6kKjsxvdM%252C_%253BeHQKa74ZnnpTfM%252C4XfudSI_3wLzPM%252C_%253BNUuwdMoJ0wedMM%252CEh_frbRje_4DLM%252C_%253ByFECy8Q7jEiD6M%252ChzF46qAYeOYmJM%252C_%253Bfzm-cB-sF1nIvM%252CYlh7sHyFI9lHtM%252C_%253BH5iMgZspXetU2M%252CPAwM2l8Zxjqo9M%252C_%253BuIhNlEccvioNKM%252C-gtbbYRXUxp3KM%252C_&vet=1&usg=AI4_-kTKTEOOo0evDHQ10fweO1wxGbsTrQ&sa=X&ved=2ahUKEwjC-oTOnrjzAhWKLewKHXyZBwIQ9QF6BAgFEAE#imgrc=E__DFTIbn9J8IM`} alt="card image" style={{width: "10%", height: "10%" }} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width: "10%", height: "10%" }} />
                    }
                </div>
                <div className="card-content">
                    <p><a href="#"> View Details</a></p>
                </div>
            </div>
    )
}

export default Movie