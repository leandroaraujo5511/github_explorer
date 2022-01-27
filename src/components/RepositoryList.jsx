import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name:"Unform2" ,
    description:"Form in React" ,
    link:"http://github.com/unform/unform"
}



export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositosios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}