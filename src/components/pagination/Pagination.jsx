import { useEffect, useState } from 'react';
import { Pagination, Stack } from '@mui/material';
import axios from 'axios';
import React from 'react';
import './Pagination.css'

function Paginating(props) {

    const [page, setPage] = useState(props.Page)

    let totalCount = Math.ceil(props.User.public_repos / 4)

    useEffect(() => {
        axios.get(`https://api.github.com/users/${props.UserName}/repos?per_page=4&page=${page}`)
            .then(response => {
                props.setReposAC(response.data)
                console.log(response.data)
            });
    }, [page])

    return (
        <div className='pagination'>
            <Stack spacing={2}>
                {!!props.User.public_repos && (
                    <Pagination
                        color="primary"
                        shape="rounded"
                        count={totalCount}
                        page={page}
                        onChange={(_, num) => setPage(num)}
                    />
                )}
            </Stack>
        </div>
    )
}

export default Paginating