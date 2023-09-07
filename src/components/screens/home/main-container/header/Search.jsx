import React, { useEffect, useState } from 'react'
import styles from './Search.module.scss'
import SearchInput from '../../../../ui/inputs/SearchInput';
import SearchService from '../../../../../API/SearchServiсe.js';
import FoundAuthor from './results/FoundAuthor';
import FoundTrack from './results/FoundTrack';


const Search = () => {
    const [outputVisible, setOutput] = useState(false)
    const [authors, setAuthors] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([])

    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    };

    useEffect(() => {
        if (searchValue !== '') {
            setOutput(true)
        } else {
            setOutput(false)
        }
        async function fetchSearch() {
            try {
                if (searchValue !== '') {
                    const found_tracks = await SearchService.getSearchTracks(searchValue);
                    setResults(found_tracks);
                    const found_authors = await SearchService.getSearchAuthors(searchValue);
                    setAuthors(found_authors)
                }
                
            } catch (error) {
                console.error('Error on fetching search', error);
            }
        }
        fetchSearch()
    }, [searchValue])

    return (
        <div className={styles.search}>
            <SearchInput value={searchValue} onChange={handleSearchInputChange} />
            <div style={{ display: outputVisible ? 'block' : 'none' }} className={styles.output_container}>
                {authors.map(author => <FoundAuthor key={author.id} author={author} />)}
                {results.map(res => <FoundTrack key={res.id} track={res} />)}
            </div>
        </div>
    );
}

export default Search;