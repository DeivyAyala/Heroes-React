import React from 'react'
import queryString from 'query-string'


import { HeroCard } from '../components/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroByName } from '../helpers'


export const SerchPage = () => {

  const navigate = useNavigate(); //Obtener la navegación
  const location = useLocation() //obtener la información de la ubicación donde nos encontramos 

  const {q = ''} = queryString.parse(location.search) //encontra el query (opcional)

  const heroes = getHeroByName(q)

  const showSerch = (q.length == 0);
  const showError = (q.length > 0 && heroes.length === 0);



  const {serchText, onInputChange, onResetForm} = useForm({
    serchText: ''  //Tiene que ser igual al name 
  });

  const onSerchSubmit = (e) => {
    e.preventDefault();
    // if(serchText.trim().length <= 2) return;
    navigate(`?q=${serchText}`)
    onResetForm()
  }

  return (
    <>
      <h1>Search</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Busquedas</h4>
          <hr/>
          <form onSubmit={onSerchSubmit}>
            <input
              type='text'
              placeholder='Busqueda de hero'
              className='form-control'
              name='serchText'
              autoComplete='off'
              value={serchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-2'>
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr/>
          {/* {
            (q === '')
            ? <div className='alert alert-primary'> Buscar un Hero </div>
            : (heroes.length === 0) 
            && <div className='alert alert-danger'>Hero no encontrado! - <b>{q}</b></div>

          } */}

          <div className="alert alert-primary animate__animated animate__fadeInLeft" style={{display: showSerch ? '' : 'none' }}>
            Buscar Un hero
          </div>
          <div className='alert alert-danger animate__animated animate__fadeInLeft' style={{display: showError ? '' : 'none' }}>
            Hero no encontrado! - <b>{q}</b></div>
         {
          heroes.map(hero => (
            <HeroCard key={hero.id} {...hero}/>
          ))
         }  
        </div>
      </div>
  
    </>
  )
}
