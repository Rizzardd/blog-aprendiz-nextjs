import { useState } from "react";
import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { useEffect } from "react";
import ArticleForm from "../components/ArticleForm";


function MainPage() {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        buscar();
    }, [])
    const buscar = (async ()=> {
        const result = await axios.get('http://localhost:3000/api/posts');
        console.log(result.data)
        setArticles(result.data)
    })
    return (
        <>
            <div className="blog">
                <Header/>
                <Banner/>
                <Articles data={articles}/>
                <ArticleForm onSubmit={ async (value) => {
                   axios.post("http://localhost:3000/api/posts", value)
                   buscar()
                }}/>
            </div>
            <Footer/>
        </>
    )
}

export default MainPage;