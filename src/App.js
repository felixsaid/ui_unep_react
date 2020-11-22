import './App.css';
import ListProjects from "../src/components/ListProjects";

function App() {
  return (
    <div className="container">
        <h1 className="mt-5 text-center">Projects Management</h1>
        <p className="text-center">
            This small proect is designed with ReactJS - APIs have been developed
            with NodeJS. The database used is MySQL. <br /> I have also used bootstrap to develop this UI.
        </p>

        <hr />
        <br />

        <h3 className="mt-5 text-center">List of Projects</h3>   
        <br />

        <ListProjects />     
    </div>
  );
}

export default App;
