import React, { useCallback } from 'react';
import SearchInput from 'components/SearchInput/SearchInput';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const onSearch = useCallback((searchTerm) => navigate(`/products/${searchTerm}`), []);
    return <SearchInput onSearch={onSearch} />
}

export default Home;