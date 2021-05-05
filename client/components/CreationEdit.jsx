import React, { useEffect, useState } from 'react'
import { IoLogoInstagram } from 'react-icons/io'

import { getCreationById } from '../apis/api'

export default function CreationEdit () {
  // const [creation, setCreation] = useState(null)
  const [imgIdx, setImgIdx] = useState(0)
  const [currentImg, setCurrentImage] = useState('')
  const [form, setForm] = useState({
    name: '',
    shape: '',
    status: '',
    clay: '',
    weight: '',
    glaze: '',
    makersNote: '',
    description: ''
  })
  const shapes = ['vase', 'mug', 'plate', 'bowl', 'artistic']
  const images = ['/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg', '/images/vase.png', '/images/plate.jpeg']
  const statuses = ['leather hard', 'wet', 'glazed', 'glaze firing']
  const clays = ['white', 'red', 'white speckle']
  useEffect(() => {
    getCreationById(1)
      .then((resp) => {
        console.log(resp)
        // setCreation(resp)
        setForm({
          name: resp.name,
          shape: resp.shape,
          status: resp.status,
          clay: resp.clay,
          weight: resp.weight,
          glaze: resp.glaze,
          makersNote: resp.makersNote,
          description: resp.description
        })
        return null
      })
      .catch((error) => {
        console.log('error: ', error.message)
      })
  }, [])

  useEffect(() => {
    setCurrentImage(images[imgIdx])
  }, [imgIdx])

  const getImage = (idx) => {
    setImgIdx(idx)
  }

  const handleChange = (e) => {
    console.log(e.target.name)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // sendForm(form)
  }

  return (
    <>
      <form>
        <div className='creation-container edit'>

          <img className='creation-img'
            src={currentImg} />

          <div className='icon-dots' >
            {images.map((dot, idx) => {
              return <div key={idx}
                className={imgIdx === idx ? 'dot selected' : 'dot'}
                id={idx}
                onClick={() => getImage(idx)}></div>
            })}
          </div>

          <div className='text-card'>
            <div className='text-card-content'>
              <label>
                Name
                <input className='name' onChange={handleChange}
                  name='name' value={form.name} />
              </label>

              <label>
                Shape
                <select value={form.shape} onChange={handleChange}>
                  {shapes.map(shape => {
                    return <option key={shape}
                      name='shape' value={shape}>{shape}</option>
                  })}
                </select>
              </label>

              <label>
                Status
                <select value={form.status} onChange={handleChange}>
                  {statuses.map(status => {
                    return <option key={status}
                      name='status' value={status}>{status}</option>
                  })}
                </select>
              </label>

              <label>
                Clay
                <select value={form.clay} onChange={handleChange}>
                  {clays.map(clay => {
                    return <option key={clay}
                      name='clay' value={clay}>{clay}</option>
                  })}
                </select>
              </label>

              <label>
                    Last Recorded Weight
                <input className='weight' onChange={handleChange}
                  name='weight' value={form.weight} />
              </label>

              <label>
                    Makers Note
                <textarea className='makersNote' onChange={handleChange}
                  name='makersNote' value={form.makersNote} />
              </label>

              <label>
                    Description
                <textarea className='description' onChange={handleChange}
                  name='description' value={form.description} />
              </label>

              <p className='date'>March 12 2021</p>

            </div>
          </div>
          <IoLogoInstagram className='icon-instagram' />
          <button onClick={onSubmit}>Save</button>

        </div>
      </form>
    </>
  )
}
