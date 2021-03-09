import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'uniform',
    description: 'Forms in React',
    link: 'https://github.com/uniform'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositório</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}