import Navbar from "./Navbar"
import "./Homepage.css"
import welcomeGIF from "./welcome.gif"

function Homepage(){
    return (
      <>
        <Navbar />
        <div>
          <h1 className="headerHomepage">Welcome!</h1>
          <img src={welcomeGIF}/>
          <p class="textcontent">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Tempus ex
            ullamcorper litora pellentesque magna ex. Finibus mattis justo
            maecenas; facilisi mattis cras ac vulputate. Id fringilla ac
            ultricies commodo faucibus tortor porttitor porta. Lacinia est
            sollicitudin donec eros tortor pellentesque eu lobortis. Feugiat
            volutpat iaculis at habitasse condimentum volutpat faucibus. Laoreet
            scelerisque sed ultricies ante efficitur, libero aliquet id viverra.
            Commodo praesent convallis ridiculus class lobortis. Interdum fames
            tincidunt elementum bibendum posuere justo mus a? Augue sed faucibus
            aliquam justo quam dolor. Nulla class ante; mattis parturient
            gravida felis montes lorem. Eget consequat tempus ac consectetur
            felis est aliquam sociosqu. Nascetur dui dignissim velit aptent
            tincidunt at. Finibus consectetur etiam suspendisse, massa netus
            convallis cras non. Aliquet lobortis netus blandit leo aptent nibh
            penatibus nec lectus. Praesent dui iaculis enim nibh vitae ridiculus
            eget. Ut cubilia pharetra est pretium proin eget vulputate. Congue
            pharetra efficitur gravida fringilla vel pellentesque pellentesque.
            Viverra volutpat leo interdum egestas; ultrices varius primis risus.
            Per lectus elit taciti congue vel. Efficitur lobortis cras
            pellentesque eget fusce ad accumsan scelerisque. Dictumst nec
            fringilla lacinia potenti dolor aliquam aptent pretium.
          </p>
        </div>
      </>
    );
}

export default Homepage