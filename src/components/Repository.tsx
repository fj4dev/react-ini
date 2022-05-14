import '../styles/repositories.scss';
import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react';

// https://api.github.com/orgs/rocketseat/repos

interface Repository{
    name: string,
    description: string,
    html_url: string
}

export function RespositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(()=>{

        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));

    },
    [repositories]);

    return (
        <section className="repository-list" >
            <h1>Listad e respositórios</h1>

            <ul>
                { repositories.map( item =>{
                    return  <RepositoryItem key={item.name} repository={item}/>
                })}
            </ul>
        </section>
    )
}