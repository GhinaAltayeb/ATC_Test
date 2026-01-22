import React, { useMemo, useState } from 'react'
import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-theme-quartz.css"; 
ModuleRegistry.registerModules([AllCommunityModule]);

function Table() {
    const [rowData, setRowData] = useState([
        { name: "Ghina", age: 15, email: "ghina@gmail.com", phone: "0933442130", address: "Maysat" },
        { name: "Ali", age: 22, email: "ali@gmail.com", phone: "0999888777", address: "Damascus" },
        { name: "Sara", age: 30, email: "sara@gmail.com", phone: "0944556677", address: "Homs" },
        { name: "Omar", age: 28, email: "omar@gmail.com", phone: "0933555777", address: "Aleppo" },
        { name: "Lina", age: 25, email: "lina@gmail.com", phone: "0933444555", address: "Latakia" },
        { name: "Ahmad", age: 35, email: "ahmad@gmail.com", phone: "0944667788", address: "Tartous" },
        { name: "Maya", age: 27, email: "maya@gmail.com", phone: "0933111222", address: "Hama" },
        { name: "Yara", age: 21, email: "yara@gmail.com", phone: "0933222333", address: "Daraa" },
        { name: "Khaled", age: 40, email: "khaled@gmail.com", phone: "0999000111", address: "Quneitra" },
        { name: "Noor", age: 19, email: "noor@gmail.com", phone: "0933555999", address: "Idlib" },
    ]);

    const columns = [
        { field: "name", headerName: "Name", width: 200 },
        { field: "age", headerName: "Age", width: 100 },
        { field: "email", headerName: "Email", width: 250 },
        { field: "phone", headerName: "Phone", width: 150 },
        { field: "address", headerName: "Address", width: 300 },
        {
            field: "action",
            headerName: "Action",
            width: 100,
            cellRenderer: (params) => {
                return (
                    <div className="flex gap-2">
                        <button
                            onClick={() => deleteRow(params)}
                            style={{ color: "red", fontWeight: "bold" }}
                        >
                            delete
                        </button>
                    </div>
                );
            },
        },
    ]

    const deleteRow = (params) => {
        setRowData((prev) =>
            prev.filter((row) => row !== params.data)
        )
    }

    const onFilterChanged = (params) => {
        const filterModel = params.api.getFilterModel()
        console.log(filterModel)
    }

    const onSortChanged = (params) => {
        const sortState = params.api
            .getColumnState()
            .filter((c) => c.sort)
            .map((c) => ({
                colId: c.colId,
                sort: c.sort,         
                sortIndex: c.sortIndex 
            }))
            .sort((a, b) => (a.sortIndex ?? 0) - (b.sortIndex ?? 0))
        console.log("Sort state:", sortState)
    }

    const onRowSelected = (event) => {
        if (event.type === "rowSelected") {
            console.log("Selected row:", event.data);
        }
    }

    const rowSelection = useMemo(() => {
        return {
            mode: 'multiRow',
        };
    }, []);

    const defaultColDef = useMemo(() => ({
        sortable: true,
        filter: true,
        flex: 1,
        resizable: true,
        suppressHeaderMenuButton: true,
        suppressHeaderContextMenu: true,
    }), []);

    const myTheme = themeQuartz.withParams({
        spacing: 6,
        foregroundColor: "var(--color-primary)",
        headerTextColor: "var(--color-secondary)",
        backgroundColor: "var(--bg-primary)",
        headerBackgroundColor: "var(--text-primary)",
        cellTextColor: "var(--color-primary)",
        borderColor: "#aca8a867",
        fontSize: "var(--font-medium)",
        headerFontSize: "var(--font-normal)",
        columnBorder: true,
        wrapperBorder: true,
        rowHoverColor: "#B1B6BB30",
        accentColor: "#349BEF",
    })

    const theme = useMemo(() => {
        return myTheme;
    }, [])
    return (
        <AgGridReact
            rowData={rowData}
            columnDefs={columns}
            defaultColDef={defaultColDef}
            theme={theme}
            rowSelection={rowSelection}
            
            pagination={true}
            paginationPageSize={5}
            paginationPageSizeSelector={[5,10,20,30]}

            onRowSelected={onRowSelected}
            onFilterChanged={onFilterChanged}
            onSortChanged={onSortChanged}
            
            domLayout="autoHeight"
        />
    )
}

export default Table