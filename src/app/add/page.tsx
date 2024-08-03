"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddPage() {
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleAdd = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
    
        const data = {
          login: formData.get('name'),
          surname: formData.get('surname'),
          username: formData.get('username'),
          salary: formData.get('salary')
        };
    
        try {
          const response = await fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const result = await response.json();
    
          if (result.message) {
            setMessage(result.message);
          }
    
          if (result.message === 'Added user') {
            router.push('/');
          }
        } catch (error) {
          console.error('There was an error!', error);
          setMessage('An unexpected error occurred.');
        }
      };

    return (
        <main className="p-4 px-6 mx-6">
          <h1 className="is-size-3">Add User</h1>
          <div className="columns">
            <div className="column is-two-fifths p-4">
              <form className="box" onSubmit={handleAdd}>
                <div className="field my-4">
                  <input 
                    type="text" 
                    className="input is-dark"
                    placeholder="please enter name"
                    name="name"
                  />
                </div>
                <div className="field my-4">
                  <input 
                    type="text" 
                    className="input is-dark"
                    placeholder="please enter surname"
                    name="surname"
                  />
                </div>
                <div className="field my-4">
                  <input 
                    type="text" 
                    className="input is-dark"
                    placeholder="please enter username"
                    name="username"
                  />
                </div>
                <div className="field my-4">
                  <input 
                    type="number" 
                    className="input is-dark"
                    placeholder="please enter salary"
                    name="salary"
                  />
                </div>
                {message && <p className="has-text-danger">{message}</p>}
                <button className="button is-success" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </main>
      );
}