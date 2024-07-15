'use server';
 
export const register = async (prevState: any, queryData: FormData) => {
  const name = queryData.get('name') as string;
 
  /// Validate the name | you can use zod for validation
  if (!name || name.trim() === '') {
    return {
      name: '',
      error: 'Name is required',
      status: false,
    };
  }
 
  /// Save the name to the database
  console.log(name);
 
  return {
    name: '',
    email:'',
    password: '',
    error: "",
  };
};