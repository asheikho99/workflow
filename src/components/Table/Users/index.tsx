import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import Link from '@mui/material/Link';

const columns = [
    { field: 'id', headerName: 'ID', flex: 1, hide: true },
    { field: 'firstName', headerName: 'First name', flex: 1 },
    { field: 'lastName', headerName: 'Last name', flex: 1 },
    { field: 'Entry', headerName: 'Entry', type: 'string', flex: 1 },
    { field: 'Leave', headerName: 'Leave', type: 'string', flex: 1 },
    {
        field: 'Resume', headerName: 'Resume', type: 'string', sortable: false, flex: 1,
        renderCell: (_params: any) => {
            return (
                <>
                    <Link href={`${_params.row.Resume}`}>View</Link>
                </>
            )
        }
    },
    { field: 'Rating', headerName: 'Rating', type: 'number', flex: 1 },
];

const rows = [
    { id: 1, firstName: 'John', lastName: 'Smith', Entry: 0, Leave: 0, Resume: "https://www.google.ca/", Rating: "0%" },
    { id: 2, firstName: 'Alex', lastName: 'Williams', Entry: 0, Leave: 0, Resume: "https://www.google.ca/", Rating: "0%" }
];

function TableUsers() {
    return (
        <div className='mt-6 mb-6'>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                autoHeight={true}
                autoPageSize={true}
                hideFooterSelectedRowCount={true}
            />
        </div>
    )
}

export default TableUsers