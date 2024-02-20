import 'bulma/css/bulma.css'
import Profilecard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";


function App() {
    return (
        <div>
            <section className="hero is-primary">
             <div className="hero-body">
                <p className="tile">personal Digital Assistans</p>
             </div>
            </section>
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                      <Profilecard title="Alexa" 
                                   handle="@Alexa99" 
                                   image={AlexaImage}
                                   discription="Alexa was created by Amazon."/>
                        </div>
                        <div className="column is-4">
                          <Profilecard title="Cortana" 
                                       handle="@Cortana32" 
                                       image={CortanaImage}
                                       discription="Cortana was created by Microsoft."/>
                            </div>
                            <div className="column is-4">
                              <Profilecard title="Siri" 
                                           handle="@Siri01" 
                                           image={SiriImage}
                                           discription="Siri was created by Apple."/> 
                     </div>
                    </div>
             </section>
         </div>    
        </div>
    )
}

export default App;
