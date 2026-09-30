export type Receipt = {
    id: string,
    name: string, 
    url: string,
    activity_status: boolean,
    created: string
}

export type ReceiptsTableProps = {
    receipts: Receipt[]
}