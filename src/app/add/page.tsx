"use client"

import { useActionState } from "react";
import { handleAdd } from "../../lib/actions";

export default function Home() {
  const [state, handleAddAction] = useActionState(handleAdd, {message:""})

  return (
    <main className="p-4 px-6 mx-6">
      <h1 className="is-size-3">Add User</h1>
      <div className="columns">
        <div className="column is-two-fifths p-4">
          <form className="box"  action={handleAddAction}>
          {state?.message && <p style = {{color:'red'}}>{state.message}</p>}

              <div className="field my-4">
                <input 
                  type="text" 
                  className="input is-dark"
                  placeholder="please enter your name"
                  name="name"
                />
              </div>
              <div className="field my-4">
                <input 
                  type="text" 
                  className="input is-dark"
                  placeholder="please enter your surname"
                  name="surname"
                />
              </div>
              <div className="field my-4">
                <input 
                  type="text" 
                  className="input is-dark"
                  placeholder="please enter your username"
                  name="username"
                />
              </div>
              
              <div className="field my-4">
                <input 
                  type="text" 
                  className="input is-dark"
                  placeholder="please enter your salary"
                  name="salary"
                />
              </div>
              <div className="field my-4">
                <input 
                  type="password" 
                  className="input is-dark"
                  placeholder="please enter your password"
                  name="password"
                />
              </div>
              <button className="button is-success">submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
