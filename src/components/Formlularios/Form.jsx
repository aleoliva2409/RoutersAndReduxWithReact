import React, { useState } from 'react'

const Form = () => {

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    celPhone: ""
  })

  const handleForm = (e) => {

    let newForm = {
      ...form,
      [e.target.name]: e.target.value,
    }

    setForm(newForm)

    // setForm({
    //   ...form,
    //   [e.target.name]: e.target.value,
    // })
  }


  return (
    <div>
      <div>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name..."
          value={form.name}
          onChange={handleForm}
        />
      </div>
      <div>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Lastname..."
          value={form.lastName}
          onChange={handleForm}
        />
      </div>
      <div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email..."
          value={form.email}
          onChange={handleForm}
        />
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password..."
          value={form.password}
          onChange={handleForm}
        />
      </div>
      <div>
        <input
          id="celPhone"
          name="celPhone"
          type="number"
          placeholder="Cel Phone..."
          value={form.celPhone}
          onChange={handleForm}
        />
      </div>
    </div>
  )
}

export default Form
