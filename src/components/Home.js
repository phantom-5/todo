import Typed from 'typed.js'
import Particles from 'react-particles-js'
import '../App.css'
import {useEffect} from 'react'


const Home = () => {

    const options = {
        strings: ['newNote', 'recipe', 'shopping', 'apples', 'oranges', 'sgjksdtg', 'dfgjys','random','anything', 'everything'],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000
    }

    useEffect(()=>{
        var typed = new Typed('#typedItem', options);
    },[])

    return (
        <div className="container-fluid">
        <div className="container justify-content-center">
        <div class="jumbotron jumbotron-fluid vertical-center overlayDiv">
            <div className="container">
            <h1 className="display-8">/<span id="typedItem" className="text-danger"></span></h1>
            <p className="lead badge badge-pill badge-dark">Create and share lists easily</p>
            <p className="lead">Try /author</p>
            </div>
        </div>  
        </div>
        <Particles
            style={{ position: "absolute" }}
            height= "50%"
            width="100%"
            params={{
                    particles: {
                    color: {
                        value: "#007991"
                    },
                    line_linked: {
                        color: {
                        value: "#ffffff"
                        }
                    },
                    number: {
                        value: 10
                    },
                    size: {
                        value: 3
                    },
                }
            }}
      />
      </div>
      
    )
}

export default Home