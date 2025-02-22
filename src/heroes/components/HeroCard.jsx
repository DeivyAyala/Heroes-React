import React from 'react'
import { Link } from 'react-router-dom'

const CharactersByHero = ({alter_ego, characters}) => {
    // if(characters === alter_ego) return (<></>);
    // return <p>{characters}</p>
    return (characters === alter_ego)?
    <></>
    :<p>{characters}</p>
}

export const HeroCard = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImgUrl = `/assets/heroes/${ id }.jpg`

    // const CharactersByHero = (<p>{characters}</p>)

  return (
    <div className='col animate__animated animate__fadeIn '>
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4 ">
                    <img src={heroImgUrl} className="card-img" alt={superhero} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className='card-tilte'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>
                        {/* {
                            (alter_ego !== characters) && CharactersByHero
                        } */}
                        <CharactersByHero characters={characters} alter_ego={alter_ego}/>
                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}> {/* Aqui se recibe el id(pagina propia de cada heroe) que se va al Hero Routers */}
                            Mas..
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
