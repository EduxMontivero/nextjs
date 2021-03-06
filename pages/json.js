const Blog = ({user}) => {
    return (
        <h1>Soy el Blog de {user.name}</h1>
    )
}


export async function getServerSideProps(){
    const res = await fetch('http://prestadores.osunlar.org:88/test/')
    const data = await res.json();

    console.log(data)
    return{
        props:{
            user:data
        }
    }
}

export default Blog;
