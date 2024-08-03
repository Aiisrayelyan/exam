import { handleAddUser } from '../lib/actions';

export async function POST(req:Request){
  const data = await req.json();
  const result = await handleAddUser(null, data);

  if (result.message !== 'Login successful') {
    return Response.json({
      result
    }, {status: 400});
  }
    
  const user = result.user;
  
  return Response.json({
    message: 'Added user',
      user
  }, {
    status: 200
  })
}