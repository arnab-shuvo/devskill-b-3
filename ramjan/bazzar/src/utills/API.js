export const productListAPI = async () => {
    try {
        const res = await fetch(`http://localhost:8080/products`);
        const data = await res.json();
        return data;

    } catch (error) {
        console.log(error)
    }
}

export const singleProductAPI = async (id) => {
    try {
        const res = await fetch(`http://localhost:8080/products/${id}`);
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const signInAPI = async () => {
    try {
        const res = await fetch(`http://localhost:8080/signin`);
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}


export const AllUserAPI = async (token) => {
    try {
      const res = await fetch(`http://localhost:8080/user`, {
          method: "GET",
          headers: {
              'Content-type': 'application/json',
              'Authorization': `bearer ${token}`, 
          },
          body: JSON.stringify()
        })
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}



export const AllCategoryAPI = async () => {
    try {
        const res = await fetch(`http://localhost:8080/category`, );
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}


export const DeleteSingleProductAPI = async (id) => {
    
    let result = await fetch(`http://localhost:8080/products/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // 'Authorization': `bearer ${token}`, 
      },
    });
    
    result = await result.json();
}



